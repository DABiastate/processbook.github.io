import React, { PureComponent } from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <h1>Engineering Art</h1>
      </div>
      <nav className="nav-links">
        {/* add navigation links here */}
        <span className="aboutUsPopUp" onClick={props.onPopupOpen}>About Us</span>
        <a href="https://sdmay23-04.sd.ece.iastate.edu/" >Senior Design Website</a>
      </nav>
    </header>
  );
}

export default Header;
