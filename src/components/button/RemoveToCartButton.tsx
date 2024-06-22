import { ReactNode } from "react"
import { useAppDispatch } from "../../redux/app/hooks"
import { removeItemFromCart, removeToCart } from "../../redux/features/cart/cartSlice"
import { ICartItem } from "../../types"
import { toast } from "sonner"

interface RemoveToCartButtonProps {
    removeItem: ICartItem,
    children: ReactNode,
    removeType?: "quantity" | "item"
}

export default function RemoveToCartButton({ removeItem, children, removeType = "quantity" }: RemoveToCartButtonProps) {
    const dispatch = useAppDispatch()

    function handleRemoveToCart(item: ICartItem) {
        const { id, description, name, price, type , kitchen_note } = item || {}

        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity: 1,
            type,
            variations: "Testing variations",
            kitchen_note
        }

        if (removeType === "quantity") {
            dispatch(removeToCart(obj))
        } else {
            dispatch(removeItemFromCart(obj))
        }

        toast.error("Item removed successfully")
    }

    return (
        <div onClick={() => handleRemoveToCart(removeItem)}>
            {children}
        </div>
    )
}
