import React, { useState } from "react";
import Note from "./Note";
import NavigationBar from "../NavigationBar";
import SearchBar from "material-ui-search-bar";
import axios from "axios";
import "./note.css";

export default function Home() {
  const [notes, setNotes] = useState([
    // {
    //   title: "harsh",
    //   content: "harshvardhan review",
    // },
    // {
    //   title: "Smriti",
    //   content: "Smriti review",
    // },
    // {
    //   title: "Sanjol",
    //   content: "Sanjol review",
    // },
    // {
    //   title: "Nikunj",
    //   content: "Nikunj review",
    // },
  ]);

  const onSearch = (value) => {
    console.log("The value is :", value);
    const values = {
      subjectTitle: value,
    };
    axios({
      method: "post",
      url: "http://localhost:8000/getReview",
      data: values,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (res) {
        //handle success
        console.log(res.data.snippets);
        setNotes(res.data.snippets);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };

  return (
    <div>
      <NavigationBar />
      <h1>Search for a Review :</h1>
      <SearchBar
        // onChange={(newvalue) => console.log(newvalue)}
        onRequestSearch={(value) => onSearch(value)}
        style={{
          margin: "0 auto",
          maxWidth: 800,
          marginTop: "50px",
        }}
      />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.subjectTitle}
            content={noteItem.desc}
          />
        );
      })}
    </div>
  );
}
