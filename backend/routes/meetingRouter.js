const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const pool = require("../config/db");

const meetingRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/meetings/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

meetingRouter.post("/add", upload.single("pdf"), async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const year = req.body.year;
    const dates_of_meeting = req.body.date;
    const chaired_by = req.body.chaired;
    const pdf_url = `/uploads/meetings/${req.file.filename}`;
    await conn.query("INSERT INTO meetings (annual,dates_of_meeting,chaired_by, pdf_url) VALUES (?, ?, ?, ?)", [
      year,
      dates_of_meeting,
      chaired_by,
      pdf_url,
    ]);
    conn.release();
    res.json({ message: "Report added successfully" });
  } catch (error) {
    console.log(error);
  }
});

meetingRouter.get("/", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const rules = await conn.query("SELECT * FROM meetings ORDER BY id ASC");
    res.json(rules);
    conn.release();
  } catch (error) {
    console.log(error);
  }
});

// DELETE: Remove Report
meetingRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
      const conn = await pool.getConnection();
  
      // Get the PDF path first
      const [rows] = await conn.query("SELECT pdf_url FROM meetings WHERE id = ?", [id]);
        
      if (rows.length === 0) {
        conn.release();
        return res.status(404).json({ message: "Report not found" });
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
      await conn.query("DELETE FROM meetings WHERE id = ?", [id]);
      conn.release();
  
      res.json({ message: "Report and PDF deleted successfully" });
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports = meetingRouter;
