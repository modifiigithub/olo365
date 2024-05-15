import { FaCartPlus } from "react-icons/fa6";
import { ICartItem, IProduct } from "../types";
import { useAppDispatch } from "../redux/app/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";

export default function ProductCard({ product }: { product: IProduct }) {
    const dispatch = useAppDispatch()

    function handleAddToCart(product: IProduct) {
        const { id, description, name, price, product_type } = product

        const obj: ICartItem = {
            id: id.toString(),
            description, name, price, quantity: 1, type: product_type
        }

        dispatch(addToCart(obj))
    }

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
                        <button onClick={() => handleAddToCart(product)} className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500">
                            <FaCartPlus />
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
