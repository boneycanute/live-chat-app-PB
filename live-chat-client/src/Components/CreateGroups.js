import React from "react";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function CreateGroups() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"createGroups-container" + (lightTheme ? "" : " dark")}>
      <input
        placeholder="Enter Group Name"
        className={"search-box" + (lightTheme ? "" : " dark")}
      />
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
