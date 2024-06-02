import React, { useState } from "react";
import { signInWithEmailAndPassword,sendEmailVerification,signOut,signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import {auth,GoogleProvider} from './firebaseConfig'
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function PasswordReset (){
    const [email,setemail] = useState("");
    const [showpass, setShowpass] = useState(true);

    const handleClosepass = () => setShowpass(false);
    const handleShowpass = () => setShowpass(true);

    const passreset = async () =>{
        await sendPasswordResetEmail(auth,email)
        handleClosepass();
    }


    return(
        <>
            <Modal show={showpass} onHide={handleClosepass} className="blue-background rounded border-0">
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
        
        
        
        
        
        </>
    )

}export default PasswordReset