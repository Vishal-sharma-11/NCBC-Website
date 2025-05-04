const express = require("express");
const navrouter = express.Router();
const pool = require("../config/db");

// Recursive function to build nested menu
const buildMenuTree = (flatMenu, parentId = null) => {
  if (!Array.isArray(flatMenu)) {
    throw new Error("Expected flatMenu to be an array");
  }
  return flatMenu
    .filter(item => item.parent_id === parentId)
    .map(item => ({
      id: item.id,
      title: item.title,
      url: item.url,
      icon_svg: item.icon_svg,
      children: buildMenuTree(flatMenu, item.id)
    }));
};

navrouter.get("/menu", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM menu_items ORDER BY id");

    // Check if result is an array or not
    const rows = Array.isArray(result) ? result : result[0];

    if (!Array.isArray(rows)) {
      throw new Error("Query result is not an array");
    }

    // Build the menu tree
    const menuTree = buildMenuTree(rows);

    res.json(menuTree);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ error: error.message });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = navrouter;
