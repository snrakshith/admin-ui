import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarListIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarListIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarListIcon" />
              Users
            </li>
            <li className="sidebarListItem ">
              <LineStyle className="sidebarListIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarListIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarListIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarListIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarListIcon" />
              Manager
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarListIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarListIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
