require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");

const loginRouter = express.Router();

//JWT Middleware
const verifyToken = (roles = []) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) return res.status(401).json({ msg: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ msg: "Forbidden: Access denied" });
      }
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ msg: "Invalid token" });
    }
  };
};
loginRouter.get("/", async (req,res)=> {
  try {
    const conn = await pool.getConnection();
    const data = await conn.query("SELECT id,username,email,role FROM users;");
    res.json(data);
    conn.release();
  } catch (error) {
    console.log(error);
  }
})
loginRouter.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
    await conn.query(sql, [username, email, hashedPassword, role]);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(500).json({ error: "Database error" });
    }
  } finally {
    if (conn) conn.release();
  }
});
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
loginRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
  
    try {
      const results = await queryDB("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
  
      if (results.length === 0)
        return res.status(401).json({ error: "User not found" });
  
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) return res.status(401).json({ error: "Incorrect password" });
  
      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }

      );
  
      res.json({ message: "Login successful", token, user });
      
    } catch (err) {
      res.status(500).json({ error: "Database error" });
    }
  });
  loginRouter.get("/admin/dashboard", verifyToken(["admin"]), (req, res) => {
    res.json({ msg: "Welcome Admin!" });
  });
  loginRouter.get("/so/dashboard", verifyToken(["SO"]), (req, res) => {
    res.json({ msg: "Welcome SO!" });
  });
  loginRouter.get("/aso/dashboard", verifyToken(["ASO"]), (req, res) => {
    res.json({ msg: "Welcome ASO!" });
  });




  module.exports = loginRouter;