import React from 'react'
import { Image } from './Cart.elements'
import UserCart from '../images/icon-cart.svg'


const Cart = () => {
  return (
    <Image>
        <img src={UserCart} alt='user cart' />
    </Image>
  )
}

export default Cart