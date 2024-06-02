import React from "react";
import { Link } from "react-router-dom";

function Q5yes() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 5/7</h1>
        <p>
          How do you handle situations where impulsivity leads to decisions or
          actions that you later regret?
        </p>

        <div className="options-container">
          <Link to="../q6yes" onClick={  () => localStorage.setItem("q5"," A1")}>
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Reflect and learn from mistakes"
              ></input>
            </label>
          </Link>

          <Link to="../q6yes"  onClick= { () =>  localStorage.setItem("q5"," A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Seek support from others
                "
              ></input>
            </label>
          </Link>

          <Link to="../q6yes"  onClick={ () =>  localStorage.setItem("q5"," A3")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Implement strategies to pause and think before acting
                "
              ></input>
            </label>
          </Link>
          
        </div>
      </div>
    </>
  );
}
export default Q5yes;
