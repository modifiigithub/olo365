import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/svgs/logo.svg"
import { ReactNode } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"
import { userLoggedOut } from "../../redux/features/auth/authSlice"
import { RootState } from "../../redux/app/store"

export default function Navbar({ drawerButton }: {
    drawerButton: ReactNode
}) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { device_token } = useAppSelector((state: RootState) => state?.auth);

    function handleLogout() {
        dispatch(userLoggedOut())
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <nav className="bg-stone-800/90 backdrop-blur-xl sticky top-0 z-20">
                <div className="container">
                    <div className="navbar py-3">
                        <div className="navbar-start">
                            {/* <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li>
                                        <a>Parent</a>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Item 3</a></li>
                                </ul>
                            </div> */}
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <h3 className="text-white text-lg">Online Ordering</h3>
                        </div>
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-3">
                                    <div className="indicator text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            {drawerButton}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {device_token ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="user profile" src="https://plus.unsplash.com/premium_photo-1666265087928-fe19db9887ad" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/profile-info">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div> : <Link to="/login" className="btn btn-sm bg-brand-600 hover:bg-brand-700 text-white border-brand-400">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
