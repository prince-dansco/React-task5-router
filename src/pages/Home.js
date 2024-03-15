import React, { useState } from "react";
import firstl from "../assets/Rectangle 2@2x.png";
import secondl from "../assets/Rectangle 5.png";
import SeeMore from "../SeeMore";
import { Link } from "react-router-dom";
const Home = () => {
  const [showSeeMore, setShowSeeMore] = useState(false);

  const handleSeeMoreClick = () => {
    setShowSeeMore(true);
  };
  return (
    <div>
      <div className="container">
        <div className="hero-bg">
          <h2>
            Hello, my name is Princewill from Rajasthan, India. I am a web
            devloper. Digging deep to the secrets of life. Like to write my
            thoughts down, love dancing. In my early twenties.
          </h2>
        </div>
        <div className="main-section">
          <h1>Navigating my most viewed blogs:</h1>

          <div className="firstAdvat">
            <img src={firstl} alt="" />
            <div className="Advat-content">
              <h1>Imperfectly perfect... </h1>
              <p>
                Everything starts with self love... This is not just a quote for
                me, it is the thought which gives me strength from inside. I
                have always been in the search of love but never thought that i
                can find love in myself too. It was not an easy journey. From my
                childhood i was concerned about the way i look, i dress and so
                many things. I always wanted to look the perfect.
              </p>
              <div className="Adavt-list">
                <p>May 25, 2020</p>
                <button>View</button>
              </div>
            </div>
          </div>
          <div className="firstAdvat">
            <img src={secondl} alt="" />
            <div className="Advat-content">
              <h1>Strongest Lady</h1>
              <p>
                This is terrible what I saw today...... Is this marriage ... Is
                it so, then I never want to get married This .... The man always
                dominating. The woman always try to do only that thing which her
                husband like even after that he shouts on her and if she only
                defends herself or start crying this is called her asabhyata or
                disrespecting the husband ..
              </p>
              <div className="Adavt-list">
                <p>june 25, 2022</p>
                <button>View</button>
              </div>
            </div>
          </div>
        </div>

        <section className="sections">
          <h2>see more of our blogs</h2>
          <div className="cards">

            {showSeeMore && <SeeMore />}
            <Link to="/about">
              <button>View</button>
            </Link>
            
            {/* <button onClick={handleSeeMoreClick}>View</button> */}
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
