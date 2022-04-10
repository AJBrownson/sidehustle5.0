import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'



const arrOfImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg"
]



const LightBox = (props) => {
const [indexOfImages, setIndexOfImages] = useState(0)
const [showModal, setShowModal] = useState(false)


  return (
    <>
        {arrOfImages.map((image, index) => (
        <img
          key={image}
          style={{ height: "200px", width: "300px", margin: "20px" }}
          src={image}
          alt={image}
          onClick={() => (setIndexOfImages(index))}
           
        />
      ))}

      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          Show Lightbox
        </button>
      </div>
    </>
  )
}

export default LightBox