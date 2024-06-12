import { ReactNode } from "react"
import { useAppDispatch } from "../redux/app/hooks"
import { removeItemFromCart, removeToCart } from "../redux/features/cart/cartSlice"
import { ICartItem, IProduct } from "../types"
import { toast } from "sonner"

interface RemoveToCartButtonProps {
    product: IProduct,
    children: ReactNode,
    type?: "quantity" | "product"
}

export default function RemoveToCartButton({ product, children, type = "quantity" }: RemoveToCartButtonProps) {
    const dispatch = useAppDispatch()

    function handleRemoveToCart(product: IProduct) {
        const { id, description, name, price, product_type } = product || {}

        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity: 1, type: product_type,
            variations: "Testing variations",
            variant: "Testing variant",
        }

        if (type === "quantity") {
            dispatch(removeToCart(obj))
        } else {
            dispatch(removeItemFromCart(obj))
        }

        toast.error("Item removed successfully")
    }

    return (
        <div onClick={() => handleRemoveToCart(product)}>
            {children}
        </div>
    )
}
