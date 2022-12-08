import React, { useState,useEffect } from "react";
import { GetNoteAPI } from "../../Services/notesService";
import TakeNote3 from "../TakeNote3/TakeNote3";

function DisplayNotes(props) {
  const [notes, Setnotes] = useState([]);
 
  let allNotes = [];

  const getNotes=()=>{
    GetNoteAPI().then((response) => {
      allNotes = response.data.data;
      Setnotes(allNotes.reverse());
      console.log("Inside display notes",allNotes);
    });
  }
  
  useEffect(() => {
    getNotes();
  },[]);
// const archiveView=()=>{
//   SetviewCase()
// }
  return (
    <div className='allNotesFlex'>
      {notes.filter((note)=>(note.isArchived===false && note.isTrash===false)).map((note) => {
        // console.log("inside one", note);
        return <TakeNote3 key={note._id} note={note} />;
      })}
  </div>
  );
}

export default DisplayNotes;
