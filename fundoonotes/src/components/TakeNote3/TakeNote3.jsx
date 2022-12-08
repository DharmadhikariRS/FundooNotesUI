import React from 'react'
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import TakeNote3Css from "./TakeNote3.css";
import { useState } from 'react';
import { archiveAPI } from '../../Services/notesService';
import { ColorAPI } from '../../Services/notesService';
import { UpdateNotes } from '../../Services/notesService';
import { trashAPI } from '../../Services/notesService';
import Modal from '../Modal/Modal';
import ColorPoper from '../Poper/ColorPoper';
function TakeNote3({note}) {

     const [viewColor,setViewColor]=useState(false)
const[coloris,setColor]=useState({_id:note._id,color:note.color})
const [isArchive,setIsArchive]=useState({_id:note._id,isArchived:note.isArchived})
const [isDelete,setIsDeklete]=useState({_id:note._id,isTrash:note.isTrash})
    const colorHandler=() =>{
      setViewColor(!viewColor)
    }
    // console.log("before click color",coloris.color)
    const updateColor=()=>{
      console.log("event val check",coloris.color);
      // setColor({ ...coloris, color :event.target.name});
      ColorAPI(coloris);
      
    }
    // console.log("After click color",coloris.color)
    if(coloris.color){
      // console.log("color is empty");
    }
   const [modal,setModal]=useState(false)
   const modalHandler=()=>{
    setModal(true)
   }

  
  
   const arciveHandler =()=>{
    // console.log("isArchive before ",isArchive.isArchived);
    // setIsArchive({...isArchive,isArchived:!isArchive.isArchived})
    archiveAPI(isArchive).then(()=>{console.log("passed");}).catch((error)=>{console.log(error);})
  window.location.reload();
   }
   const TrashHandler=()=>{
    // setIsDeklete({...isDelete,isDeleted:note.isDeleted})
    trashAPI(isDelete);
   }
  //  console.log("isArchive after ",isArchive.isArchived);

   if(!(modal)){
  return (
    <div className="TakeNote3"  style={{ backgroundColor: coloris.color===""? "white": coloris.color}} >
       
       <div onClick={modalHandler}>
    <input type="text" className="TakeNote3Input" name="title" placeholder="Title" value={note.title}  style={{ backgroundColor: coloris.color===""? "white": coloris.color}} readOnly/> 
    <textarea
      id="autoresizing"
      type="text"
      className="TakeNote3Input"
      placeholder="Take a note"
      name="description"
      value={note.description}
      readOnly
      
      style={{ backgroundColor: coloris.color===""? "white": coloris.color}}
    />
    </div>
    <div className="Note3SymbolDiv" style={{ backgroundColor: coloris.color===""? "white": coloris.color}}>
      <div>
      <AddAlertOutlinedIcon   fontSize="small"className="Note3Symbols"  style={{ backgroundColor: coloris.color===""? "white": coloris.color}} />
      </div>
      <div>
      <PersonAddAltOutlinedIcon fontSize="small" className="Note3Symbols"  style={{ backgroundColor: coloris.color===""? "white": coloris.color}}/>
      </div>
      <div onClick={colorHandler}  style={{ backgroundColor: coloris.color===""? "white": coloris.color}}>
      <ColorPoper note={note}/>
      </div>
      <div>
      <AddPhotoAlternateOutlinedIcon fontSize="small" className="Note3Symbols"  style={{ backgroundColor: coloris.color===""? "white": coloris.color}} />
      </div>
      <div >
      <SystemUpdateAltOutlinedIcon fontSize="small"  className="Note3Symbols" onClick={arciveHandler}  style={{ backgroundColor: coloris.color===""? "white": coloris.color}}/>
      </div>
      <div>
      <DeleteOutlineOutlinedIcon fontSize="medium" className="Note3Symbols" onClick={TrashHandler}  style={{ backgroundColor: coloris.color===""? "white": coloris.color}}/>
      </div>
    </div>
{/* {
  viewColor&&
    <div className='colorPalate'>
      <div className='red' name="red" onClick={()=>{setColor({...coloris,color:"red"});updateColor();
      }}></div>
      <div className='pink' name="pink" onClick={()=>{setColor({...coloris,color:"pink"});updateColor();
      }}></div>
      <div className='green' name="green" onClick={()=>{setColor({...coloris,color:"green"});updateColor();
      }}></div>
      <div className='yellow' name="yellow" onClick={()=>{setColor({...coloris,color:"yellow"});updateColor();
      }}></div>
      <div className='orange' name="orange" onClick={()=>{setColor({...coloris,color:"orange"});updateColor();
      }}></div>
    </div>
} */}

  </div>
  )
}
else{
     return (<Modal note={note}/>)
}
}
export default TakeNote3
