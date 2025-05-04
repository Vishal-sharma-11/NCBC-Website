const express = require("express");
const multer = require("multer");
const pool = require("../config/db");
const upload = multer();
const noticeRouter = express.Router();

noticeRouter.post("/add",upload.none(), async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const start = req.body.start_date;
    const end = req.body.end_date;
    const notice = req.body.notice;
    console.log(req.body);
    await conn.query(
      "INSERT INTO notices (notice, start_date,expiry_date) VALUES (?, ?, ?)",
      [notice, start, end]
    );

    conn.release();
    res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
noticeRouter.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM notices");
    res.json(data);
    conn.release();
    //   res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
noticeRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const conn = await pool.getConnection();

    // Get the PDF path first
    const [rows] = await conn.query(
      "SELECT notice FROM notices WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      conn.release();
      return res.status(404).json({ message: "Not found" });
    }
   
    // Delete from DB
    await conn.query("DELETE FROM notices WHERE id = ?", [id]);
    conn.release();

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = noticeRouter;
