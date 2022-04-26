import React from 'react'
import "./Home.css";
import ProductHomeRow from "./ProductHomeRow";


const Products = () => {

  return (
    <div className="products">
        <ProductHomeRow
          productName="Hamburger"
          productDescription="This hamburger is the most liked burger from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Sandwich"
          productDescription="This sandwich is the most liked sandwich from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/detail/17-174888_food-sandwich-png.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Indian"
          productDescription="This North Indian combo is the most liked Indian combo from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/detail/21-210980_north-indian-foods-png-download-food.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Mexican"
          productDescription="This mexican dish is made from a secret recipe and is exclusive to our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/detail/174-1741689_welcome-to-maxican-foods-mexican-food-vs-italian.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Green Salad"
          productDescription="This salad is the most liked salad from our restaurant, you can check it out."
          productImage="https://www.nicepng.com/png/detail/54-546030_food-top-view-png-jpg-black-and-white.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Heart Food"
          productDescription="This food is good for your heart, you can check it out."
          productImage="https://www.nicepng.com/png/detail/88-882693_heart-raw-food-heart-disease-food.png"
          productPrice="15.00 $"
        />
        <ProductHomeRow
          productName="Soul Food"
          productDescription="This is food for the soul to keep you alright, you can check it out."
          productImage="https://www.nicepng.com/png/detail/359-3597223_creative-culinary-community-fox-restaurant-concepts-food-food.png"
          productPrice="15.00 $"
        />
      </div>
      
  )
}

export default Products