import React, { FC } from 'react'
import MenuItem from './MenuItem'
import MenuItemLang from './MenuItemLang'
import MenuItemBuy from './MenuItemBuy'
import { MAIN_ROUTE } from '../../../utils/consts'

interface MenuProps {
    isBuy?: boolean
}

const Menu: FC<MenuProps> = ({isBuy}) => {
  return (
    <div className='menu-container'>
        <ul className="menu-list">
            <MenuItem item={{
                title: 'Игры',
                subName: 'Cyberpunk 2077',
                href: false,
                mainPath: MAIN_ROUTE
            }}/>

            <MenuItem item={{
                title: 'Сериалы',
                subName: 'Edgerunners',
                subPath: 'https://www.cyberpunk.net/ru/edgerunners',
                href: true
            }}/>
            
            <MenuItem item={{
                title: 'Сообщество',
                subName: 'Discord',
                subPath: 'https://discord.com/invite/cyberpunkgame',
                href: true
            }}/>

            <MenuItem item={{
                title: 'Прочее',
                subName: 'Cd Project Red',
                subPath: 'https://www.cdprojektred.com/en',
                href: true
            }}/>

            <MenuItemLang langItem={{
                curr: 'RU',
                list: ['English', 'русский']
            }}/>

            { isBuy && <MenuItemBuy buyItemName={'Купить'}/>}
        </ul>
    </div>
  )
}

export default Menu