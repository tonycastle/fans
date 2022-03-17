import { useState } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Avatar, Button } from "@material-ui/core";

import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(true);
  };

  const closeSideBar = () => {
    setIsOpen(false);
  };

  return (
    <div className="sidebar">
      <a href="">close</a>
      <a href="my profile">my profile</a>
      <a href="settings">settings</a>
      <a href="cards">My cards(to subscribe)</a>
      <a href="bank">Add Bank(get paid)</a>
      <a href="support">Help & Support</a>
      <a href="theme">Dark Mode</a>
      <a href="language">English</a>
      <a href="log-out">Log Out</a>
    </div>
  );
};

export default Sidebar;
