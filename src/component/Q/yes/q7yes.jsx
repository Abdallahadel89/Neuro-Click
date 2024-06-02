import React from "react";
import { Link } from "react-router-dom";

function Q7yes() {
  return (
    <>
      <div className="progress">
        <div className="progress__fill">
          <div className="progress__text"></div>
        </div>
      </div>
      <div className="container3">
        <h1>Question 7/7</h1>
        <p>
          In what areas of your life do you feel most supported in managing your
          ADHD symptoms, and where do you feel you could benefit from additional
          support or resources?
        </p>

        <div className="options-container">
          <Link to="../re"  onClick={  () => localStorage.setItem("q7","A1")}>
            <label className="option ">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Work or School
                "
              ></input>
            </label>
          </Link>

          <Link to="../re"  onClick={ () =>  localStorage.setItem("q7","A2")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Family relationships
                "
              ></input>
            </label>
          </Link>

          <Link to="../re"  onClick={ () =>  localStorage.setItem("q7","A3")}> 
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Social life
                "
              ></input>
            </label>
          </Link>
          <Link to="../re"  onClick={ () =>  localStorage.setItem("q7","A4")}>
            <label className="option">
              <i className="fa-solid fa-circle-check check "></i>
              <input
                type="button"
                onclick="toggleCheck(this)"
                value="Personal well-being and self-care
                "
              ></input>
            </label>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Q7yes;
