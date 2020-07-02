import React from "react";

const Header = () => {
  return (
    <div className="main-container mt-2" id="container">
      <div className="overlay" />
      <div className="search-overlay" />
      <div className="topbar-nav header navbar" role="banner">
        <nav id="topbar">
          <ul className="list-unstyled menu-categories" id="topAccordion">
            <li className="menu single-menu">
              <a href="/" data-toggle="collapse" aria-expanded="false">
                <div>
                  <span>Anasayfa</span>
                </div>
              </a>
            </li>
            <li className="menu single-menu">
              <a href="/" data-toggle="collapse" aria-expanded="false">
                <div>
                  <span>Hakkımda</span>
                </div>
              </a>
            </li>
          
           
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
