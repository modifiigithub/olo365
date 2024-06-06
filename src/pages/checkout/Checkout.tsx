import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useEffect } from "react";
import { handleSideDrawer, setDrawerType } from "../../redux/features/drawer/drawerSlice";

export default function Checkout() {
    const dispatch = useAppDispatch()
    const { carts, totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);
    const { user } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(handleSideDrawer(false))
    }, [dispatch])

    let content;

    if (carts.length > 0) {
        content = carts.map(cart => <CartItem key={cart.id} image="md" size="large" cart={cart} />)
    } else {
        content = <p>Cart is empty</p>
    }

    function openAddAddressDrawer() {
        dispatch(handleSideDrawer(true))
        dispatch(setDrawerType("address"))
    }

    return (
        <section className="container py-6 min-h-[82vh]">
            <h3 className="text-2xl font-bold mb-4">Checkout</h3>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-8">
                    <div className="bg-base-200 p-4 rounded-lg h-auto">
                        <h2 className="font-bold text-lg mb-3">User Information: </h2>
                        <h2><b>Name: </b>{user && user.name}</h2>
                        <p className="mt-2"><b>Email: </b> {user?.email}</p>
                    </div>

                    <div className="bg-base-200 p-4 rounded-lg h-auto mt-5">
                        <h2 className="font-bold text-lg">Add a delivery address:</h2>
                        <p className="mt-1 font-semibold text-stone-500">You seem to be in the new location</p>
                        <button onClick={openAddAddressDrawer} className="btn btn-sm text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                            Add New
                        </button>
                    </div>

                    <div className="bg-base-200 p-4 rounded-lg h-auto mt-5">
                        <h2 className="font-bold text-lg">Payment</h2>
                    </div>
                    <div>
                        <Link to="/place-order" className="btn text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">Place Order</Link>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4">
                    <div className="bg-base-200 rounded-lg max-h-[70vh] overflow-y-scroll">
                        <h3 className="pl-6 pt-6 text-2xl font-bold">Cart Items:</h3>

                        <div className="pl-6">
                            {content}
                        </div>

                        <div className="border-b border-stone-200 py-3 px-6">
                            <h3 className="text-xl font-bold">Order summary</h3>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Product:</h3>
                                <p className="font-bold">{totalProduct}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Price:</h3>
                                <p className="font-bold">${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
