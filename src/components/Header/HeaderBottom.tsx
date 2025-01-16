import React, { FC } from 'react'
import HeaderPlatform from './HeaderPlatform'
import { useNavigate } from 'react-router-dom'

interface HeaderBottomProps {
    btnTitle: {
      title: string
      href: string
      navigate?: boolean
    }[]
}

const HeaderBottom: FC<HeaderBottomProps> = ({btnTitle}) => {
  const navigate = useNavigate()
  return (
    <div className="header-bottom">
        <div className="header-buttons">
          {btnTitle.map((el, index) => {
              if(el.navigate) {
                return (
                  <div
                    key={index} 
                    className="header-btn btn-black "
                    onClick={() => navigate(el.href)}
                  >
                    {el.title}
                  </div>
                )
              } 
              
              return (
                <a 
                  href={el.href}
                  key={index} 
                  className="header-btn btn-black "
                  target='blank'
                >
                  {el.title}
                </a>
              )
            })}
        </div>
        
        <HeaderPlatform srcArray={['xboxLogo', 'psLogo', 'pcLogo']}/>
    </div>
  )
}

export default HeaderBottom