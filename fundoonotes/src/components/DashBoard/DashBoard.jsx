import React from 'react'
import TakeNote1 from '../TakeNote1/TakeNote1'
import TakeNote2 from '../TakeNote2/TakeNote2'
import Header from '../Header/Header'
import TakeNote3 from '../TakeNote3/TakeNote3'
import DashBoardCss from "./DashBoard.css"
import DisplayNotes from '../DisplayNotes/DisplayNotes'
import TakeNote2Css from '../TakeNote2/TakeNote2.css'
function DashBoard() {
  // window.location.reload();
  return (
    <>
     <Header/>
     <TakeNote1/>
     <DisplayNotes/>
     
    </>
  )
}

export default DashBoard
