import React from "react";
import logo from "../Images/live-chat_512px.png";
import { useDispatch, useSelector } from "react-redux";

function Welcome() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <img src={logo} alt="Logo" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;
