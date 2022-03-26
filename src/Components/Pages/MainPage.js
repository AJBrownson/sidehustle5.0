import React from 'react'
import { MainContainer, PicturesContainer, InfoContainer } from './MainPage.elements'
import Product from '../../Assets/images/image-product-1.jpg'

const MainPage = () => {
  return (
    <>
        <MainContainer>
            <PicturesContainer>
              <img src={Product} alt='sneaker snapshot' />
            </PicturesContainer>
            <InfoContainer>

            </InfoContainer>
        </MainContainer>
    </>
  )
}

export default MainPage