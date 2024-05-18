import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

export default function Carts() {
    const { carts } = useAppSelector((state: RootState) => state.cart);

    let content;

    if (carts.length > 0) {
        content = carts.map(cart => <CartItem image="md" size="large" cart={cart} />)
    } else {
        content = <p>Cart is empty</p>
    }

    return (
        <section className="container py-6 min-h-[80vh]">
            <h3 className="text-2xl font-semibold">Your Cart</h3>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    {content}
                </div>
                <div className="col-span-4">
                    <h3 className="text-2xl font-semibold">Order summary</h3>
                </div>
            </div>

            <div>
                <Link to="/place-order" className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500 mt-5">Place Order</Link>
            </div>
        </section>
    )
}
