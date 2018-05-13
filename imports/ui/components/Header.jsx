// Framework
import React from "react";
import { Link, Route } from "react-router-dom";

const Header = ({ children, goBack }) =>
  <header>
    <button onClick={goBack} className="back-button">
      {/* Image added here to show image inclusion, prefer inline-SVG. */}
      <img alt="Back" src={`/icon/header/back-white.svg`} />
    </button>
    <h1>
      {children}
    </h1>
    <Link to={"/cart"} className="right-content">Go to Cart</Link>
  </header>;

export default Header;
