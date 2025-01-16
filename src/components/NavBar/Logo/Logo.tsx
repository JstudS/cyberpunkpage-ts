import React, { FC } from 'react'
import { images } from '../../../assets/images/images'

interface LogoProps {
  logosArray: {
    className: string
    src: string
    alt: string
  }[]
}

const Logo: FC<LogoProps> = ({logosArray}) => {
  
  return (
    <div className='navbar-logo-container'>
      {logosArray.map((el, index) => 
        <img 
          key={index}
          className={el.className} 
          src={images[el.src as keyof typeof images]} 
          alt={el.alt} 
        />
      )}
    </div>
  )
}

export default Logo