import React, { useEffect, useState } from "react";
import "./dashbordStyle.css";
import { auth , db} from "../firebaseConfig";
import { collection ,where,onSnapshot,query} from "firebase/firestore";

function Dashbord() {
  const mild = [
    "Talk to friends or colleagues",
    "Listen to Music",
    "Play Youga",
    " Go for a walk",
    "play TeamSport",
    "Break Large Goals to smaller",
    "Sleep about 6 to 8 hours",
  ];
  const Moderate = [
    "Set specific goals for each step",
    " Deep Breathing ",
    "Healthy Eating",
    "Sufficient Sleep",
    "Communication With a new friends",
    "Physical Activity",
  ];

  const [impactArray, setimpactArray] = useState([]);
  const [impact, setimpact] = useState("");
  const [tip, setTip] = useState("");
  const impactRef = collection(db, "ADHD impact")


  let random;


  useEffect(() => {
    const queryImpact = query(impactRef, where("email","==",localStorage.getItem("email")));
    const unsubscribe =  onSnapshot(queryImpact, (snapshot) => {
        snapshot.forEach((doc) => {

          setimpact(doc.data().text);
        });
      });

      if (impact === "mild") {
        setimpactArray(mild);
      } else if (impact === "moderate") {
        setimpactArray(Moderate);
      }
      random = Math.floor(Math.random() * impactArray.length);
      setTip(impactArray[random]);


      return () => unsubscribe();

  }, []);

  const [checked, setChecked] = useState(false);


  const handleCheck = () => {
    setChecked(!checked);

  };

  return (
    <>
      <div >
        <div className="mx-5 px-5   ">
          <div className="row">
            <div className="col-8">
              <h2 className="mx-5 px-5">HI {localStorage.getItem("name")} </h2>
            </div>

            <div className="col-xl-4 col-md-6 mb-4 my-3">
              <div className="card border-left-warning shadow  py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-uppercase mb-1 text-secondary">
                        Daily tip
                      </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div
                        class="h5 mb-1 font-weight-bold text-gray-800 col-11"
                        style={
                          checked
                            ? { textDecoration: "line-through" }
                            : { textDecoration: "none" }
                        }
                      >
                        {tip}
                      </div>
                      <div className="checkbox p-0 m-0 col-1 ">
                        <input
                          id="checkbox1"
                          type="checkbox"
                          onChange={handleCheck}
                        />
                        <label className="p-0 mb-4" htmlFor="checkbox1"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content my-5  ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-5 mx-5 ">
                  <div className="card blue-background shadow border4 ">
                    <div className="content text-center blue-background  border4">
                      <i
                        className="fa-solid fa-comment "
                        style={{ fontSize: "20rem", color: "white" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-5 mx-5 "
                  style={{ border: "none", padding: "0%" }}
                >
                  <div className="card blue-background shadow border4 ">
                    <div className="content text-center blue-background border4 ">
                      <i
                        className="fa-solid fa-calendar-days"
                        style={{ fontSize: "20rem", color: "white" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 mx-5 blue-background border4">
            <div className="card blue-background shadow border4 ">
              <div className="header">
                <h4 className="title">Tasks</h4>
              </div>
              <div className="content blue-background border4">
                <table className="table blue-background">
                  <tbody className="blue-background">
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox1" type="checkbox" />
                          <label htmlFor="checkbox1"></label>
                        </div>
                      </td>
                      <td>task1 "</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox2" type="checkbox" checked />
                          <label htmlFor="checkbox2"></label>
                        </div>
                      </td>
                      <td>task2 </td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox3" type="checkbox" />
                          <label htmlFor="checkbox3"></label>
                        </div>
                      </td>
                      <td>task3</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox4" type="checkbox" checked />
                          <label htmlFor="checkbox4"></label>
                        </div>
                      </td>
                      <td>task 4</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox5" type="checkbox" />
                          <label htmlFor="checkbox5"></label>
                        </div>
                      </td>
                      <td>task 5</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox">
                          <input id="checkbox6" type="checkbox" checked />
                          <label htmlFor="checkbox6"></label>
                        </div>
                      </td>
                      <td>task 6</td>
                      <td className="td-actions text-right">
                        <button
                          type="button"
                          rel="tooltip"
                          title="Edit Task"
                          className="btn btn-info btn-simple btn-xs"
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          rel="tooltip"
                          title="Remove"
                          className="btn btn-danger btn-simple btn-xs"
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashbord;
