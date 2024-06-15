import { ReactNode } from "react"
import { useAppDispatch } from "../../redux/app/hooks"
import { addToCart } from "../../redux/features/cart/cartSlice"
import { ICartItem } from "../../types"
import { toast } from "sonner"

interface AddToCartButtonProps {
    cartItem: ICartItem,
    children: ReactNode;
    className?: string;
    quantity?: number;
}

export default function AddToCartButton({ cartItem, children, className, quantity = 1 }: AddToCartButtonProps) {
    const dispatch = useAppDispatch()
    const { id, description, name, price, type } = cartItem || {}

    function handleAddToCart() {
        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity,
            type,
            variations: "Testing variations",
            variant: "Testing variant",
        }

        dispatch(addToCart(obj))
        toast.success("Item added successfully")
    }

    return (
        <div className={className ? className : ""} onClick={handleAddToCart}>
            {children}
        </div>
    )
}
