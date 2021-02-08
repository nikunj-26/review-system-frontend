import React from "react";

import { connect, useDispatch } from "react-redux";
import { logoutUser } from "../redux/users/userActions";

function Secret(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Successfully Logged In</h1>
        <p></p>
        <p>Full Name: {props.fullName}</p>
        <p>Email ID: {props.email}</p>
        <p>Phone Number: {props.phone}</p>
        <button
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  fullName: state.user.fullName,
  email: state.user.email,
  phone: state.user.phone,
});

export default connect(mapStatetoProps)(Secret);
