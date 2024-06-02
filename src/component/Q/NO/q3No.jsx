import React from "react";
import { Link } from "react-router-dom";

function q3NO() {
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
          What are your main challenges when it comes to managing your time
          effectively?
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
                value="Procrastination
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
                value="Overcommitting
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
                value="Difficulty prioritizing tasks

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
                value="Distractions


                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q3NO;
