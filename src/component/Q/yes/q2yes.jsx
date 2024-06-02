import React from "react";
import { Link } from "react-router-dom";

function Q2yes() {
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
          How would you describe the impact of ADHD symptoms on your daily life,
          including work, school, relationships, and personal activities?
        </p>

        <div className="options-container">
          <Link to="../q2yes" onClick={ () =>  localStorage.setItem("q2","A1")}>
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Inattention"
              ></input>
            </label>
          </Link>

          <Link to="../q3yes"  onClick={ () =>  localStorage.setItem("q2","A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Hyperactivity"
              ></input>
            </label>
          </Link>

          <Link to="../q3yes"  onClick={ () =>  localStorage.setItem("q2","A3")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Impulsivity
                "
              ></input>
            </label>
          </Link>
          <Link to="../q3yes" onClick={ () => localStorage.setItem("q2","A4")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Difficulty with organization and planning
                "
              ></input>
            </label>
          </Link>
          <Link to="../q3yes"  onClick={()=> localStorage.setItem("q2","A5")} >
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Time management difficulties "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q2yes;
