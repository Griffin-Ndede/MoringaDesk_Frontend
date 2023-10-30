import React from "react";
import "./homepage.css";
import img1 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/EML.png"
import img2 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/faq.png"
import img3 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/Filter.png"
import img4 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/IG.jpeg"
import img5 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/image.png"
import img6 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/MAP.jpeg"
import img7 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/NOTIFICATON.png"
import img8 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/phone.png"
import img9 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/posting.png"
import img10 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/questions.jpeg"
import img11 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/search.jpg"
import img12 from "/home/mwangi/MoringaDesk_Frontend/home/src/homePage/images/TWEETER.png"

const Homepage =()=>{
    return (
        <div className="homepage">
      <div className="div">
        <footer className="footer">
          <div className="overlap-group">
            <div className="text-wrapper">@copyrightreservedformoringadesk</div>
            <img className="map" alt="Map" src={img6}/>
            <div className="text-wrapper-2">Join our team</div>
            <div className="text-wrapper-3">Be there !</div>
            <div className="text-wrapper-4"> find the best experience with us</div>
            <div className="call">
              <div className="text-wrapper-5">contact us on: 0778456342</div>
              <img className="phone" alt="Phone" src={img8}/>
            </div>
            <div className="email">
              <div className="text-wrapper-6">@moringadesl@gmail.com</div>
              <img className="EML" alt="Eml" src= {img1} />
            </div>
            <div className="x">
              <div className="text-wrapper-7">@moringadeskofficial</div>
              <img className="img" alt="X" src= {img12}/>
            </div>
            <div className="IG">
              <div className="text-wrapper-8">@MORINGADESK</div>
              <img className="IG-2" alt="Ig" src= {img4} />
            </div>
          </div>
        </footer>

    )
}
