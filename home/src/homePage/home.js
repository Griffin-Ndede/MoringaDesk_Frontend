import React from "react";
import "./home.css";
import img1 from "../images/askqus.jpeg"
import img2 from "../images/EML.png"
import img3 from "../images/IG.jpeg"
// import img4 from "../images/image.png"
// import img5 from "../images/MAP.jpeg"
import img6 from "../images/mfFAQS.jpeg"

import img8 from "../images/phone.png"
import img9 from "../images/postresp.jpeg"
import img10 from "../images/tagsfrt.jpeg"
import img11 from "../images/TWEETER.png"


const Homepage =()=>{
    return (
      <>
        <section id="page1">
          <div id="content">
            <h1><b>Nurturing Africa’s</b><br/><i>Tech Talent</i></h1>
            <p>Through market-aligned skills training, we help learners build new career possibilities with greater confidence and capability.</p>
          </div>
        </section>
        <section id="page2">
          <div id="about">
            <h1>What we do</h1>
            <p>At Moringa Desk, we're transforming tech education in the world tech field. 
              Our approach blends industry-focused research and questions, dedicated mega minds across the world; shearing knowledge, and an innovative 
              learning environment, preparing students for successful careers. 
              We recognize that the learning journey can be challenging, 
              so we've established a <span>support platform</span> for quick access to <span>assistance and solutions. </span> 
              Consider it <span>your one-stop destination for all your tech education needs</span></p>
          </div>
          <div id="search">
            <div id="searchcontent">
              <h1>Search</h1>
              <p>Describe your problem using key words to check for similar problems and find a solution quicker.</p>
            </div>
            <img className="searchImg" src={img6} alt="search"></img>
          </div>
          <div id="reach">
          <img className="reachImg" src={img1} alt="reach out"></img>
            <div id="reachout">
              <h1>Reach out</h1>
              <p>Post any inquiries to the support forum and get responses from other students or Technical Mentors.</p>
            </div>
          </div>
          <div id="search">
            <div id="searchcontent">
              <h1>Respond</h1>
              <p>Help resolve other students queries by suggesting solutions to their posted problem.</p>
            </div>
            <img className="searchImg" src={img9} alt="search"></img>
          </div>
          <div id="reach">
          <img className="reachImg" src={img10} alt="reach out"></img>
            <div id="reachout">
              <h1>Filter</h1>
              <p>Look through tags to find discussions in line with where your problem may lie.</p>
            </div>
          </div>
          <div id="bottomcontent">
            <p>
              We hope this platform enables you to have a smoother experience during your studies with us.<br></br><span>Happy Coding!</span>
            </p>
          </div>
          <div id="footer">
            <div id="socials">
              <h3><img className="images" src={img3} alt="ig"></img>
                Instagram: @moringadesk</h3>
              <h3>
              <img  className="images" src={img11} alt="TEETER"></img>
                X: @moringadesk</h3>
              <h3>
              <img className="images"src={img2} alt="EML"></img>
                email: moringadesk@gmail.com</h3>
              <h3>
              <img className="images" src={img8} alt="phone"></img>
                Call us on: +2547 123 456 789</h3>
            </div>
            <div id="about">
              <h3>How it works</h3>
              <h3>Leave us a feedback</h3>
            </div>
            <div id="map">
            <iframe 
            title="feedback"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7906185180573!2d36.78203177443803!3d-1.3004808356406785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1699442400861!5m2!1sen!2ske" 
            width="400" 
            height="200"  
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          </div>
        </section>
      </>

  );
};
export default Homepage;