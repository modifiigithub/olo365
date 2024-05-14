import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import CartItem from "../components/CartItem";
import Footer from "../components/shared/Footer";

function DrawerButton() {
    return (
        <label htmlFor="my-drawer" className="btn btn-block">View cart</label>
    )
}

export default function MainLayout() {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar drawerButton={<DrawerButton />} />
                    <Outlet />
                    <Footer />
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <div className="sticky top-0 text-center bg-base-200/90 backdrop-blur-lg py-3">
                            <h3 className="text-xl font-bold">Cart Items</h3>
                        </div>
                        <div>
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                            <CartItem image="lg" size="small" />
                        </div>

                        <div className="sticky bottom-0 text-center bg-base-200/90 backdrop-blur-lg py-3">
                            <Link to="/carts" className="btn">Goto Carts</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
