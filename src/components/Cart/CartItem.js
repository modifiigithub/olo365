const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <h5>{props.name}</h5>
      <div className="cart_info_area">
        <span className="price">{price}</span>
        <div className="actions">
          <button onClick={props.onRemove}>−</button>
          <span className="amount">x {props.amount}</span>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
