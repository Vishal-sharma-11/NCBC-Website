const express = require("express");
const pool = require("../config/db");
const aboutRouter = express.Router();


aboutRouter.get("/getdata", async (req, res) => {
    try {
        const conn = await pool.getConnection();
        
        const data = await conn.query(`SELECT * FROM about_us`);
        conn.release();
        res.json(data);
      } catch (error) {
        console.log(error);
      }
});
aboutRouter.put("/postdata", async (req, res) => {
  const { content } = req.body;
  if (!content) {
      return res.status(400).json({ error: "Content is required" });
  }
  try {
    const conn = await pool.getConnection();
      const result = await conn.query("UPDATE about_us SET content = ? WHERE id = 1", [content]);
      conn.release();
      if (result.affectedRows === 0) {
          return res.status(404).json({ error: "Content not found" });
      }
      res.status(200).json({ message: "Content updated successfully" });
  } catch (err) {
      console.error("Error updating About Us content:", err);
      res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = aboutRouter;
