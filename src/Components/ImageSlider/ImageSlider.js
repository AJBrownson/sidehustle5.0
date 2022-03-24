import React, {useState} from 'react'
import SliderData from './SliderData.json'
import Modal from './Modal'



const ImageSlider = () => {
    const [clicked, setClicked] = useState('')
    const [currentIndex, setCurrentIndex] = useState('')

    const handleClick = (item, index) => {
        setCurrentIndex(index)
        setClicked(item.link)
    }


    const handleRotationRight = () => {
        const totalLength = SliderData.data.length
        if(currentIndex + 1 >= totalLength ) {
            setCurrentIndex(0)
            const newUrl = SliderData.data[0].link
            setClicked(newUrl)
            return;
        }
        const newIndex = currentIndex + 1
        const newUrl = SliderData.data.filter((item) => {
            return SliderData.data.indexOf(item) === newIndex
        })
        const newItem =newUrl[0].link
        setClicked(newItem)
        setCurrentIndex(newIndex)
    }

    const handleRotationLeft = () => {
        const totalLength = SliderData.data.length
        if(currentIndex - 1 >= totalLength ) {
            setCurrentIndex(0)
            const newUrl = SliderData.data[0].link
            setClicked(newUrl)
            return;
        }
        const newIndex = currentIndex - 1
        const newUrl = SliderData.data.filter((item) => {
            return SliderData.data.indexOf(item) === newIndex
        })
        const newItem =newUrl[0].link
        setClicked(newItem)
        setCurrentIndex(newIndex)
    }


  return (
    <>
      {SliderData.data.map( (item, index) => (
          <div key={index}>
              <img src={item.link} alt={item.text} onClick='handleClick()'  />
              <h3>{item.text}</h3>
          </div>
      ))}  
      {clicked && (
      <Modal clicked={clicked}
      handleRotationRight={handleRotationRight}
      setClicked={setClicked}
      handleRotationLeft={handleRotationLeft}
      />
      )}
    </>
  )
}

export default ImageSlider