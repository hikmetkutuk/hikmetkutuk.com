import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-container mt-2" id="container">
      <div className="overlay" />
      <div className="search-overlay" />
      <div className="topbar-nav header navbar" role="banner">
        <nav id="topbar">
          <ul className="list-unstyled menu-categories" id="topAccordion">
            <li className="menu single-menu">
              <Link to="/">
                <div>
                  <i className="fas fa-house-user"></i>

                  <span className="ml-2">Anasayfa</span>
                </div>
              </Link>
            </li>
            <li className="menu single-menu">
              <Link to="/profile">
                <div>
                  <i className="far fa-id-card" />

                  <span className="ml-2">Hakkımda</span>
                </div>
              </Link>
            </li>
            <li className="menu single-menu">
              <Link to="/blog">
                <div>
                  <i className="fas fa-clipboard-list" />

                  <span className="ml-2">Blog</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
