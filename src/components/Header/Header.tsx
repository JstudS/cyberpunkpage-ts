import React from 'react'
import video from '../../assets/video/CP2077.mp4'
import Navbar from '../NavBar/NavBar'
import HeaderContent from './HeaderContent'

const Header = () => {
  return (
    <div className='header'>
        <Navbar />
        <HeaderContent />
        <div className='header-bg'>
            <video muted autoPlay loop playsInline>
              <source src={video} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default Header