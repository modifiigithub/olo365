import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useEffect } from "react";
import { handleSideDrawer } from "../../redux/features/drawer/drawerSlice";

export default function Checkout() {
    const dispatch = useAppDispatch()
    const { carts, totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(handleSideDrawer(false))
    }, [dispatch])

    let content;

    if (carts.length > 0) {
        content = carts.map(cart => <CartItem image="md" size="large" cart={cart} />)
    } else {
        content = <p>Cart is empty</p>
    }

    return (
        <section className="container py-6 min-h-[80vh]">
            <h3 className="text-2xl font-bold mb-4">Checkout</h3>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 bg-base-200 p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold">Order summary</h3>
                    <div className="flex justify-between mt-5">
                        <h3 className="text-lg font-bold">Total Product:</h3>
                        <p className="font-semibold">{totalProduct}</p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <h3 className="text-lg font-bold">Total Price:</h3>
                        <p className="font-semibold">${totalPrice}</p>
                    </div>
                </div>

                <div className="col-span-4 bg-base-200 pl-6 rounded-lg">
                    {content}
                </div>
            </div>

            <div>
                <Link to="/place-order" className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500 mt-5">Place Order</Link>
            </div>
        </section>
    )
}
