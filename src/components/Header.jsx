import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <Image src='/cart.jpeg' alt='cart-logo' width={140} height={140} />
    </div>
  )
}

export default Header