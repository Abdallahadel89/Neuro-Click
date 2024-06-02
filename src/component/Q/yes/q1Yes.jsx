import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";


function Q1yes() {

  
  const handleImpactsss = ()=>{
    localStorage.setItem("impact","mild");
  }
  
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
          How would you describe the impact of ADHD symptoms on your daily life,
          including work, school, relationships, and personal activities?
        </p>

        <div className="options-container">
          <Link to = "../q2yes"  onClick={() =>localStorage.setItem("q1","A1")}>
          <label className="option ">
            <i className="fa-solid fa-circle-check check "></i>
            <input
              type="button"
              onclick="toggleCheck(this)"
              value="mild"
            ></input>
          </label>
          </Link>

          <Link  to="../q2yes"  onClick={() =>localStorage.setItem("q1","A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Moderate"
              ></input>
            </label>
          </Link>

          <Link to="../q2yes"  onClick={() =>localStorage.setItem("q1","A3")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="severe"
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q1yes;
