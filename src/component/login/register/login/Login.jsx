import React, { useState } from "react";
import { signInWithEmailAndPassword,sendEmailVerification,signOut,signInWithPopup,sendPasswordResetEmail } from "firebase/auth";
import {auth,GoogleProvider} from '../../../firebaseConfig'
import { Link, NavLink, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import PasswordReset from "../../../passwordReset";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../login/register.css"





function Login({isAuth,setIsAuth}) {

  let navgigate = useNavigate();

  

  const [Loginemail,setloginemail] = useState("");
  const [loginpass,setloginpass] = useState("");


  const [show, setShow] = useState(false);
  const [modelBody,setModelBody] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showpass, setShowpass] = useState(false);
  const [email,setemail] = useState("");
  const [AwesomeIcon,setIcon] = useState("");


    const handleClosepass = () => setShowpass(false);
    const handleShowpass = () => setShowpass(true);

    const passreset = async () =>{
      try{
        await sendPasswordResetEmail(auth,email)
        handleClosepass();
        setTimeout(() => {
          setModelBody("Reset email has been sent  " )
          setIcon("fa-regular fa-circle-check text-success")
          handleShow()
          
        }, 1000);
      }catch (error){
        
        setModelBody("invalid email ");
        setIcon("fa-regular fa-circle-xmark text-danger")
        handleShow();
        setemail(" ")
        
        
      }
      setIcon("")
    }

 
  
  

  const login = async () =>{
    try {
      const userCredential = await signInWithEmailAndPassword(auth, Loginemail, loginpass);
      const user = userCredential.user;
  
      // Check if email is verified
      if (!user.emailVerified) {
      
        setShow(true)
        setIsAuth(false);
        setModelBody(" your account is not verified \n anther email has been sent")

        await sendEmailVerification(user)
        signOut(auth).then(() => {
        });
  


        
      }else{
        setIsAuth(true)
        localStorage.setItem("name" ,auth.currentUser.displayName)
        localStorage.setItem("email",Loginemail)
        localStorage.setItem("impact",Loginemail)

        
        


  
        navgigate("../dashbord");

      }
  
    } catch (error) {
      console.log(error);
    }

}

const signInWithGoogle = () => {
  signInWithPopup(auth, GoogleProvider).then((result) => {
    setIsAuth(true);
    navgigate("../dashbord");
    localStorage.setItem("name" ,auth.currentUser.displayName)
    localStorage.setItem("email",Loginemail)
    localStorage.setItem("photo" ,auth.currentUser.photoURL)
    
  }).catch((error) =>{
    console.log(error)
  }) 
};









  

 

   
  return (
    <>
<div className="blue-background loginn">

<Modal show={show} onHide={handleClose}>

        <Modal.Body className="text-center blue-background rounded border-0" >
          <p>{modelBody} <i className ={AwesomeIcon}></i>
          </p>
          
        </Modal.Body>
      </Modal>



      <section >
        <div className=" d-flex  justify-content-center  my-5 py-5  ">
          <div className=" ">
            <form
              className="mt-4 bg-white rounded-3 px-3 py-3"
            >
              <h2 className="mt-3 text-center">Sign in</h2>
              <p className="text-center">
                Enter your information to creat an account .
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-2">
                    <label className="form-label text-dark" htmlFor="uname">
                      Username
                    </label>
                    <input
                      className="form-control rounded"
                      id="email"
                      type="email"
                      placeholder="enter your username"
                      onChange={(event) =>{
                        setloginemail(event.target.value)
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
                      type="text"
                      placeholder="enter your password"
                      onChange={(event) =>{
                        setloginpass(event.target.value)
                      }}
                    ></input>
                  </div>

                  <div className=" text-center mt-4">
                    <button type="button" className="btn w-50 btn-dark rounded"
                    onClick={login}
                    >
                      
                      Sign In
                    </button>
                  </div>
                  <div className=" text-center mt-4">
                    <button type="button" className="login-with-google-btn rounded"
                    onClick={signInWithGoogle}
                    >
                      
                      Sign In with google 
                    
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 text-center mt-2">
                <button  type="button" className="text-danger btn"
                onClick={handleShowpass}
                >
                forgot password?
                  </button>
              </div>

              <div className="col-lg-12 text-center mt-2">
                Don't have an account?{" "}
                <Link to = "../re" className="text-danger">
                  Sign Up
                  </Link>
              </div>

            </form>
          </div>
        </div>
      </section>

      <Modal show={showpass} onHide={handleClosepass} 
      backdrop="static">
        <Modal.Header className="blue-background " closeButton>
          <Modal.Title>Reset your password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="blue-background ">
          <Form className="blue-background "> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                
                autoFocus
                value={email}
                onChange={(event) =>{
                    setemail(event.target.value)
                  }}
                
              />
            </Form.Group>
         
         
          </Form>
          <div className="text-end">
          <Button variant="dark"onClick={passreset}>
            Resset password
          </Button>
          </div>
          
        </Modal.Body>
          
        
      </Modal>
      </div>

      
    </>
  );
}
export default Login;
