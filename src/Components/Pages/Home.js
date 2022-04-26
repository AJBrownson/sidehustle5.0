import React from "react";
import "./Home.css";


function Home() {
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://p0.piqsels.com/preview/13/60/32/vietnam-ho-chi-minh-city-noodle-foodphotography.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Chops Resturant</h1>
        <div className="banner__buttons">
          <button className="banner__button__join" href="www.facebook.com">
            Join
          </button>
          <button className="banner__button">Place order</button>
        </div>
        <h1 className="banner__description">
          {/* description  */}
          We provide you every foods and drinks with excellent hospitality, you
          can join us to be a member.
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
}

export default Home;