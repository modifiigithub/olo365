import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import CartItem from "../components/CartItem";
import Footer from "../components/shared/Footer";
import { RootState } from "../redux/app/store";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { handleSideDrawer } from "../redux/features/drawer/drawerSlice";

export default function MainLayout() {
    const dispatch = useAppDispatch()
    const { carts, totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);
    const { openCartDrawer } = useAppSelector((state: RootState) => state.drawer);

    let content;

    if (carts.length > 0) {
        content = carts.map(cart => <CartItem image="lg" size="small" cart={cart} />)
    } else {
        content = <p>Cart is empty</p>
    }

    return (
        <>
            <div className="drawer">
                <input id="cart-drawer" checked={openCartDrawer} type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar />
                    <Outlet />
                    <ScrollRestoration />
                    <Footer />
                </div>
                <div className="drawer-side z-20">
                    <label onClick={() => dispatch(handleSideDrawer(false))} aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
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
                    </ul>
                </div>
            </div>
        </>
    )
}
