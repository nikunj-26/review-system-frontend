import React from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

function Note(props) {
  const history = useHistory();
  function handleClick() {
    //props.onDelete(props.id);
    history.push({
      pathname: "/sub",
      search: props.title,
    });
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
