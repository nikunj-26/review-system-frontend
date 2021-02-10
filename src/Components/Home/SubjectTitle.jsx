import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SubjectTitle(props) {
  const [subjectTitle, setSubjectTitle] = useState("");
  const [reviews, setReviews] = useState([]);
  // let title;
  // title = props.location.search.slice(1);
  // const subject = {
  //   subjectTitle: title,
  // };

  useEffect(() => {
    const title = props.location.search.slice(1);
    setSubjectTitle(decodeURI(title));
    const subject = {
      subjectTitle: subjectTitle,
    };

    axios({
      method: "post",
      url: "http://localhost:8000/getFullReview",
      data: subject,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (res) {
        //handle success
        let reviewAll = res.data.review[0];
        console.log(reviewAll);
        setReviews(reviewAll);
        // if (res.data.status === "Success") {
        //   setReview(res.data.review);
        // } else {
        //   alert("Invalid email-id or password");
        // }
      })
      .catch(function (err) {
        //handle error
        // console.log(err);
      });
  }, [props.location.search, subjectTitle]);

  return (
    <div>
      <h1>{subjectTitle}</h1>
      {reviews.map((reviewItem, index) => {
        return (
          <div key={index}>
            <h6>{reviewItem.reviewTitle}</h6>
            <h6>{reviewItem.review}</h6>
            <h6>{reviewItem.username}</h6>
          </div>
        );
      })}
    </div>
  );
}

// axios({
//   method: "post",
//   url: "http://localhost:8000/getFullReview",
//   data: subject,
//   headers: { "Content-Type": "application/json" },
// })
//   .then(function (res) {
//     //handle success
//     let reviewAll = res.data.review[0][0];
//     console.log(reviewAll);
//     // if (res.data.status === "Success") {
//     //   setReview(res.data.review);
//     // } else {
//     //   alert("Invalid email-id or password");
//     // }
//   })
//   .catch(function (err) {
//     //handle error
//     console.log(err);
//   });
