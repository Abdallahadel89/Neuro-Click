import React from "react";
import { Link } from "react-router-dom";

function q6NO() {
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
          Are you interested in learning specific strategies or techniques to
          improve your time management skills?{" "}
        </p>

        <div className="options-container">
          <Link to="../Q1yes">
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Yes, I'm open to learning new strategies
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
                value="No, I feel confident in my current approach
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
                value="Maybe, depending on the effectiveness of the strategies offered

                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default q6NO;
