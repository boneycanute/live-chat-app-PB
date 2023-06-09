import React from "react";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;
