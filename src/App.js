import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout, retrieveStoredToken } from './redux/auth/authSlice';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderedPage from './pages/OrderedPage';
import Layout from './components/Layout/Layout';
import CartPage from './pages/CartPage';


function App() {
  const dispatch = useDispatch();
  const { expirationTime, isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(retrieveStoredToken())
  }, [dispatch])

  useEffect(() => {
    let timer;
    if (expirationTime) {
      timer = setTimeout(() => {
        dispatch(logout());
      }, expirationTime)
    }
    return () => clearTimeout(timer);
  }, [dispatch, expirationTime])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={!isAuth ? <AuthPage /> : <Navigate to="/" />} />
        {/* <Route path="/checkout" element={isAuth?<CheckoutPage /> : <Navigate to="/auth" />} /> */}
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* <Route path="/order" element={isAuth ? <OrderedPage /> : <Navigate to="/auth" />} /> */}
        <Route path="/order" element={<OrderedPage />} />
        <Route path="/carts" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
