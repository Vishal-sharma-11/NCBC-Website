const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pool = require("../config/db");

const memorandumRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads/memorandum/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

memorandumRouter.post("/add", upload.single("pdf"), async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const title = req.body.title;
    const pdf_url = `/uploads/memorandum/${req.file.filename}`;
    await conn.query("INSERT INTO memorandum (title, pdf_url) VALUES (?, ?)", [
      title,
      pdf_url,
    ]);
    conn.release();
    res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
memorandumRouter.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM memorandum");
    res.json(data);
    conn.release();
    //   res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
memorandumRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const conn = await pool.getConnection();

    // Get the PDF path first
    const [rows] = await conn.query(
      "SELECT pdf_url FROM memorandum WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      conn.release();
      return res.status(404).json({ message: "Not found" });
    }

    const pdfPath = path.join(__dirname, "..", rows.pdf_url); // Full file path

    // Delete the file
    fs.unlink(pdfPath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        // You can still delete the DB entry even if file deletion fails
      }
    });

    // Delete from DB
    await conn.query("DELETE FROM memorandum WHERE id = ?", [id]);
    conn.release();

    res.json({ message: "Title and PDF deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = memorandumRouter;
