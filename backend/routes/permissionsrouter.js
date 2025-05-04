require("dotenv").config();
const express = require("express");
const permissionsrouter = express.Router();
const pool = require("../config/db");

// Save or Update Role Permissions
permissionsrouter.post("/permissions", async (req, res) => {
  const { role_name, allowed_properties } = req.body;

  if (!role_name || !allowed_properties) {
    return res
      .status(400)
      .json({ message: "Role and Allowed Properties are Required." });
  }

  try {
    const conn = await pool.getConnection();
    await conn.query(
      "INSERT INTO role_permissions (role_name, allowed_properties) VALUES (?, ?)",
      [role_name, JSON.stringify(allowed_properties)]
    );
    conn.release();
    res.json({ message: "Permissions updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
permissionsrouter.put("/update", async (req, res) => {
  const { role_name, allowed_properties } = req.body;

  try {
    const conn = await pool.getConnection();

    const result = await conn.query(
      "UPDATE role_permissions SET allowed_properties = ? WHERE role_name = ?",
      [JSON.stringify(allowed_properties), role_name]
    );

    conn.release();

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Role not found." });
    }

    res.json({ message: "Permissions updated successfully." });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get Permissions for a Role
permissionsrouter.get("/permissions/:role_name", async (req, res) => {
  const { role_name } = req.params;

  if (!role_name) {
    return res.status(400).json({ message: "Role name is required." });
  }

  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT allowed_properties FROM role_permissions WHERE role_name = ?",
      [role_name]
    );
   
    if (!Array.isArray(rows) || rows.length === 0 || !rows[0]) {
      return res
        .status(404)
        .json({ message: "No permissions found for this role." });
    }

    const rawProperties = rows[0].allowed_properties;
    const allowed_properties = rawProperties ? JSON.parse(rawProperties) : [];

    res.json({ role_name, allowed_properties });
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Server Error" });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = permissionsrouter;
