import React from "react";
import AddIcon from "@material-ui/icons/Add";

function Note(props) {
  function handleClick() {
    //props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <AddIcon />
      </button>
    </div>
  );
}

export default Note;
