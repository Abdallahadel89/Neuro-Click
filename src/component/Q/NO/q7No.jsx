import React from "react";
import { Link } from "react-router-dom";

function q7NO() {
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
          How do you envision utilizing software features for time management
          and task prioritization in your daily life?
        </p>

        <div className="options-container">
          <Link to="../Q1yes">
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="To increase productivity at work or school

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
                value="To better balance work, personal life and leisure activities

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
                value="To reduce stress and overwhelm


                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q7NO;
