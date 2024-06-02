import { color } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Q1() {

  // const [Color,Setcolor] = useState("");

  // const handlepress = () =>{
  //   if (color === "green"){
  //     Setcolor("");
  //   }else {
  //     Setcolor("green");
  //   }
  // }

  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 1/7</h1>
        <p>
          <span>First of all,</span> <br></br>
          How would you describe your lifestyle?
        </p>

        <div className="options-container">
        <Link to="../q2">

          <label className="option ">
            
            <i className="fa-solid fa-circle-check check "></i>
            <input 
              type="button"
              onclick="toggleCheck(this)"
              value="Highly structured."
            ></input>
          </label>
          </Link>

          <Link to="../q2">

          <label className="option">
            <i className="fa-solid fa-circle-check check "></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Spontaneous"
            ></input>
          </label>
          </Link>

          <Link to="../q2">

          <label className="option">
          <i className="fa-solid fa-circle-check check"></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="Organized chaos."
            ></input>
          </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q1;
