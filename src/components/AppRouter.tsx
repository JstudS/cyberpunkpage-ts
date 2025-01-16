import React from 'react'
import { PURCHASE_ROUTE, MAIN_ROUTE } from '../utils/consts.js';
import MainPage from '../pages/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import PurchasePage from '../pages/PurchasePage';


const AppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} Component={MainPage} />
      <Route path={PURCHASE_ROUTE} Component={PurchasePage} />
      <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter