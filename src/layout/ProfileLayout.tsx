import { Outlet } from "react-router-dom"
import ProfileSidebar from "../components/shared/ProfileSidebar"

export default function ProfileLayout() {
    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-10 mt-6">
                <ProfileSidebar />
                <div className="col-span-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
