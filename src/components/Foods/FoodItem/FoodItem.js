import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/cart/cartSlice";
import AddToCartButton from "./AddToCartButton";

const FoodItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card">
          <div className="food_thamb">
            <img className="food_img" src={props.img} alt={props.name} />
          </div>
          <div className="food_info">
            <h5>{props.name}</h5>
            <div className="price">{price}</div>
          </div>
          <p className="food_desc">{props.description}</p>
          <div className="add_to_cart">
            <AddToCartButton onAddToCart={addToCartHandler}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
