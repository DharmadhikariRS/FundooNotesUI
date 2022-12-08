import React, { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";
import "./DrawerExtended.css";
import store from "../Store/Store";
import DisplayNotes from "../DisplayNotes/DisplayNotes";
import { useDispatch } from "react-redux";
const DrawerExtended = ({ extended }) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  // const [viewCase, SetviewCase] = useState("Notes");
  return (
    <>
      <div className="drawer-main-container-extend">
        <div
          className="Rowflex"
          onClick={() => {
            // extended("Notes");
            dispatch({type:"Notes"})
            navigate("/DashBoard")
          }}
        >
          <LightbulbOutlinedIcon fontSize="large" className="drawer-icons" />
          <span className="DrawerSpan">Notes</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            // extended("Reminder");
            dispatch({type:"Reminder"})
          }}
        >
          <NotificationsNoneOutlinedIcon
            fontSize="large"
            className="drawer-icons"
          />
          <span className="DrawerSpan">Reminder</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            // extended("Edit Labels");
            dispatch({type:"Edit Labels"})
          }}
        >
          <EditOutlinedIcon fontSize="large" className="drawer-icons" />
          <span className="DrawerSpan">Edit Labels</span>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            // extended("Archive");
            dispatch({type:"Archive"})
            navigate("/ArchiveNotesDisplay")
          }}
        >
          <ArchiveOutlinedIcon fontSize="large" className="drawer-icons" />
          <spans className="DrawerSpan">Archive</spans>
        </div>
        <div
          className="Rowflex"
          onClick={() => {
            // extended("Delete");
            dispatch({type:"Delete"})
            navigate("/Deletednotes")
          }}
        >
          <DeleteOutlineOutlinedIcon
            fontSize="large"
            className="drawer-icons"
          />
          <spans className="DrawerSpan">Delete</spans>
        </div>
      </div>
    </>
  );
};

export default DrawerExtended;
