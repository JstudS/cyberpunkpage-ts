import React, { FC } from 'react'

interface MenuItemLangProps {
    langItem: {
        curr: string
        list: string[]
    }
}

const MenuItemLang: FC<MenuItemLangProps> = ({langItem}) => {
  return (
    <li className='menu-item menu-item-lang'>
        <div className="menu-sub">
            RU
        </div>
        <ul className="menu-sub-list menu-sub-list-lang">
            {langItem.list.map((lang, index) => 
                <li key={index}>{lang}</li>
            )}
        </ul>
    </li>
  )
}

export default MenuItemLang