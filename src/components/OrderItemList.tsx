import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { ICartItem } from "../types";
import { MdDelete } from "react-icons/md";
import RemoveToCartButton from "./button/RemoveToCartButton";

export default function OrderItemList() {
    const { carts, totalPrice } = useAppSelector((state: RootState) => state.cart);

    return (
        <>
            <h2 className="text-xl mb-4 mt-8 font-bold">Your Order</h2>

            <div className="h-[50vh] md:h-[60vh] overflow-y-scroll pr-3">
                {
                    carts?.length > 0 ? carts?.map((item: ICartItem, index) => <div key={item.id} className="my-5">
                        <div className="flex gap-4">
                            <p className="text-lg font-semibold">{index + 1}.</p>

                            <div className="flex justify-between w-full">
                                <div>
                                    <h2 className="text-xl font-semibold">{item.name} ({item.quantity})</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className="font-semibold">
                                    <p>${item.price}</p>
                                    <RemoveToCartButton removeItem={item} removeType="item">
                                        <button className="p-3 text-red-600 mt-1">
                                            <MdDelete className="text-xl" />
                                        </button>
                                    </RemoveToCartButton>
                                </div>
                            </div>
                        </div>
                    </div>) : <div className="w-full h-full flex justify-center items-center">
                        <p>No item here.</p>
                    </div>
                }
            </div>

            <div className="border-t border-stone-300 pt-3">
                <div className="flex justify-between font-semibold text-lg py-2">
                    <h2 className="">Subtotal</h2>
                    <p className="">${totalPrice}</p>
                </div>

                <Link to="/checkout">
                    <button className="w-full mt-4 btn border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">Checkout</button>
                </Link>
            </div>
        </>
    )
}
