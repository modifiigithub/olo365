import { useAppSelector } from "../../redux/app/hooks"
import { RootState } from "../../redux/app/store"
import avatarImage from "../../assets/images/avatar-user-icon.png"
import { Link } from "react-router-dom"
import { ImCreditCard } from "react-icons/im"
import { MdPassword } from "react-icons/md"
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2"

export default function ProfileSidebar() {
    const { user } = useAppSelector((state: RootState) => state.auth)
    return (
        <div className="col-span-3 bg-base-200 text-center py-10 rounded-lg">
            <img className="w-32 mx-auto border rounded-full" src={avatarImage} alt="avatar" />
            {user?.name && <p className="text-xl font-bold mt-4">{user.name}</p>}

            <div className="mt-3">
                <ul className="menu rounded-box">
                    <li>
                        <Link to="">
                            <ImCreditCard className="text-lg" />
                            Personal Information
                        </Link>
                    </li>
                    <li>
                        <Link to="reset-password">
                            <MdPassword className="text-lg" />
                            Reset Password
                        </Link>
                    </li>
                    <li>
                        <Link to="order-history">
                            <HiOutlineDocumentMagnifyingGlass className="text-lg" />
                            Order History
                        </Link>
                    </li>
                </ul>

                <button type="submit" className="btn btn-sm bg-brand-600 hover:bg-brand-500 text-white mt-4">
                    Logout
                </button>
            </div>
        </div>
    )
}
