import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo-light.png"
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"
import { userLoggedOut } from "../../redux/features/auth/authSlice"
import { RootState } from "../../redux/app/store"
import { FaRegUser } from "react-icons/fa6"
import { IoCartOutline } from "react-icons/io5"
import { handleSideDrawer, setDrawerType } from "../../redux/features/drawer/drawerSlice"

export default function Navbar() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { device_token, user } = useAppSelector((state: RootState) => state.auth);
    const { totalProduct } = useAppSelector((state: RootState) => state.cart);

    function handleLogout() {
        dispatch(userLoggedOut())
        localStorage.clear()
        navigate("/")
    }

    function openCartSidebarDrawer() {
        dispatch(handleSideDrawer(true))
        dispatch(setDrawerType("cart"))
    }

    return (
        <nav className="bg-black/90 backdrop-blur-xl sticky top-0 z-20">
            <div className="container">
                <div className="navbar py-3">
                    <div className="navbar-start">
                        <Link to="/">
                            <img className="w-48" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <button>
                            <label onClick={openCartSidebarDrawer} aria-label="Open Cart Drawer" role="button" className="btn btn-ghost btn-circle mr-3">
                                <div className="indicator text-white">
                                    <IoCartOutline className="text-2xl" />
                                    <span className="badge badge-sm indicator-item">{totalProduct}</span>
                                </div>
                            </label>
                        </button>
                        {device_token && user ? <div className="dropdown dropdown-end hidden md:block">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <div className="text-white text-left flex items-center gap-2">
                                    <FaRegUser className="text-lg" />
                                    <p className="text-white w-20 line-clamp-1">{user?.name}</p>
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <div className="px-3 py-2">
                                    {user?.email}
                                </div>
                                <li>
                                    <Link to="/profile">
                                        Profile
                                    </Link>
                                </li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div> : <Link to="/login" className="btn bg-brand-600 hover:bg-brand-700 text-white border-brand-400">Login</Link>}
                    </div>
                </div>
            </div>
        </nav>
    )
}
