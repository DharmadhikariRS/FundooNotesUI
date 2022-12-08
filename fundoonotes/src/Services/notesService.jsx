import React, { useState } from "react";
import axios from "axios";

const headerConfig = {

  headers: { /*Authorization: localStorage.getItem("token")*/ 

  Authorization: `Bearer ${localStorage.getItem("tokenFundoo")}`}

};

export const AddNoteAPI = (noteObject) => {
  const Response = axios.post(
    "http://localhost:3000/api/v1/notes",
    noteObject,
    headerConfig
  );
  console.log("Crrate note respo",Response);
  return Response;
};

export const GetNoteAPI = () => {
  let Response = axios.get(
    "http://localhost:3000/api/v1/notes",
    headerConfig
);
console.log("get respo",Response);
console.log("Token= ",localStorage.getItem("tokenFundoo"));
  return Response;
};
export const UpdateNotes = (noteObject) => {
  console.log("id== ",noteObject._id)

  const Response = axios
    .put(
      `http://localhost:3000/api/v1/notes/${noteObject._id}`,
      noteObject,
      headerConfig
    )
    .then((Response) => console.log("update respo", Response));
  // console.log( "AddNote",Response);
};
export const ColorAPI = (colorObject) => {
  axios
    .post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/ChangesColorNotes",
      colorObject,
      headerConfig
    )
    .then((Response) => console.log("color respo ", Response));
};
export const archiveAPI = (archiveObj) => {
  // console.log("id in archive= ",archiveId)
  axios
    .put(
      `http://localhost:3000/api/v1/notes/${archiveObj._id}/archive`,archiveObj,
      headerConfig
    )
    .then((Response) => console.log("archive respo", Response));
};

export const trashAPI = (trashObject) => {
  axios
    .put(
      `http://localhost:3000/api/v1/notes/${trashObject._id}/trash`,
      trashObject,
      headerConfig
    )
    .then((Response) => console.log("trash respo", Response));
};

export const getArchiveNotesAPI = () => {
 let Response= axios
    .get(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList",
      headerConfig
    )
    return Response
};


export const UpdateNotesColor = (noteObject) => {
  console.log("id== ",noteObject._id)

  const Response = axios
    .put(
      `http://localhost:3000/api/v1/notes/${noteObject._id}/updateColor`,
      noteObject,
      headerConfig
    )
    .then((Response) => console.log("update respo", Response));
  // console.log( "AddNote",Response);
};
