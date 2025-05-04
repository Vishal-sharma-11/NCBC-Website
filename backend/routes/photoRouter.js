const express = require("express");
const multer = require("multer");
const path = require("path");
const pool = require("./../config/db");

const photoRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/photo-gallery"); // Store files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const filename = file.fieldname + "-" + uniqueSuffix + fileExtension;
    cb(null, filename); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

photoRouter.post("/events", upload.single("image"), async (req, res) => {
  // 'image' is the field name from the form
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded" });
    }

    const { title, date, description } = req.body;
    const imageFilename = req.file.filename; // Get the generated filename

    const result = await pool.query(
      "INSERT INTO events (title, date, description, thumbnail_url) VALUES (?, ?, ?, ?)",
      [title, date, description, imageFilename] // Store filename in DB
    );

    // const eventId = result.insertId;
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
});
photoRouter.get("/getevents", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT * FROM events");

    res.status(200).json(data);
    conn.release();
  } catch (error) {
    console.log(error);
  }
});

photoRouter.get("/events/:id", async (req, res) => {
  const eventId = req.params.id;
  try {
    const rows = await pool.query(
      "SELECT id, title, date, description, thumbnail_url FROM events WHERE id = ?",
      [eventId]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    const event = rows[0];

    const imageRows = await pool.query(
      "SELECT image_url FROM event_images WHERE event_id = ?",
      [eventId]
    );
    const images = imageRows.map((row) => {
      return `/uploads/photo-gallery/${row.image_url}`;
    });

    res.json({
      id: event.id,
      title: event.title,
      date: event.date,
      description: event.description,
      thumbnail_url: `/uploads/photo-gallery/${event.thumbnail_url}`,
      images: images,
    });
  } catch (error) {
    console.error("Error fetching event details:", error);
    res.status(500).json({ error: "Failed to fetch event details" });
  }
});
photoRouter.post(
  "/events/:eventId/images",
  upload.array("images", 10),
  async (req, res) => {
    const eventId = req.params.eventId;
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No images were uploaded." });
    }

    try {
      // Check if the event exists
      const eventRows = await pool.query("SELECT id FROM events WHERE id = ?", [
        eventId,
      ]);
      if (eventRows.length === 0) {
        return res.status(404).json({ error: "Event not found." });
      }

      // Insert each image filename into the event_images table
      for (const file of files) {
        await pool.query(
          "INSERT INTO event_images (event_id, image_url) VALUES (?, ?)",
          [eventId, file.filename]
        );
      }

      res.status(201).json({ message: "Images added successfully." });
    } catch (error) {
      console.error("Error adding images to event:", error);
      res.status(500).json({ error: "Failed to add images." });
    }
  }
);

module.exports = photoRouter;
