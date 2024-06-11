import { FaCartPlus, FaPlus } from "react-icons/fa6";
import { IProduct } from "../types";
import AddToCartButton from "./AddToCartButton";
import { useAppDispatch } from "../redux/app/hooks";
import { handleBottomCartDrawer } from "../redux/features/drawer/drawerSlice";
import { useState } from "react";
import { TiMinus } from "react-icons/ti";
import RemoveToCartButton from "./RemoveToCartButton";

export default function ProductCard({ product }: { product: IProduct }) {
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <>
            <input type="checkbox" checked={openModal} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <div className="card-body p-0">
                        <h2 className="card-title font-bold text-xl md:text-2xl">{product.name}</h2>
                        <p className="line-clamp-2 text-stone-600 text-base mb-2">{product.description}</p>
                        <div className="flex items-center">
                            <p className="text-xl font-bold">${product.price}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex justify-between">
                                <div className="flex mt-2">
                                    <RemoveToCartButton product={product}>
                                        <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                            <TiMinus />
                                        </button>
                                    </RemoveToCartButton>

                                    <input type="text" placeholder="" value={1} readOnly className="input input-sm input-bordered w-12 text-center font-semibold" />

                                    <AddToCartButton product={product}>
                                        <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                            <FaPlus />
                                        </button>
                                    </AddToCartButton>
                                </div>


                            </div>
                            <div className="card-actions justify-end">
                                <AddToCartButton className="hidden md:block" product={product}>
                                    <button className="btn btn-md md:btn-sm lg:btn-md text-white text-base bg-brand-600 hover:bg-brand-500">
                                        <FaCartPlus />
                                        Add To Cart
                                    </button>
                                </AddToCartButton>
                                <div className="block md:hidden">
                                    <button onClick={() => dispatch(handleBottomCartDrawer(true))} className="btn btn-md md:btn-sm lg:btn-md text-white text-base bg-brand-600 hover:bg-brand-500">
                                        <FaCartPlus />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
