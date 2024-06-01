import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import CartItem from "./CartItem";

export default function CartSidebarContent() {

    const { carts, totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);

    let content;

    if (carts.length > 0) {
        content = carts.map(cart => <CartItem key={cart.id} image="lg" size="small" cart={cart} />)
    } else {
        content = <p>Cart is empty</p>
    }

    return (
        <>
            <div className="sticky top-0 text-center bg-base-200/90 backdrop-blur-lg py-3">
                <h3 className="text-xl font-bold">Cart Items</h3>
            </div>
            <div>
                {content}
            </div>

            <div className="border-b border-stone-200 py-3">
                <h3 className="text-xl font-bold">Order summary</h3>
                <div className="flex justify-between mt-5">
                    <h3 className="text-lg font-semibold">Total Product:</h3>
                    <p className="font-semibold">{totalProduct}</p>
                </div>
                <div className="flex justify-between mt-5">
                    <h3 className="text-lg font-semibold">Total Price:</h3>
                    <p className="bold">${totalPrice}</p>
                </div>
            </div>

            <div className="sticky bottom-0 text-center bg-base-200/90 backdrop-blur-lg py-3">
                <Link to="/checkout" className="btn">Goto Checkout</Link>
            </div>
        </>
    )
}
