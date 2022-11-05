import React from "react";
import "./footer.scss";
import zuri from "../../assets/zuri.svg";
import ingressive from "../../assets/ingressive.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={zuri} alt="zuri" />
      <p className="text">HNG Internship 9 Frontend Task</p>
      <img src={ingressive} alt="ingressive" />
    </div>
  );
}

export default Footer;
