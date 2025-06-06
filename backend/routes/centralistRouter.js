const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pool = require("../config/db");

const centralistRouter = express.Router();
const storage = multer.diskStorage({
  destination: "uploads/centralist/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

centralistRouter.post("/add", upload.single("pdf"), async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const caste = req.body.caste;
    const state = req.body.state;
    console.log(req.file);
    if (req.file) {
      const pdf_url = `/uploads/centralist/${req.file.filename}`;
      await conn.query(
        "INSERT INTO centralist (state_region, caste_community, pdf_url) VALUES (?, ?, ?)",
        [state, caste, pdf_url]
      );
    } else {
      await conn.query(
        "INSERT INTO centralist (state_region, caste_community) VALUES (?, ?)",
        [state, caste]
      );
    }

    conn.release();
    res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
centralistRouter.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM centralist");
    res.json(data);
    conn.release();
    //   res.json({ message: "Structure added successfully" });
  } catch (error) {
    console.log(error);
  }
});
centralistRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const conn = await pool.getConnection();

    // Get the PDF path first
    const [rows] = await conn.query(
      "SELECT pdf_url FROM centralist WHERE id = ?",
      [id]
    );

    if (rows.length === 0) {
      conn.release();
      return res.status(404).json({ message: "Not found" });
    }
    if (rows.pdf_url) {
      const pdfPath = path.join(__dirname, "..", rows.pdf_url); // Full file path

      // Delete the file
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          // You can still delete the DB entry even if file deletion fails
        }
      });
    }

    // Delete from DB
    await conn.query("DELETE FROM centralist WHERE id = ?", [id]);
    conn.release();

    res.json({ message: "Title and PDF deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = centralistRouter;
