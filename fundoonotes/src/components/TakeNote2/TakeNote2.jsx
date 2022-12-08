import React, { useState } from "react";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import TakeNote2Css from "./TakeNote2.css";
import { AddNoteAPI, GetNoteAPI } from "../../Services/notesService";
import TakeNote3 from "../TakeNote3/TakeNote3";
import TakeNote1 from "../TakeNote1/TakeNote1";
import DisplayNotes from "../DisplayNotes/DisplayNotes";
import ColorPoper from '../Poper/ColorPoper';

function TakeNote2() {
  const [view, setView] = useState(false);
  const [notes, setNotes] = useState({ title: "", description: "" ,color:"",isArchived:false});
  const NotesHandler = (event) => {
    setNotes({ ...notes, [event.target.name]: event.target.value });
  };
  const CreateNote = () => {
    AddNoteAPI(notes);
    setView(!view);
     window.location.reload();
  };
  const updateArchive=()=>{
  setNotes({ ...notes, isArchived:true });

  }
  if (!view) {
    return (
      <>
        <div className="TakeNote2 TakeNote2Position">
          <input
            type="text"
            name="title"
            className="TakeNote2Input"
            value={notes.title}
            placeholder="Title"
            onChange={NotesHandler}
          />
          <textarea
            type="text"
            name="description"
            value={notes.description}
            className="TakeNote2Input"
            placeholder="Take a note"
            onChange={NotesHandler}
          />

          <div className="Note2Symbolmaincontainer">
            <div className="Note2SymbolDiv">
              <AddAlertOutlinedIcon fontSize="small" className="Note2Symbols" />
              <PersonAddAltOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              {/* <ColorLensOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              /> */}
                <ColorPoper note={notes}/>
              <AddPhotoAlternateOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              <div className="archiveDiv" onClick={updateArchive}>
              <SystemUpdateAltOutlinedIcon
                fontSize="small"
                className="Note2Symbols"
              />
              </div>
              <DeleteOutlineOutlinedIcon fontSize="medium" className="Note2Symbols" />
              <UndoIcon fontSize="small" className="Note2Symbols" />
              <RedoIcon fontSize="small" className="Note2Symbols" />
            </div>
            <button className="close-btn">
              <a href="#" onClick={CreateNote}>
                close
              </a>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <TakeNote1 />
      </>
    );
  }
}
export default TakeNote2;
