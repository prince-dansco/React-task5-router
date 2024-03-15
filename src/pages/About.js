import React, { useContext } from "react";
import SeeMore from "../SeeMore";
import Aimage from "../assets/1643364729238[182] 1.png";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-details">
          <div className="about-image">
            <img src={Aimage} alt="" />
          </div>
          <div className="about-content">
            <div className="about-details-text">
              <h1>Meet the face behind the posts</h1>
              <p>
                I'm Pranjal, a 21 year old engineering student from Bundi,
                Rajasthan. I'm currently studying in Rajasthan Technical
                University, Kota.
              </p>
              <p>
                I'm only really just getting started with my little blog, but I
                hope you enjoy it. Feel free to get in touch with me regarding
                collaborations, questions, or even for a chat! You can find how
                to contact me at the bottom of the page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeeMore />
    </div>
  );
};

export default About;
