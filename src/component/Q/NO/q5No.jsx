import React from "react";
import { Link } from "react-router-dom";

function q5NO() {
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
          On average, how do you feel about your productivity levels throughout
          the day?
        </p>

        <div className="options-container">
          <Link to="../Q1yes">
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Consistently high"
              ></input>
            </label>
          </Link>

          <Link to="../Q1NO">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Peaks and valleys, depending on the time of day.
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
                value="Generally low
                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q5NO;
