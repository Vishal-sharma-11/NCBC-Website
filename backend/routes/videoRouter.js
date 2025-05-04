// routes/videoRouter.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const pool = require("./../config/db");

const videoRouter = express.Router();

// Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/video-gallery/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// Multer Upload Config (Accept only videos)
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /mp4|avi|mov|mkv/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb("Error: Only video files allowed!");
    }
  },
});

// POST route to upload a video
videoRouter.post("/upload", upload.single("video"), async (req, res) => {
  const { title, video } = req.body;
  const file = req.file ? `/uploads/video-gallery/${req.file.filename}` : null;
  try {
    const conn = await pool.getConnection();
    await conn.query("INSERT INTO VIDEOS (title, file_path) VALUES (?, ?)", [
      title,
      file,
    ]);
    conn.release();
    res.status(201).json({
      message: "Video uploaded successfully",
      filePath: `/videos/${req.file.filename}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET route to list all uploaded videos (Optional)
const fs = require("fs");

videoRouter.get("/", async(req, res) => {
    try {
        const conn = await pool.getConnection();
        const data = await conn.query("SELECT * FROM videos");
        conn.release();
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" });
      }
});

videoRouter.delete("/:id", async(req,res) => {
  const { id } = req.params;

    try {
      const conn = await pool.getConnection();
  
      // Get the PDF path first
      const [rows] = await conn.query("SELECT file_path FROM videos WHERE id = ?", [id]);
        
      if (rows.length === 0) {
        conn.release();
        return res.status(404).json({ message: "File not found" });
      }
  
      const pdfPath = path.join(__dirname, "..", rows.file_path); // Full file path
  
      // Delete the file
      fs.unlink(pdfPath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          // You can still delete the DB entry even if file deletion fails
        }
      });
  
      // Delete from DB
      await conn.query("DELETE FROM videos WHERE id = ?", [id]);
      conn.release();
  
      res.json({ message: "Video deleted successfully" });
  
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Server error" });
    }
})
module.exports = videoRouter;
