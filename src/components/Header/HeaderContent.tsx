import React from 'react'
import HeaderBottom from './HeaderBottom'
import { PURCHASE_ROUTE } from '../../utils/consts'

const HeaderContent = () => {
  return (
    <div className='header-content'>
        <div className="header-inner">
          <div className="header-title">Полное погружение в Cyberpunk 2077</div>

          <HeaderBottom btnTitle={[
              {title: 'Купить', href: PURCHASE_ROUTE, navigate: true}, 
              {title: 'Посмотреть трейлер', href: 'https://www.youtube.com/watch?v=Ugb80d5lxEM&ab_channel=Cyberpunk2077'}
            ]} />
        </div>
    </div>
  )
}

export default HeaderContent