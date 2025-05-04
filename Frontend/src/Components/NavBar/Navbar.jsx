import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../GlobalStyles.css"; // Make sure this imports your original CSS

const MenuItem = ({ item, level = 1 }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li>
      <Link to={item.url}>
        {item.icon_svg && (
          <span
            className="menu-icon"
            dangerouslySetInnerHTML={{ __html: item.icon_svg }}
          />
        )}
        {item.title}
      </Link>

      {hasChildren && (
        <ul className={level === 1 ? "dropdown" : "dropdown-2"}>
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/navrouter/menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
      });
  }, []);

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`test ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
