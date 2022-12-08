import React, { useState,useEffect } from "react";
import { GetNoteAPI } from "../../Services/notesService";
import TakeNote3 from "../TakeNote3/TakeNote3";
import { getArchiveNotesAPI } from "../../Services/notesService";
import Header from "../Header/Header";

function Deletednotes() {
  const [notes, Setnotes] = useState([]);
 
  let allNotes = [];

  const getNotes=()=>{
    GetNoteAPI().then((response) => {
      allNotes = response.data.data;
      Setnotes(allNotes.reverse());
      console.log("Inside Archive notes",allNotes);
  })
}
  useEffect(() => {
    getNotes();
  },[]);
// const archiveView=()=>{
//   SetviewCase()
// }
  return (<>
    <Header/>
    <div className='allNotesFlex'>
      {notes.filter((note)=>(note.isTrash==true)).map((note) => (
        // console.log("inside one", note);
        <TakeNote3 key={note._id} note={note} />))}
    </div>
  </>
  );
}
export default Deletednotes;