import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="container-nav">
          <Link to="/">
            <div className="icon">The Top</div>
          </Link>
          <div className="nav-list">
            <ul>
              <li>
                <Link to="/totalMedals">Medal Board</Link>
              </li>
              <li>
                <Link to="/countries">Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
