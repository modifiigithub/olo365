import { ReactNode } from "react"
import { useAppDispatch } from "../redux/app/hooks"
import { addToCart } from "../redux/features/cart/cartSlice"
import { ICartItem, IProduct } from "../types"
import { toast } from "sonner"

interface AddToCartButtonProps {
    product: IProduct,
    children: ReactNode;
    className?: string;
}

export default function AddToCartButton({ product, children, className }: AddToCartButtonProps) {
    const dispatch = useAppDispatch()

    function handleAddToCart(product: IProduct) {
        const { id, description, name, price, product_type } = product || {}

        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity: 1, type: product_type
        }

        dispatch(addToCart(obj))
        toast.success("Item added successfully")
    }

    return (
        <div className={className ? className : ""} onClick={() => handleAddToCart(product)}>
            {children}
        </div>
    )
}
