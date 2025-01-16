import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE } from '../../../utils/consts'

interface MenuItemProps {
    item: {
      title: string
      subName: string
      subPath?: string
      href: boolean
      mainPath?: string
    }
}

const MenuItem: FC<MenuItemProps> = ({item}) => {
  const navigate = useNavigate()
  return (
    item.href 
    ?
    <li className="menu-item">
      <div className="menu-sub">
        {item.title}
      </div>
      <ul className="menu-sub-list">
          <a 
            href={item.subPath} 
            target='blank'
          >
              {item.subName}
          </a>
      </ul>
    </li>
    :
    <li className="menu-item">
      <div className="menu-sub">
        {item.title}
      </div>
      <ul className="menu-sub-list">
          <li onClick={() => navigate(item.mainPath || MAIN_ROUTE)}>
            {item.subName}
          </li>
      </ul>
    </li>
  )
}

export default MenuItem