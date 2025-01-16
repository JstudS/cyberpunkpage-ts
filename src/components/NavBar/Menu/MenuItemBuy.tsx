import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { PURCHASE_ROUTE } from '../../../utils/consts'

interface MenuItemBuyProps {
    buyItemName: string
}

const MenuItemBuy: FC<MenuItemBuyProps> = ({buyItemName}) => {
  const navigate = useNavigate()
  return (
    <li className="menu-item-buy">
        <div onClick={() => navigate(PURCHASE_ROUTE)}>
            {buyItemName}
        </div>
    </li>
  )
}

export default MenuItemBuy