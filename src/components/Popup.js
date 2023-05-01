import React from "react";
import "./Popup.css";
import aboutUsJson from "../assets/AboutUs.json"

function Popup(props) {
    return (
      <div className="popup-container">
        <div className="popup">
          <p>{aboutUsJson.text}</p>
          <button className="popupButtonClose" onClick={props.popupClose}>Close</button>
        </div>
      </div>
    );
  }
export default Popup;
