import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/cart/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function CartRow({ item }) {
    const dispatch = useDispatch()
    const { foods } = useSelector((state) => state.foods);
    const { id, name, amount, price } = item || {}

    const food = foods && foods.find(item => item.id === id)

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.removeItem(id));
    };
    const cartItemAddHandler = (item) => {
        dispatch(cartActions.addItem({ ...item, amount: 1 }));
    };

    return (
        <tr key={item.id}>
            <td>
                <img style={{
                    width: "130px",
                    height: "88px"
                }} src={food.img} alt={name} className="rounded-3 object-fit-cover" />
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <div className="actions">
                    <button onClick={() => cartItemRemoveHandler(id)}>−</button>
                    <span className="amount">x {amount}</span>
                    <button onClick={() => cartItemAddHandler(item)}>+</button>
                </div>
            </td>
            <td>$70.00</td>
            <td>
                <button className="w-100 text-right" onClick={() => dispatch(cartActions.remove(item.id))}>
                    <RiDeleteBinLine className="fs-4" />
                </button>
            </td>
        </tr>
    )
}


export default function CartPage() {
    const { items } = useSelector((state) => state.cart);

    const totalPrice = (items && items?.length > 0) ? items.reduce((currentPrice, item) => {
        return currentPrice + item.price * item.amount;
    }, 0) : 0

    const subTotalPrice = (items && items?.length > 0) ? items.reduce((currentPrice, item) => {
        return currentPrice + item.price;
    }, 0) : 0

    let content;

    if (items?.length > 0) {
        content = items.map(item => <CartRow key={item.id} item={item} />)
    } else if (items.length === 0) {
        content = <h5 className="mt-3">No cart item found</h5>
    }

    console.log(totalPrice)


    return (
        <div className="cart-page">
            <div className="banner">
                <div className="container">
                    <div className="banner_text">
                        <h1>Carts</h1>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Images</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
            <div className="container pt-3 pb-5 d-flex justify-content-between">
                <div>
                    <button className="btn">Continue Shopping</button>
                </div>
                <div className="w-25">
                    <h3 className="mb-3">Cart totals</h3>
                    <div className="d-flex justify-content-between border p-3">
                        <h5>Subtotal</h5>
                        <p className="fs-6">${subTotalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-start border-end p-3">
                        <h5>Total</h5>
                        <p className="fs-6">${totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <Link to="/checkout" className="btn">Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
