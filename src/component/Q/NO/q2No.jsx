import React from "react";
import { Link } from "react-router-dom";

function q2NO() {
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
          What methods or tools do you currently use to manage your tasks and
          prioritize your activities?
        </p>

        <div className="options-container">
          <Link to="../Q1yes">
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="To-do lists"
              ></input>
            </label>
          </Link>

          <Link to="../Q1NO">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Calendar apps
                "
              ></input>
            </label>
          </Link>
          <Link to="../Q1NO">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Task management software
                "
              ></input>
            </label>
          </Link>
          <Link to="../Q1NO">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Pen and paper
                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q2NO;
