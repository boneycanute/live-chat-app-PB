import React from "react";
import "./myStyles.css";
import { useDispatch, useSelector } from "react-redux";

function MessageOthers() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  var props1 = { name: "RandomUser", message: "This is a Sample Message" };
  return (
    <div className={"other-message-container" + (lightTheme ? "" : " dark")}>
      <div className={"conversation-container" + (lightTheme ? "" : " dark")}>
        <p className={"con-icon" + (lightTheme ? "" : " dark")}>
          {props1.name[0]}
        </p>
        <div className={"other-text-content" + (lightTheme ? "" : " dark")}>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            {props1.name}
          </p>
          <p className={"con-lastMessage" + (lightTheme ? "" : " dark")}>
            {props1.message}
          </p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOthers;
