import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useEffect, useState } from "react";
import { handleSideDrawer, setDrawerType } from "../../redux/features/drawer/drawerSlice";
import { useGetAllAddressQuery } from "../../redux/features/address/addressApi";
import { IAddress } from "../../types";

export default function Checkout() {
    const dispatch = useAppDispatch()
    const { data: address, isLoading: isLoadingFetchAddress, isSuccess: isSuccessFetchAddress } = useGetAllAddressQuery(undefined)
    const { carts, totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);
    const { user } = useAppSelector((state: RootState) => state.auth);
    const [gstAmount, setGstAmount] = useState(0)

    useEffect(() => {
        function calculateGST(totalPrice: number, gstRate: number) {
            const gstAmount = (gstRate / 100) * totalPrice;

            return Math.ceil(gstAmount)
        }

        const result = calculateGST(totalPrice, 5)
        setGstAmount(result);

    }, [totalPrice])

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

    let addressContent;

    if (isLoadingFetchAddress) {
        addressContent = <>Loading...</>
    } else if (isSuccessFetchAddress && address?.data?.length > 0) {
        addressContent = address?.data?.map((item: IAddress) => <div key={item.id} className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg">
            <h2 className="font-bold text-lg capitalize">{item.address_type}</h2>
            <p className="mt-1">{item.address}</p>
            <p><b className="text-bold">Distance:</b> {item.distance} Mins</p>
            <button className="btn btn-sm text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                Deliver Here
            </button>
        </div>)
    } else if (isSuccessFetchAddress && address?.data?.length == 0) {
        addressContent = <p>No address found</p>
    } else {
        addressContent = <p>Something was wrong.</p>
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
                        <div className="grid grid-cols-12 gap-4 mb-6">
                            {
                                addressContent
                            }
                            <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg">
                                <h2 className="font-bold text-lg">Add a delivery address:</h2>
                                <p className="mt-1 font-semibold text-stone-500">You seem to be in the new location</p>
                                <button onClick={openAddAddressDrawer} className="btn btn-sm text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                                    Add New
                                </button>
                            </div>
                        </div>
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

                        <div className="border-b border-stone-200 py-4 px-6">
                            <h3 className="text-xl font-bold">Bill Details</h3>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Item:</h3>
                                <p className="font-bold">{totalProduct}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Price:</h3>
                                <p className="font-bold">${totalPrice}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">GST Charges:</h3>
                                <p className="font-bold">${gstAmount}</p>
                            </div>

                            <div className="flex justify-between mt-5 pt-2 border-t-2">
                                <h3 className="text-lg font-semibold">To Pay:</h3>
                                <p className="font-bold">${gstAmount * totalProduct}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
