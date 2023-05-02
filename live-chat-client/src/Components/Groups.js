import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/live-chat_512px.png";
import { useDispatch, useSelector } from "react-redux";

function Groups() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className="list-container">
      <div className={"ug-header" + (lightTheme ? "" : " dark")}>
        <img
          src={logo}
          style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
        />
        <p className={"ug-title" + (lightTheme ? "" : " dark")}>
          Available Groups
        </p>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input
          placeholder="Search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className="ug-list">
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            Test Group
          </p>
        </div>
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            Test Group
          </p>
        </div>{" "}
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            Test Group
          </p>
        </div>{" "}
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            Test Group
          </p>
        </div>{" "}
        <div className={"list-tem" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title" + (lightTheme ? "" : " dark")}>
            Test Group
          </p>
        </div>
      </div>
    </div>
  );
}

export default Groups;
