import { FaCartPlus } from "react-icons/fa6";
import { IProduct } from "../types";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product }: { product: IProduct }) {

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 card card-compact bg-base-100 p-2 shadow-md border border-stone-200 overflow-hidden">
            {/* <div className="h-52 w-full overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover transition rounded-lg hover:scale-110" src={product.image} alt={product.name} />
            </div> */}
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{product.name}</h2>
                <p className="line-clamp-2 text-stone-600 text-base mb-2">{product.description}</p>
                <div className="flex items-center">
                    <p className="text-xl font-bold">${product.price}</p>
                    <div className="card-actions justify-end">
                        <AddToCartButton product={product}>
                            <button className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500">
                                <FaCartPlus />
                                Add To Cart
                            </button>
                        </AddToCartButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
