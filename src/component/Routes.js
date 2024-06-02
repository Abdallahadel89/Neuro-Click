import Home from "./home";
import Navbarr from "./navbar";
import Login from "./login/register/login/Login"
import Intro from "./Q/intro"
import Qestion1 from "./Q/q1"
import Q2 from "./Q/q2";
import { Route, Routes,useLocation} from "react-router-dom";
import Register from "./register";
import UserSettings from "./userSetting";
import Chat from "./chat";
import PasswordReset from "./passwordReset";
import Q1yes from "./Q/yes/q2yes";
import Sidebar from "./sidebar/sidebar";
import Dashbord from "./dashbord/dashbord";



var routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: "bx bx-home-alt icon",
      component: <Dashbord />,
    },
    {
      path: "/chat",
      name: "Icons",
      icon: "bx bx-message-rounded icon",
      component: <Chat />,
    },
   
  ];
  export default routes;
  