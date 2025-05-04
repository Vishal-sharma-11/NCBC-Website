const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const router = express.Router();


router.get("/contact", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const columns = await conn.query(`
      SELECT * from contact_us
    `);
    conn.release();
    res.json(columns);
  } catch (err) {
    console.error("Error checking columns:", err);
    res.status(500).json({ error: "Failed to check table structure" });
  }
});
router.post("/addContact", async (req, res) => {
  const { name, intercom, designation, email, roomNo, telephone, category } =
    req.body;

  try {
    const conn = await pool.getConnection();
    const sql =
      "INSERT INTO contact_us (NAME, intercom,designation, email, room_no, telephone, category) VALUES (?, ?, ?, ?, ?, ?, ?);";
    await conn.query(sql, [
      name,
      intercom,
      designation,
      email,
      roomNo,
      telephone,
      category,
    ]);

    res.status(201).json({ message: "Contact added successfully" });
    conn.release();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding contact" });
  }
});
router.delete("/deleteContact/:id", async (req, res) => {
  const { id } = req.params;
  
  try {

    const conn = await pool.getConnection();
    const result = await conn.query("DELETE FROM contact_us WHERE id = ?", [id]);
    
    if (result.affectedRows === 0) {
      console.log(result);
      return res.status(404).json({ error: "Record not found" });
    }
    res.status(200).json({ message: "Record deleted successfully" });
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/contact/:id", async (req, res) => {
  const { id } = req.params;
  const { name, intercom, designation, email, room_no, telephone, category } = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      "UPDATE contact_us SET name=?, intercom=?, designation=?, email=?, room_no=?, telephone=?, category=? WHERE id=?",
      [name, intercom, designation, email, room_no, telephone, category, id]
    );
    res.json({ message: "Contact updated successfully" });
  } catch (err) {
    console.error("Error updating contact:", err);
    res.status(500).json({ error: "Update failed" });
  } finally {
    if (conn) conn.release();
  }
});


module.exports = router;
