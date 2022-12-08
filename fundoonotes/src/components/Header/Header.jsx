import React,{useState} from "react";
import Headercss from "./Header.css";
import GoogleKeepLogo from "./GoogleKeepLogo.png";
import AccLogo from "./AccLogo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Drawer from "../drawer/Drawer";
import DrawerExtended from "../drawer/DrawerExtended";
import {useSelector} from 'react-redux'
import store from "../Store/Store";

function Header() {
  const [drawer, setDrawer] = useState(false);
  // const [extendedAction, setExtendedAction] = useState("Keep");
  const extendDrawer = () => {
    setDrawer(!drawer);
  };
  const headerValue=useSelector((state)=>state.headerValue)
if(!drawer){
  return (
    <>
    <div className="HeaderClass">
      <div className="menue" onClick={extendDrawer}>
        <DehazeIcon />
      </div>
      <div className="GKeepLogoClass">
        <img className="GKeepLogo" src={GoogleKeepLogo} alt="Logo" />
      </div>
      <div className="GKeep">
        <span className="P_GKeep">{headerValue}</span>
      </div>
      <div className="GKeep SearchDiv">
        <SearchIcon />
        <input className="SearchBar" type="text" placeholder="Search" />
        <ClearIcon />
      </div>
      <div className="RightIconsDiv">
        <RefreshIcon className="SymbolMargins" />
        <ViewStreamIcon className="SymbolMargins" />
        <SettingsIcon className="SymbolMargins" />
        <AppsIcon className="SymbolMargins" />
        <img className="SymbolMargins" src={AccLogo} alt="AccLogo" />
      </div>
      <Drawer />
    </div>
    </>)
    }else{
     return( <>
      <div className="HeaderClass">
        <div className="menue" onClick={extendDrawer}>
          <DehazeIcon />
        </div>
        <div className="GKeepLogoClass">
          <img className="GKeepLogo" src={GoogleKeepLogo} alt="Logo" />
        </div>
        <div className="GKeep">
          <span className="P_GKeep">{headerValue}</span>
        </div>
        <div className="GKeep SearchDiv">
          <SearchIcon />
          <input className="SearchBar" type="text" placeholder="Search" />
          <ClearIcon />
        </div>
        <div className="RightIconsDiv">
          <RefreshIcon className="SymbolMargins" />
          <ViewStreamIcon className="SymbolMargins" />
          <SettingsIcon className="SymbolMargins" />
          <AppsIcon className="SymbolMargins" />
          <img className="SymbolMargins" src={AccLogo} alt="AccLogo" />
        </div>
        <DrawerExtended /*extended={setExtendedAction} *//>
      </div>
      </>)
    }
    
}

export default Header;
