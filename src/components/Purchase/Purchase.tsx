import React from 'react'
import './styles.css'
import logo from '../../assets/images/logo-franchise-black-en.png'
import cp2077 from '../../assets/images/buyCP2077.jpg'
import cp2077DLC from '../../assets/images/buyDLC.jpg'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE } from '../../utils/consts'
import Menu from '../NavBar/Menu/Menu'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

const Purchase = () => {
  const navigate = useNavigate()

  return (
    <div className='info-box'>
      <div className='navbar box-header'>
        <div onClick={() => navigate(MAIN_ROUTE)}>
          <img src={logo} alt="logoImage" />
        </div>
        <Menu />
      </div>

      <div className='step-title'>
        <div className='step-title-box'>
          <h5 className='dicount-title'>
            СКИДКИ ДО 35%
          </h5>
          <h4> выберите игру:</h4>
        </div>
      </div>

      <div className="game-boxes">
        <div className='boxes-container'>
          <img className='box-first-image' src={cp2077} alt="cp2077image" />
          <img className='box-second-image' src={cp2077DLC} alt="cp2077DLCimage" />
        </div>
      </div>
      <div className='newsletter-header'>
        <hr />
        <Newsletter />
      </div>
      
      <Footer />
    </div>
  )
}

export default Purchase