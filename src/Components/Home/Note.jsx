import React from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { useSnackbar } from "material-ui-snackbar-provider";
import { connect } from "react-redux";

function Note(props) {
  const snackbar = useSnackbar();
  const history = useHistory();
  function handleClick() {
    //props.onDelete(props.id);
    if (props.isAuthenticated === true) {
      history.push({
        pathname: "/sub",
        search: props.title,
      });
    } else {
      snackbar.showMessage("Log in to see all reviews", "LOGIN", () => {
        history.push("/login");
      });
    }
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

const mapStatetoProps = (state) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStatetoProps)(Note);
