import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container-nav">
          <div className="icon">The Top</div>
          <div className="nav-list">
            <ul>
              <li>Board</li>
              <li>Podium</li>
              <li>Search</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
