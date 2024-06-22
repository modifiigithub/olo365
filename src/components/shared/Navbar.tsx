import { Link, useLocation, useNavigate } from "react-router-dom"
import logo from "../../assets/images/logo-light.png"
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"
import { userLoggedOut } from "../../redux/features/auth/authSlice"
import { RootState } from "../../redux/app/store"
import { FaMinus, FaPlus, FaRegUser } from "react-icons/fa6"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { handleSearchModal } from "../../redux/features/drawer/drawerSlice"
import { useState } from "react"
import { ICartItem } from "../../types"
import { MdDelete } from "react-icons/md"
import RemoveToCartButton from "../button/RemoveToCartButton"
import AddToCartButton from "../button/AddToCartButton"
import { GrDatabase } from "react-icons/gr"

export default function Navbar() {
    const dispatch = useAppDispatch()
    const location = useLocation();
    const navigate = useNavigate()
    const { device_token, user } = useAppSelector((state: RootState) => state.auth);
    const { totalProduct, carts } = useAppSelector((state: RootState) => state.cart);
    const [openCartModal, setOpenCartModal] = useState<boolean>(false)

    function handleLogout() {
        dispatch(userLoggedOut())
        localStorage.clear()
        navigate("/")
    }

    function openSearchModal() {
        dispatch(handleSearchModal(true))
    }

    return (
        <>
            <nav className="bg-black/90 backdrop-blur-xl sticky top-0 z-20">
                <div className="container">
                    <div className="navbar py-3">
                        <div className="navbar-start">
                            <Link to="/">
                                <img className="w-48" src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="navbar-end">
                            {location.pathname === "/" && <button onClick={openSearchModal}>
                                <label role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator bg-white p-2 rounded-full text-black">
                                        <IoSearchOutline />
                                    </div>
                                </label>
                            </button>}
                            <button>
                                <label onClick={() => setOpenCartModal(true)} aria-label="Open Cart Drawer" role="button" className="btn btn-ghost btn-circle mr-3">
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
                                    <li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </li>
                                </ul>
                            </div> : <Link to="/login" className="btn bg-brand-600 hover:bg-brand-700 text-white border-brand-400">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav>


            <input type="checkbox" checked={openCartModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <button onClick={() => setOpenCartModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <div>
                        <h3 className="font-bold text-2xl">Cart</h3>

                        <div className="overflow-x-auto mt-5">
                            <table className="table">
                                {/* head */}
                                <thead className="md:text-base">
                                    <tr>
                                        <th>Qty</th>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carts?.length > 0 ? carts?.map((cart: ICartItem) =>
                                            <tr key={cart.id}>
                                                <th>{cart.quantity}x</th>
                                                <td>
                                                    <span className="md:text-base font-semibold">{cart.name}</span>
                                                    <p className="flex gap-2 mt-2">
                                                        <RemoveToCartButton removeItem={cart} removeType="quantity">
                                                            <button className="btn btn-sm">
                                                                <FaMinus />
                                                            </button>
                                                        </RemoveToCartButton>

                                                        <AddToCartButton cartItem={cart}>
                                                            <button className="btn btn-sm">
                                                                <FaPlus />
                                                            </button>
                                                        </AddToCartButton>
                                                    </p>
                                                </td>
                                                <td>${cart.price}</td>
                                                <td>
                                                    <RemoveToCartButton removeItem={cart} removeType="item">
                                                        <button className="p-3 text-red-600 mt-1">
                                                            <MdDelete className="text-xl" />
                                                        </button>
                                                    </RemoveToCartButton>
                                                </td>
                                            </tr>) :
                                            <tr>
                                                <td className="text-center" colSpan={4}>
                                                    <span>Cart is empty</span>
                                                    <GrDatabase className="mx-auto text-2xl mt-4 text-stone-400" />
                                                </td>
                                            </tr>
                                    }

                                </tbody>
                            </table>
                        </div>
                        <Link to="/checkout" className="btn hover:bg-brand-500 bg-brand-600 text-base-100 w-full mt-5">Proceed To Checkout</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
