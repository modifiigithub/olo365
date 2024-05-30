import { Outlet, ScrollRestoration } from "react-router-dom"
import ProfileSidebar from "../components/shared/ProfileSidebar"

export default function ProfileLayout() {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-10 mt-10">
                <ProfileSidebar />
                <div className="col-span-12 md:col-span-8">
                    <Outlet />
                    <ScrollRestoration />
                </div>
            </div>
        </div>
    )
}
