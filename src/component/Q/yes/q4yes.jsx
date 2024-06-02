import React from "react";
import { Link } from "react-router-dom";

function Q4yes() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 4/7</h1>
        <p>
          How do ADHD symptoms impact your ability to maintain focus and
          concentration on tasks or activities that require sustained attention?
        </p>

        <div className="options-container">
          <Link to="../q5yes"  onClick={ () =>  localStorage.setItem("q4","A1")}>
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Extremely Difficult"
              ></input>
            </label>
          </Link>

          <Link to="../q5yes"  onClick={  () => localStorage.setItem("q4","A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Moderately Difficult
                "
              ></input>
            </label>
          </Link>

          <Link to="../q5yes" onClick={  () => localStorage.setItem("q4","A3")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Somewhat Difficult
                "
              ></input>
            </label>
          </Link>
         
         
        </div>
      </div>
    </>
  );
}
export default Q4yes;
