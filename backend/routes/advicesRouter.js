const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pool = require("../config/db");

const advicesRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/advices/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Add new advice (with optional file)
advicesRouter.post("/add", upload.single("pdf"), async (req, res) => {
  const { state, caste, parent_id } = req.body;
  const file = req.file ? `/uploads/advices/${req.file.filename}` : null;

  try {
    const conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO advices (state, caste, file_name, parent_id) VALUES (?, ?, ?, ?)",
      [state, caste, file, parent_id || null]
    );
    conn.release();
    res.json({ message: "Advice added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add advice" });
  }
});

// Get all parent advices
advicesRouter.get("/parents", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM advices WHERE parent_id IS NULL");
    conn.release();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch parents" });
  }
});

// Get children of a parent advice
advicesRouter.get("/children/:parent_id", async (req, res) => {
  const { parent_id } = req.params;
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM advices WHERE parent_id = ?", [parent_id]);
    conn.release();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch children" });
  }
});

// Add new top-level state only
advicesRouter.post("/addState", async (req, res) => {
  const { state } = req.body;
  try {
    const conn = await pool.getConnection();
    await conn.query("INSERT INTO advices (state) VALUES (?)", [state]);
    conn.release();
    res.json({ message: "State added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add state" });
  }
});

// Get list of all distinct states
advicesRouter.get("/getStates", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT DISTINCT state FROM advices");
    conn.release();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch states" });
  }
});

// Get all advices
advicesRouter.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM advices");
    conn.release();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch advices" });
  }
});

// Delete advice (and file if exists)
advicesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const conn = await pool.getConnection();

    const [rows] = await conn.query(
      "SELECT file_name FROM advices WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      conn.release();
      return res.status(404).json({ message: "Advice not found" });
    }

    const filePath = rows.file_name ? path.join(__dirname, "..", rows.file_name) : null;

    // Delete file if exists
    if (filePath && fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) console.error("Error deleting file:", err);
      });
    }

    // Delete advice (children will be auto-deleted due to ON DELETE CASCADE)
    await conn.query("DELETE FROM advices WHERE id = ?", [id]);
    conn.release();

    res.json({ message: "Advice deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update advice (state, caste, file)
advicesRouter.put("/:id", upload.single("pdf"), async (req, res) => {
  const { id } = req.params;
  const { state, caste } = req.body;
  const file = req.file ? `/uploads/advices/${req.file.filename}` : null;

  try {
    const conn = await pool.getConnection();

    let updateQuery = "UPDATE advices SET state = ?, caste = ?" + (file ? ", file_name = ?" : "") + " WHERE id = ?";
    let params = file ? [state, caste, file, id] : [state, caste, id];

    await conn.query(updateQuery, params);
    conn.release();

    res.json({ message: "Advice updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update advice" });
  }
});

module.exports = advicesRouter;
