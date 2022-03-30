import React from 'react'
import { Main, Products, PicturesCard, RotationKeys, InfoCard, ThumbNails, Thumbs, 
CompanyName, ProductTitle, ProductInfo, PriceDiscount, ProductPrice, Big, 
Small, Discount, Btns, CounterButton, MinusCounter, PlusCounter, ActionButton} from './MainPage.elements'
import ProductImage from '../../Assets/images/image-product-1.jpg'
import Thumbnail from '../ProductThumbnails/Thumbnail.json'
import Minus from '../../Assets/images/icon-minus.svg'
import Plus from '../../Assets/images/icon-plus.svg'
import Cart from '../../Assets/Edited Assets/icon-cart.svg'
import Prev from '../../Assets/images/icon-previous.svg'
import Next from '../../Assets/images/icon-next.svg'



const MainPage = () => {
  return (
    <>
        <Main>
          <Products>
            <PicturesCard>
              <img src={ProductImage} alt='sneaker snapshot' />
            </PicturesCard>
            <RotationKeys>
              <img src={Prev} alt='' />
              <img src={Next} alt='' />
            </RotationKeys>

            <InfoCard>

              <CompanyName>
                Sneaker Company
              </CompanyName>
              <ProductTitle>
                Fall Limited Edition Sneakers
              </ProductTitle>
              <ProductInfo>
                These low-profile sneakers are your perfect
                casual wear companion. Featuring a durable rubber 
                outer sole, they'll withstand everything the weather
                can offer.
              </ProductInfo>

              <PriceDiscount>
                <ProductPrice>
                  <Big>$125.00</Big>
                  <Small>50%</Small>
                </ProductPrice>
                <Discount>$250.00</Discount>
              </PriceDiscount>

              <Btns>
                <CounterButton>
                  <MinusCounter> <img src={Minus} alt='' /> </MinusCounter>
                  <span>0</span>
                  <PlusCounter> <img src={Plus} alt='' /> </PlusCounter>
                </CounterButton>
                <ActionButton>
                  <img src={Cart} alt='' />
                  <p>Add to cart</p>
                </ActionButton>
              </Btns>

            </InfoCard>

            <ThumbNails>
                {
                  Thumbnail.map(thumbs => {
                    return (
                      <Thumbs key={thumbs.id}>
                        <img src={thumbs.image} alt={thumbs.alt} />
                      </Thumbs>
                    )
                  })
                }
              </ThumbNails>
          </Products>
        </Main>
    </>
  )
}

export default MainPage