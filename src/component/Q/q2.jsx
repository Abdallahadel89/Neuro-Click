import React from "react";
import { Link } from "react-router-dom";

function q2() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 2/7</h1>
        <p>
          <span>First of all,</span> <br></br>
          Have you ever been formally diagnosed with ADHD by a healthcare professional?</p>

        <div className="options-container">
        <Link to="../q1yes"  onClick={ () =>  localStorage.setItem("ADHD",true)}>

          <label className="option ">
            
            <i className="fa-solid fa-circle-check check "></i>
            <input 
              type="button"
              onclick="toggleCheck(this)"
              value="Yes"
            ></input>
          </label>
          </Link>

          <Link to="../q1no " onClick={ () =>  localStorage.setItem("ADHD",false)}>

          <label className="option">
            <i className="fa-solid fa-circle-check check "></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="NO"
            ></input>
          </label>
          </Link>

        </div>
      </div>
    </>
  );
}
export default q2;
