import { ReactNode } from "react"
import { useAppDispatch } from "../redux/app/hooks"
import { addToCart } from "../redux/features/cart/cartSlice"
import { ICartItem, IProduct } from "../types"
import { toast } from "sonner"

interface AddToCartButtonProps {
    product: IProduct,
    children: ReactNode
}

export default function AddToCartButton({ product, children }: AddToCartButtonProps) {
    const dispatch = useAppDispatch()

    function handleAddToCart(product: IProduct) {
        const { id, description, name, price, product_type } = product || {}

        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity: 1, type: product_type
        }

        dispatch(addToCart(obj))
        toast.success("Product add to cart success.")
    }

    return (
        <div onClick={() => handleAddToCart(product)}>
            {children}
        </div>
    )
}
