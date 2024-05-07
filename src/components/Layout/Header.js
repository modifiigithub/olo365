import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdRestaurantMenu, MdOutlineMenu } from 'react-icons/md';
import { cartActions } from '../../redux/cart/cartSlice';
import { logout } from '../../redux/auth/authSlice';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    let cartItems = [];
    let totalCartPrice = 0;
    if(localStorage.getItem('cart_items') && localStorage.getItem('cart_items')) {
      cartItems = JSON.parse(localStorage.getItem('cart_items'));
      totalCartPrice = JSON.parse(localStorage.getItem('total_amount'));
    }
    dispatch(cartActions.retriveCartItems({
     items: [...cartItems],
     totalAmount: totalCartPrice
    }));
    console.log('hi')
  }, [dispatch])

  return (
    <>
      <header className='header'>
        <div className='brand'>
          <span className='menu_icon'>
            {!showMenu && <MdOutlineMenu onClick={showMenuHandler} />}
            {showMenu && <MdRestaurantMenu onClick={hideMenuHandler} />}
          </span>
          <h1 className='brand_title'><a href="/">HungryHub</a></h1>
        </div>
        <div className='nav'>
          <ul
            className={`$ nav_items ${
              showMenu ? 'nav_items_mobile' : ''
            }`}
          >
            <li className='nav_item'>
              <NavLink
                onClick={hideMenuHandler}
                className='nav_link'
                to="/"
              >
                Home
              </NavLink>
            </li>
            {isAuth && (
              <li className='nav_item'>
                <NavLink
                  onClick={hideMenuHandler}
                  className='nav_link'
                  to="/order"
                >
                  Order
                </NavLink>
              </li>
            )}
            <li className='nav_item'>
              <NavLink
                onClick={hideMenuHandler}
                className='nav_link'
                to="/about"
              >
                About
              </NavLink>
            </li>
            {!isAuth && (
              <li className='nav_item'>
                <NavLink
                  onClick={hideMenuHandler}
                  className='nav_link'
                  to="/auth"
                >
                  Login
                </NavLink>
              </li>
            )}
            {isAuth && (
              <li onClick={hideMenuHandler} className='nav_item'>
                <button
                  onClick={logoutHandler}
                  className='btn_logout'
                  type="button"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
          <Cart/>
        </div>
      </header>
    </>
  );
};

export default Header;
