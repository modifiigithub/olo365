import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}