import React from "react";
import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item }) {
  //   const [ratings, setRatings] = useState(8);
  //   const [text, setText] = useState("This is an example");
  //   const handleClick = () => {
  //     setRatings((prev) => {
  //       return prev + 1;
  //     });
  //   };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
      <button className="edit">
        <FaEdit />
      </button>
      {/* <button onClick={handleClick}>click</button> */}
    </div>
  );
}

export default FeedbackItem;
