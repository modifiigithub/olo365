import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";

function DrawerButton() {
    return (
        <label htmlFor="my-drawer" className="btn btn-block">View cart</label>
    )
}

function CartItem() {
    return (
        <div className="flex gap-4 py-3 border-b border-stone-200">
            <img className="w-24 object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1663852297522-d01619dc3e55" alt="" />
            <div>
                <div className="w-full flex justify-between items-center">
                    <p className="text-xl font-bold line-clamp-1">Pizza</p>
                    <p className="text-base font-semibold">$125</p>
                </div>
                <div className="flex mt-2">
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                        <FaPlus />
                    </button>
                    <button className="btn btn-sm">12</button>
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                        <TiMinus />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function MainLayout() {
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar drawerButton={<DrawerButton />} />
                    <>
                        <Outlet />
                    </>
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <h3 className="text-xl font-bold">Cart Items</h3>

                        <div>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                        <Link to="/carts" className="btn btn-sm mt-3">Goto Carts</Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
