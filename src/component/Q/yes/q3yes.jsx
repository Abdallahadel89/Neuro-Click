import React from "react";
import { Link } from "react-router-dom";

function Q3yes() {
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
          What strategies or coping mechanisms have you found effective in
          managing your ADHD symptoms in various aspects of your life? (Select
          all that apply)
        </p>

        <div className="options-container">
          <Link to="../q4yes">
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Medication"
              ></input>
            </label>
          </Link>

          <Link to="../q4yes">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Therapy or Counseling
                "
              ></input>
            </label>
          </Link>

          <Link to="../q4yes">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Mindfulness Techniques
                "
              ></input>
            </label>
          </Link>
          <Link to="../q4yes">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Exercise or physical activity

                "
              ></input>
            </label>
          </Link>
          <Link to="../q4yes">
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Support groups or peer networks
                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q3yes;
