import React from "react";
import TakeNote1Css from "./TakeNote1.css";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import BrushIcon from "@mui/icons-material/Brush";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import TakeNote2 from "../TakeNote2/TakeNote2";
import { useState } from "react";

function TakeNote1() {
  const [view, SetView] = useState(false);
  const TakeNote2Fn = () => {
    SetView(!view);
  };

  if (!view) {
    return (
      <div className="TakeNote1 TakeNote1Position">
        <input
          type="text"
          className="TakeNote2Input"
          placeholder="Take a note"
          onClick={TakeNote2Fn}
        />
        <div className="NoteIconDiv">
          <DomainVerificationIcon className="Note1SymbolDiv" />
          <BrushIcon className="Note1SymbolDiv" />
          <WallpaperIcon className="Note1SymbolDiv" />
        </div>
      </div>
    );
  } else {
    return (<TakeNote2 />);
  }
}

export default TakeNote1;
