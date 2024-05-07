import React, { useState } from "react";

const FoodItemForm = (props) => {
  const [amount, setAmount] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    setAmount((prevAmount) => prevAmount + 1);
    props.onAddToCart(1);
  };

  return (
    <form className="add_form" onSubmit={submitHandler}>
      <button className="btn" type="submit">
        Add To Cart
      </button>
      {amount > 0 && <p>Items added: {amount}</p>}
    </form>
  );
};

export default FoodItemForm;
