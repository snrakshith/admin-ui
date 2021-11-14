import React from "react";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-items">
        <div className="topbar-left">
          <span className="logo">Admin</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <NotificationsNone />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <div className="top-Avatar">
            <img src={require("./address.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
