const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../config/db");
const forgotRouter = express.Router();

const queryDB = async (query, params) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(query, params);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  } finally {
    if (conn) conn.release();
  }
};

forgotRouter.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const users = await queryDB("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0)
      return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const expiry = new Date(Date.now() + 15 * 60 * 1000);

    await queryDB(
      "UPDATE users SET reset_token = ?, reset_token_expiry = ? WHERE email = ?",
      [token, expiry, email]
    );

    const resetLink = `http://localhost:5173/reset-password/${token}`;

    res.json({ message: "Password reset link sent", resetLink });
  } catch (err) {
    console.error("Forgot Password Error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

forgotRouter.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  try {
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const user = await queryDB("SELECT * FROM users WHERE email = ?", [
      decoded.email,
    ]);
    if (!user || user.length === 0 || user[0].reset_token !== token) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    if (new Date(user[0].reset_token_expiry) < new Date()) {
      return res.status(400).json({ message: "Token expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await queryDB(
      "UPDATE users SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE email = ?",
      [hashedPassword, decoded.email]
    );

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = forgotRouter;
