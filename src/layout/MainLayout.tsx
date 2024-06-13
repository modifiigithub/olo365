import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { RootState } from "../redux/app/store";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { handleSideDrawer } from "../redux/features/drawer/drawerSlice";
import CartSidebarContent from "../components/drawer/CartSidebarContent";
import AddAddressSidebarContent from "../components/drawer/AddAddressSidebarContent";
import SidebarCategoryList from "../components/SidebarCategoryList";

export default function MainLayout() {
    const dispatch = useAppDispatch()
    const { openDrawer, drawerType } = useAppSelector((state: RootState) => state.drawer);

    return (
        <>
            <div className="drawer">
                <input id="cart-drawer" checked={openDrawer} type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Navbar />
                    <Outlet />
                    <ScrollRestoration />
                    <Footer />
                </div>
                <div className="drawer-side z-20">
                    <label onClick={() => dispatch(handleSideDrawer(false))} aria-label="close sidebar" className="drawer-overlay"></label>
                    {/* Sidebar content here */}
                    <div className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                        {drawerType === "cart" && <CartSidebarContent />}
                        {drawerType === "address" && <AddAddressSidebarContent />}
                        {drawerType === "category" && <SidebarCategoryList type="drawer" />}
                    </div>
                </div>
            </div>
        </>
    )
}
