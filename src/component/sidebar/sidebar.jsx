// Sidebar.js
import React from 'react';
import './sidebar.css';
import { Link ,useNavigate} from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";




function Sidebar () {
  let navgigate = useNavigate();


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navgigate("/")

    });

  };
 

  return (
    <nav >
      <div className="logo">
        <span className="logo-name">neuro Click</span>
      </div>

      <div className="sidebar ">
        <div className="logo">
          <span className="logo-name">neuro Click</span>
        </div>

        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
                <Link to="../dashbord" className="nav-link">
                <i className="bx bx-home-alt icon" />
                <span className="link">Dashboard</span>
                </Link>
            </li>
           
          
            <li className="list">
                <Link to="../chat" className='nav-link'>
             
                <i className="bx bx-message-rounded icon" />
                <span className="link">chat</span>
                </Link>
            </li>

            <li className="list">
              <Link to = "../calendar" className="nav-link">
              <i className='bx bx-calendar icon' />
                <span className="link">calendar</span>
              </Link>
            </li>
          </ul>

          <div className="bottom-content">
            <li className="list">
              <a href="#" className="nav-link">
                <i className="bx bx-cog icon" />
                <span className="link">Settings</span>
              </a>
            </li>
            <li className="list">
              <button className='nav-link' onClick={signUserOut}>
                <i className="bx bx-log-out icon" />
                <span className="link">Logout</span>
                </button>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;