import React, { FC } from 'react'
import { images } from '../../assets/images/images'

interface HeaderPlatformProps {
  srcArray: string[] 
}

const HeaderPlatform: FC<HeaderPlatformProps> = ({srcArray}) => {

  return (
    <div className="header-platforms">
        {srcArray.map((el, index) => 
            <img
              key={index}
              src={images[el as keyof typeof images].default} 
              alt={el}
            />
        )}
    </div>
  )
}

export default HeaderPlatform