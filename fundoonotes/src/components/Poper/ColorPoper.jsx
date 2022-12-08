import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import TakeNote3Css from '../TakeNote3/TakeNote3.css';
import { ColorAPI } from '../../Services/notesService';
import { UpdateNotesColor } from '../../Services/notesService';
export default function ColorPoper({note}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
let i=1;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  
const ChangeColor=(colors)=>{
  console.log("color is",colors);
let ColorObj={_id:note._id,color:colors}
UpdateNotesColor(ColorObj);
window.location.reload();
}
  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick} className="Note3Symbols"  style={{ backgroundColor: note.color===""? "white": note.color}}>
      <ColorLensOutlinedIcon   fontSize="small" />
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box className="Note3SymbolDiv" sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            {
        colors.map((color)=>((<div onClick={()=>{ChangeColor(color)}} style={{width:25, height:25, backgroundColor:color, borderRadius:50}} key={i++}></div>)))
            }
        </Box>
      </Popper>
    </div>
  );
}