import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Modal from "react-bootstrap/Modal";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import {  db } from "./firebaseConfig";


function Register({ isAuth, setIsAuth }) {
  const [registerEmail, setregemail] = useState("");
  const [registerpass, setregPass] = useState("");
  const [registername, setrename] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  let navgigate = useNavigate();

  const AnswersRef = collection(db, "Answers");
  const [impact, setimpact] = useState(localStorage.getItem("impact"));



  const reg = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerpass
      );
      const userdata = {
        email: registerEmail,
        user: auth.currentUser,
      };
      await updateProfile(auth.currentUser, { displayName: registername });
      await sendEmailVerification(auth.currentUser).then(handleShow);

      await addDoc(AnswersRef, {
        ADHD: localStorage.getItem("ADHD"),
        email: registerEmail,
        q1: localStorage.getItem("q1"),
        q2: localStorage.getItem("q2"),
        q3: localStorage.getItem("q3"),
        q4: localStorage.getItem("q4"),
        q5: localStorage.getItem("q5"),
        q6: localStorage.getItem("q6"),
        q7: localStorage.getItem("q7"),







        
        
      });
          
      signOut(auth).then(() => {
        setIsAuth(false);
      });

      setTimeout(() => {
        navgigate("/")
        
      }, 2000);
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="text-center blue-background rounded border-0">
          verifing email has been sent{" "}
        </Modal.Body>
      </Modal>

      <section className="blue-background">
        <div className=" d-flex  justify-content-center  my-5 py-5  ">
          <div className=" ">
            <form className="mt-4 bg-white rounded-3 px-3 py-3">
              <h2 className="mt-3 text-center">Sign up</h2>
              <p className="text-center">
                Enter your information to creat an account .
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group d-flex flex-column">
                    <label className="form-label text-dark" htmlFor="uname">
                      Full name
                    </label>
                    <input
                      className="form-control rounded border"
                      id="Fname"
                      type="text"
                      placeholder="Full Name"
                      onChange={(event) => {
                        setrename(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-2">
                  <label className="form-label text-dark" htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control rounded"
                    id="email"
                    type="email"
                    placeholder="enter your Email"
                    onChange={(event) => {
                      setregemail(event.target.value);
                    }}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label text-dark" htmlFor="pwd">
                    Password
                  </label>
                  <input
                    className="form-control rounded"
                    id="pwd"
                    type="password"
                    placeholder="enter your password"
                    onChange={(event) => {
                      setregPass(event.target.value);
                    }}
                  ></input>
                </div>

                <div className=" text-center mt-4">
                  <button
                    type="button"
                    className="btn w-50 btn-dark rounded"
                    onClick={reg}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="col-lg-12 text-center mt-5">
                already have an account?{" "}
                <a href="#" className="text-danger">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Register;
