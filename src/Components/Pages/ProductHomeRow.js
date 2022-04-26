import React from "react";



function ProductHomeRow({
  productName,
  productDescription,
  productPrice,
  productImage,
}) {
  return (
    <div className="product">
      <div className="product__image">
        {/* https://www.nicepng.com/png/full/302-3027370_free-png-hamburger-png-pic-png-images-transparent.png */}
        <img className="prod_img" src={productImage} alt="Hamburger" />
      </div>
      <div className="product__detail">
        <h3 className="prod__name">{productName}</h3>
      </div>

      <div className="product__description">{productDescription}</div>
      <div className="product__footer">
        <p>
          Price <span className="prod__price">{productPrice}</span>
        </p>
        <button className="banner__button">Details</button>
      </div>
    </div>
  );
}

export default ProductHomeRow;