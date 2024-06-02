import React ,{ useState }  from "react";
import Home from "./home";
import Navbarr from "./navbar";
import Login from "./login/register/login/Login"
import Intro from "./Q/intro"
import Qestion1 from "./Q/q1"
import Q2 from "./Q/q2";
import { Route, Routes,useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Register from "./register";
import UserSettings from "./userSetting";
import Chat from "./chat";
import PasswordReset from "./passwordReset";
import Q1yes from "./Q/yes/q1Yes";
import Sidebar from "./sidebar/sidebar";
import Dashbord from "./dashbord/dashbord";
import Calendar from "../calendar/calendar";
import Q2yes from "./Q/yes/q2yes";
import Q3yes from "./Q/yes/q3yes";
import Q4yes from "./Q/yes/q4yes";
import Q5yes from "./Q/yes/q5yes";
import Q6yes from "./Q/yes/q6yes";
import Q7yes from "./Q/yes/q7yes";


function App(props) {
  const location = useLocation();
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"))

  console.log(localStorage); 

  

  return (

    <>
    
    <div className="row ">
    {localStorage.getItem("email") != null && (
                <div className="col-1  border-0">
                    <Sidebar />
                </div>
            )}
        <div className="col-11  border-0 ">
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      
    <Route  path="/" element={<Home  />} />
    <Route  path="calendar" element={<Calendar  />} />
    <Route path="dashbord" element={<Dashbord/>} />
    <Route path="Login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>}></Route>
    <Route path="intro" element={<Intro/>}></Route>
    <Route path="q1" element={<Qestion1/>}></Route>
    <Route path="q2" element={<Q2/>}></Route>
    <Route path="chat" element={<Chat/>}></Route>
    <Route path="passreset" element={<PasswordReset/>}></Route>
    <Route path="Q1yes" element={<Q1yes/>}></Route>
    <Route path="q2yes" element={<Q2yes/>}></Route>
    <Route path="q3yes" element={<Q3yes/>}></Route>
    <Route path="q4yes" element={<Q4yes/>}></Route>
    <Route path="q5yes" element={<Q5yes/>}></Route>
    <Route path="q6yes" element={<Q6yes/>}></Route>
    <Route path="q7yes" element={<Q7yes/>}></Route>






    <Route path="re" element={<Register setIsAuth= {setIsAuth} isAuth={isAuth}/>}></Route>
    <Route path="Setting" element={<UserSettings />} />    
    </Routes>
    </AnimatePresence>
    </div>
    </div>
    
   
   



   
    
    </>
  );
}
export default App;
