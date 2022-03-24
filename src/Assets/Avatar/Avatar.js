import React from 'react'
import { Image } from './Avatar.elements'
import UserAvatar from '../images/image-avatar.png'

const Avatar = () => {
  return (
    <Image>
        <img src={UserAvatar} alt='user avatar' />
    </Image>
  )
}

export default Avatar