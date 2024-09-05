import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/no-background.jpg";

function Sidebar({ handleLogout }) {
  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  return (
    <div className="sidebar">
      <div className="logo-sidebar">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul>
        <li className="sidebar-item">
          <div className="icon-column">
            <Link to="/">
              {/* Home Icon */}
            </Link>
          </div>
          <div className="text-column">
            <Link to="/">Home</Link>
          </div>
        </li>
        <li className="sidebar-item list-bottom">
          <div className="icon-column">
            <a href="#" onClick={closeTab}>
              {/* Close Icon */}
            </a>
          </div>
          <div className="text-column">
            <a href="#" onClick={handleLogout}>
              Sair
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;