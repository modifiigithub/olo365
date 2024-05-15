import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiMinus } from "react-icons/ti";
import { ICartItem } from "../types";
import { useAppDispatch } from "../redux/app/hooks";

interface CartItemProps {
    image: "md" | "lg"
    size: "small" | "large"
    cart: ICartItem
}

function RemoveButton() {
    return (
        <div className="flex justify-start items-center gap-2 mt-2">
            <p className="text-lg text-red-500 font-medium">Remove</p>
            <button className="p-2 hover:bg-brand-100 rounded-full">
                <RiDeleteBin6Line className="text-base cursor-pointer text-red-500" />
            </button>
        </div>
    )
}

export default function CartItem({ image = "md", size = "small", cart }: CartItemProps) {
    const dispatch = useAppDispatch();
    const { quantity } = cart

    
    return (
        <div className="grid grid-cols-12 gap-4 justify-start py-4 border-b border-stone-200">
            <div className={`${image == "md" ? "col-span-2" : "col-span-4"}`}>
                <img className={`w-full ${image == "md" ? "h-full" : "h-24"} object-cover rounded-lg`} src="https://plus.unsplash.com/premium_photo-1663852297522-d01619dc3e55" alt="" />
            </div>
            <div className="col-span-8">
                <div className="w-full flex justify-between items-center">
                    <p className={`text-xl font-bold ${size == "large" ? "line-clamp-2 pr-3" : "line-clamp-1"}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, officiis.
                    </p>
                    <p className="text-lg font-bold mt-2">$125</p>
                </div>
                <div className="flex mt-2">
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                        <FaPlus />
                    </button>
                    <input type="text" placeholder="" value={quantity} readOnly className="input input-sm input-bordered w-10 text-center font-semibold" />
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                        <TiMinus />
                    </button>
                </div>
                <RemoveButton />
            </div>
        </div>
    )
}
