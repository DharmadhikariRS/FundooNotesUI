import logo from "./logo.svg";
import "./App.css";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import UserServices from "./Services/UserServices";
import Header from "./components/Header/Header";
import TakeNote1 from "./components/TakeNote1/TakeNote1";
import TakeNote2 from "./components/TakeNote2/TakeNote2";
import TakeNote3 from "./components/TakeNote3/TakeNote3";
import DashBoard from "./components/DashBoard/DashBoard";
import DisplayNotes from "./components/DisplayNotes/DisplayNotes";
import { Routes, Route } from "react-router-dom";
import ArchiveNotesDisplay from "./components/ArchiveNotesDisplay/ArchiveNotesDisplay";
import Deletednotes from "./components/DeletedNote/Deletednotes";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<DashBoard/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/DisplayNotes" element={<DisplayNotes/>} />
      <Route path="/DashBoard" element={<DashBoard/>} />
      <Route path="/ArchiveNotesDisplay" element={<ArchiveNotesDisplay/>} />
      <Route path="/Deletednotes" element={<Deletednotes/>} />
      
      {/* <UserServices/> */}
      {/* <Header /> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3/> */}
      {/* <Signin/> */}
      {/* <Signup /> */}

      {/* <Drawer1/> */}
    </Routes>
  
  );
}

export default App;
