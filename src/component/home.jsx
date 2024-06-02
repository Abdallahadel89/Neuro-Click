import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import "../styles/home.css"

function home(){

    return(
        //hero section
        <>
        
            <section className="blue-background">
                <div className="container text-center py-5 mb-4 ">
                    <div className="p-5 mb-4 lc-block">
                        <div className="lc-block mb-4">
                            <div editable="rich">
                                <h2 className="fw-bold display-2">Click, Focus, Thrive </h2>
                                <h2 className="fw-bold display-2">Your Gateway to Time<br></br> </h2>
                                <h2 className="fw-bold display-2">Well Spent and more.<br></br> </h2>
                            </div>
                        </div>
                        <div className="lc-block mb-5">
                            <div editable="rich">
                                <p className="paragraph"> Boost productivity with AI-backed precision.<br></br> Tailored for efficient time management, ideal for professionals and those navigating<br></br> cognitive challenges.</p>

                            </div>
                        </div>
                        <div className="lc-block d-grid gap-5 d-sm-flex justify-content-sm-center mb-5"> 
                        <Link to="Intro" className="btn btn-light btn-lg px-4 gap-3" role="button">Get started. It's free!</Link>
                        <Link to="../login" className="btn btn-light btn-lg px-4 gap-3" role="button">login</Link>
                        </div>

                    </div>
                </div>
            </section>

        
            <section id="features-section" className="white-background">

   
<div className="text"><h1>What do we offer, <br></br> exactly?</h1></div>
<div className="container">

  <div className="plan">
    <div className="number fw-bold">01</div>
    <div className="title fw-bolder">Time  <br></br>Management</div>
    <p className="details ">Enhance productivity effortlessly.  <br></br>
      Prioritize tasks, customize  <br></br>
      reminders, and maintain focus  <br></br>
      with our user-friendly interface. Elevate your workflow  <br></br>
      seamlessly.</p>
  </div>

  <div className="plan">
    <div className="number fw-bold">02</div>
    <div className="title fw-bolder">Social  <br></br>Development</div>
    <p className="details ">Navigate real-world social  <br></br>
      situations seamlessly. Receive  <br></br>
      feedback, boost emotional  <br></br>
      intelligence, and apply skills  <br></br>
       practically. Elevate your social  <br></br>
       journey effortlessly.  <br></br> </p>
  </div>

  <div className="plan">
    <div className="number fw-bold">03</div>
    <div className="title fw-bolder">Sensory  <br></br>Support</div>
    <p className="details ">Access noise-cancelation, visual  <br></br>
      filters, and calming visualizations  <br></br>
      effortlessly. Customize settings  <br></br>
      for personal comfort, fostering a  <br></br>
      stress-free environment. Your  <br></br>
      sensory sanctuary awaits.</p>
  </div>

</div>
</section>


<section className="blue-background" id="Download-section">
    <div className="container my-5 fw-bolder"> 
        <div className="row mx-5 py-5">
            <div className="col-lg-6  col-sm-12 mt-5 pt-5">

                <p className=" fs-1 ">Join other thousands of people growing with Neuroclick.</p>
               

                

              <a href=""><img width="148px" src="assets/img/appStore.png" alt=""></img> </a> 
              <a href=""> <img width="148px" src="assets/img/PlayStore.png" alt=""></img> </a>

         
            </div>
            
            <div className="col-lg-6  col-sm-12">
                <div className="card" style= {{width: '32rem', height: '38rem'}}>
                    <div className="card-body mt-5 pt-2 p-0  ">
                        <div className=" text-light">
                        <p className="fs-3  card-text px-3">“Neuroclick has helped me in ways I couldn’t even believe. This
                            software is amazing and I don’t know what I would do without it.” 
                    </p>
                    <div className="d-flex   justify-content-between  px-3">
                    <h2 >Michelle Obama </h2>
                    <h2>&#9733;&#9733;&#9733;&#9733;&#9733;</h2>
                </div>
                <h5 className=" mt-3 py-3 px-3 mb-0">USA</h5>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    </div>
</section>    
            </>
        )
}
export default home