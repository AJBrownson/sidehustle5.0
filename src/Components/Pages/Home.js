import React from "react";
import "./Home.css";
import ProductHomeRow from "./ProductHomeRow";


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
        <h1 className="banner__title">Chop's Resturant</h1>
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
      <div className="products">
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
      </div>
      <h5 color="black">Drinks</h5>
    </div>
  );
}

export default Home;