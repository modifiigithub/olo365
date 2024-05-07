import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { cartActions } from "../../redux/cart/cartSlice";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const totalAmount = `$${cartState.totalAmount.toFixed(2)}`;
  const hasItems = cartState.items.length > 0;
  const { items } = cartState;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(cartActions.addItem({ ...item, amount: 1 }));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItems = (
    <ul className="cart-items">
      {cartState.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <>
      <button className="cart_icon_btn" onClick={handleShow}>
        <span className="cart_icon">
          <IoMdCart />
        </span>
        <span className="badge">{numberOfCartItems}</span>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems}
          <div className="total">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          <div className="mt-3">
            <Link
              to="/carts"
              type="button"
              className="btn w-100"
            >
              GoTo Cart
            </Link>
          </div>

          <div className="actions mt-3">
            <button
              onClick={handleClose}
              type="button"
              className="btn btn_sec"
            >
              Close
            </button>

            {hasItems && (
              <button
                onClick={() => {
                  if (isAuth) {
                    navigate("/checkout");
                  } else {
                    navigate("/auth");
                  }
                  props.onHideCart();
                }}
                type="button"
                className="btn"
              >
                {isAuth ? "Checkout" : "Login"}
              </button>
            )}
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Cart;
