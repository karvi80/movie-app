import React from "react";
import "./Sidebar0ption.css";

function SidebarOptions({ Icon, text }) {
  return (
    <div className="sidebarOptions">
      <Icon className="sidebarOptions__icon" />
      <h3>{text}</h3>
    </div>
  );
}

export default SidebarOptions;
