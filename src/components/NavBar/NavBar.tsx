import React, { FC, useCallback, useEffect, useState } from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

interface NavBarProps {

}

const Navbar: FC<NavBarProps> = () => {
  const [navBarFixed, setNavBar] = useState<boolean>(false)
  
  const toFixedFunc = useCallback(() => {
    if (window.scrollY > 10) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }, [])


  useEffect(() => {
    window.addEventListener('scroll', toFixedFunc )
    return () => {
      window.removeEventListener('scroll', toFixedFunc) 
    }
  }, [toFixedFunc])

  return (
    <div className={navBarFixed ? 'navbar navbar-fixed' : 'navbar'}>
        <Logo logosArray={[
          {
            className: 'navbar-logo',
            src: 'logo',
            alt: 'logo-img'
          },
          {
            className: 'navbar-badge',
            src: 'badge',
            alt: 'badge-img'
          },
        ]}/>

        <Menu isBuy />
    </div>
  )
}

export default Navbar