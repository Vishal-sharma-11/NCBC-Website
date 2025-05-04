import { NoAccounts } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      {/* Top Bar: Skip to Content, Accessibility, Language */}
      <div className="top-bar">
        <div className="search-container">
          <span className="menu-icon">☰</span>
          <input type="text" placeholder="Search" />
          <span className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="10" cy="10" r="7" stroke="#808080" strokeWidth="2" />
              <line
                x1="14"
                y1="14"
                x2="20"
                y2="20"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>
          </span>
        </div>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <b>|</b>
        <svg
          width="50"
          height="25"
          viewBox="0 0 50 25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="5" y="18" fontSize="16" fontWeight="bold" fill="black">
            अ
          </text>
          <line x1="25" y1="4" x2="21" y2="23" stroke="black" strokeWidth="2" />
          <text x="25" y="18" fontSize="16" fontWeight="bold" fill="black">
            A
          </text>
        </svg>
        <b>|</b>
        <span className="icon" title="site-map">
          sitemap
        </span>
        <b>|</b>
        <span className="icon" title="Accessibility">
          Accessibility
        </span>
        <svg
          width="25"
          height="25"
          viewBox="0 0 122.88 122.88"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>accessibility</title>
          <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z" />
        </svg>
      </div>

      {/* Horizontal Divider */}
      <div className="divider"></div>

      {/* Main Header Content */}
      <div className="header">
        {/* Left Section: Logo and Title */}
        <div className="header-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Indian Government Emblem"
            className="logo"
          />
          <div className="title-section">
            <h1 className="title">National Commission for Backward Classes</h1>
            <p className="subtitle">
              A Constitutional Body under
              <br />
              Article 338B of the Constitution of India
            </p>
          </div>
        </div>

        <div className="right-section">
          <button className="glossy-button" onClick={() => navigate('/login')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            OFFICER'S LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
