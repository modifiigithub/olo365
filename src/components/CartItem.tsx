import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { ICartItem } from "../types";
import AddToCartButton from "./button/AddToCartButton";
import { useGetProductByIdQuery } from "../redux/features/product/productsApi";
import RemoveToCartButton from "./button/RemoveToCartButton";

interface CartItemProps {
    image?: "md" | "lg"
    size: "small" | "large"
    cart: ICartItem
}

export default function CartItem({ size = "small", cart }: CartItemProps) {
    const { quantity, name, description, id, price } = cart
    const { isSuccess, data } = useGetProductByIdQuery(id, {
        skip: id ? false : true
    })

    return (
        <div className="grid grid-cols-12 gap-4 justify-start py-4 border-b border-stone-200">
            <div className="col-span-11">
                <div className="w-full flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className={`text-lg font-medium ${size == "large" ? "line-clamp-2 pr-3" : "line-clamp-1"}`}>
                            {description}
                        </p>
                    </div>
                    <p className="text-lg font-bold mt-2">${(quantity * price).toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex mt-2">
                        {isSuccess && data?.data && <RemoveToCartButton removeItem={cart} >
                            <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                <TiMinus />
                            </button>
                        </RemoveToCartButton>}
                        
                        <input type="text" placeholder="" value={quantity} readOnly className="input input-sm input-bordered w-12 text-center font-semibold" />
                        
                        {isSuccess && data?.data && <AddToCartButton cartItem={cart}>
                            <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                <FaPlus />
                            </button>
                        </AddToCartButton>}
                    </div>

                    <div className="flex justify-start items-center gap-1 mt-2">
                        <RemoveToCartButton removeItem={cart} removeType="item">
                            <button className="p-2 hover:bg-brand-200 rounded-full">
                                <RiDeleteBin6Line className="text-lg cursor-pointer text-red-500" />
                            </button>
                        </RemoveToCartButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
