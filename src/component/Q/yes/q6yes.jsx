import React from "react";
import { Link } from "react-router-dom";

function Q6yes() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 6/7</h1>
        <p>
          How does ADHD affect your relationships with others, including family,
          friends, colleagues, and peers?
        </p>

        <div className="options-container">
          <Link to="../q7yes"  onClick={ () =>  localStorage.setItem("q6","A1")}>
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Strains relationships significantly"
              ></input>
            </label>
          </Link>

          <Link to="../q7yes"  onClick={ () =>  localStorage.setItem("q6","A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Causes occasional tension
                "
              ></input>
            </label>
          </Link>

          <Link to="../q7yes"  onClick={ () =>  localStorage.setItem("q6","A3")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Minimally affects relationships
                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q6yes;
