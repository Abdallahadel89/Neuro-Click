import React from "react";
import { BrowserRouter,Link } from "react-router-dom";



function intro (){

    
    return(
        <>
        <div className="container">
        <h1>Personalize Your Experience! 🌟</h1>

        <p>We'd love to tailor our services to fit you perfectly. 
            Can you spare a few moments to answer a quick set of
            questions? Your input will help us create a customized journey
            just for you. Let's make your experience exceptional!
        </p>
         <Link to= "../q1"> <button className="btn-light rounded border-0 fs-5 px-3"> Sure</button> </Link>
    </div>
    </>
        
    )
}
export default intro