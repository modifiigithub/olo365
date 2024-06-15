import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { ICartItem, IProduct } from "../types";
import AddToCartButton from "./button/AddToCartButton";
import { useState } from "react";
import { TiMinus } from "react-icons/ti";

export default function ItemCard({ product }: { product: IProduct }) {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [itemQuantity, setItemQuantity] = useState(1)
    const { id, description, name, price, product_type } = product

    const cartItem: ICartItem = {
        id: id.toString(),
        description,
        name,
        price,
        quantity: itemQuantity,
        type: product_type,
        variant: "",
        variations: "",
    }

    function handleIncreaseQuantity() {
        setItemQuantity(prev => prev + 1)
    }

    function handleDecreaseQuantity() {
        setItemQuantity(prev => {
            if (prev - 1 > 0) {
                return prev - 1
            } else {
                return prev;
            }
        })
    }

    return (
        <>
            {/* add to cart modal start */}
            <input type="checkbox" checked={openModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <div className="card-body p-0">
                        <div className="flex justify-between items-center my-2">
                            <div>
                                <h2 className="card-title font-bold text-xl md:text-2xl">{product.name}</h2>
                                <p className="line-clamp-2 text-stone-600 text-base mb-2">{product.description}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-xl font-bold">${product.price}</p>
                            </div>
                        </div>

                        <div className="w-ful">
                            <input type="text" placeholder="Special instructions..." className="input input-bordered w-full font-semibold" />
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex justify-between">
                                <div className="flex mt-2">
                                    <>
                                        <button onClick={handleDecreaseQuantity} className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                            <TiMinus />
                                        </button>
                                    </>

                                    <input type="text" placeholder="" value={itemQuantity} readOnly className="input input-sm input-bordered w-12 text-center font-semibold text-xl" />

                                    <>
                                        <button onClick={handleIncreaseQuantity} className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                            <FaPlus />
                                        </button>
                                    </>
                                </div>
                            </div>

                            <div className="card-actions justify-end">
                                <AddToCartButton quantity={itemQuantity} className="" cartItem={cartItem}>
                                    <button onClick={() => setOpenModal(false)} className="btn btn-md md:btn-sm lg:btn-md text-white text-base bg-brand-600 hover:bg-brand-500">
                                        <FaCartPlus />
                                        Add To Cart
                                    </button>
                                </AddToCartButton>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* add to cart modal end */}

            <div className="col-span-12 md:col-span-6 lg:col-span-4 card card-compact bg-base-100 p-2 shadow-md border border-stone-200 overflow-hidden">
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl md:text-2xl">{product.name}</h2>
                    <p className="line-clamp-2 text-stone-600 text-base mb-2">{product.description}</p>
                    <div className="flex items-center">
                        <p className="text-xl font-bold">${product.price}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => setOpenModal(true)} className="btn btn-md md:btn-sm lg:btn-md text-white text-base bg-brand-600 hover:bg-brand-500">
                                <FaCartPlus />
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
