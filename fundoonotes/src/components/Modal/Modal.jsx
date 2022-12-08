import React from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Modalcss from "./Modal.css";
import { useState } from "react";
import { archiveAPI } from "../../Services/notesService";
import { ColorAPI } from "../../Services/notesService";
import { UpdateNotes } from "../../Services/notesService";
import { Link } from "react-router-dom";

function Modal({ note }) {
  const [archive, SetArchive] = useState(false);
  const [viewColor, setViewColor] = useState(false);
  const [viewDashboard, setviewDashboard] = useState(false);

  const [coloris, setColor] = useState({ noteId: note, color: "white" });
  const colorHandler = () => {
    setViewColor(true);
  };
  const updateColor = (event) => {
    setColor({ ...coloris, color: event.target.name });
    ColorAPI(coloris);
  };

  const [updateNote, setUpdateNote] = useState({
    _id: note._id,
    title: note.title,
    description: note.description,
  });
  const updateNotes = (event) => {
    setUpdateNote({ ...updateNote, [event.target.name]: event.target.value });
    // console.log("in update",updateNote)
  };
  const updateIt = () => {
    
    UpdateNotes(updateNote);
    console.log("inside modal,",updateNote);
    setviewDashboard(!viewDashboard);
    window.location.reload();
  };
  //    console.log("In modal")
  if (!viewDashboard) {
    return (
      <>
        <div className="shadow-effect"></div>
        <div className="ModalMainDiv">
          <div className="ModalCss" style={{ backgroundColor: "white" }}>
            <input
              type="text"
              className="TakeNote3Input"
              name="title"
              placeholder="Title"
              value={updateNote.title}
              onChange={updateNotes}
              style={{ backgroundColor: "white" }}
            />
            <textarea
              id="autoresizing"
              type="text"
              className="TakeNote3Input"
              placeholder="Take a note"
              name="description"
              value={updateNote.description}
              onChange={updateNotes}
              style={{ backgroundColor: "white" }}
            />
            <div className="Note3SymbolDiv">
              <div>
                <AddAlertOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <div>
                <PersonAddAltOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <div onClick={colorHandler}>
                <ColorLensOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <div>
                <AddPhotoAlternateOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <div>
                <SystemUpdateAltOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <div>
                <MoreVertOutlinedIcon
                  fontSize="small"
                  className="Note3Symbols"
                />
              </div>
              <button className="close-btn2" onClick={updateIt}>
                Close
              </button>
            </div>
            {viewColor && (
              <div className="colorPalate">
                <div className="red" name="red" onClick={updateColor}></div>
                <div className="pink" name="pink" onClick={updateColor}></div>
                <div className="green" name="green" onClick={updateColor}></div>
                <div
                  className="yellow"
                  name="yellow"
                  onClick={updateColor}
                ></div>
                <div
                  className="orange"
                  name="orange"
                  onClick={updateColor}
                ></div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <Link to="/"></Link>;
  }
}
export default Modal;
