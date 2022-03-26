import React from 'react'
import { MainContainer, PicturesContainer, InfoContainer, ThumbNails, Thumbs, 
  CompanyName, ProductInfo, ProductPriceBig} from './MainPage.elements'
import Product from '../../Assets/images/image-product-1.jpg'
import Thumbnail from '../ProductThumbnails/Thumbnail.json'


const MainPage = () => {
  return (
    <>
        <MainContainer>
            <PicturesContainer>
              <img src={Product} alt='sneaker snapshot' />
              <ThumbNails>
                {
                  Thumbnail && Thumbnail.map((thumbs) => {
                    return (
                      <Thumbs key={thumbs.id}>
                        <img src={thumbs.image} alt={thumbs.alt} />
                      </Thumbs>
                    )
                  })
                }
              </ThumbNails>
            </PicturesContainer>

            <InfoContainer>
              <CompanyName>
                Sneaker Company
              </CompanyName>
              <ProductInfo>
                Fall Limited Edition Sneakers
              </ProductInfo>
              <ProductPriceBig>

              </ProductPriceBig>
            </InfoContainer>
        </MainContainer>
    </>
  )
}

export default MainPage