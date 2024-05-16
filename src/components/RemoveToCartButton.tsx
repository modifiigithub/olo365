import { ReactNode } from "react"
import { useAppDispatch } from "../redux/app/hooks"
import { removeToCart } from "../redux/features/cart/cartSlice"
import { ICartItem, IProduct } from "../types"

interface RemoveToCartButtonProps {
    product: IProduct,
    children: ReactNode
}

export default function RemoveToCartButton({ product, children }: RemoveToCartButtonProps) {
    const dispatch = useAppDispatch()

    function handleRemoveToCart(product: IProduct) {
        const { id, description, name, price, product_type } = product || {}

        const obj: ICartItem = {
            id: id?.toString(),
            description, name, price, quantity: 1, type: product_type
        }

        dispatch(removeToCart(obj))
    }

    return (
        <div onClick={() => handleRemoveToCart(product)}>
            {children}
        </div>
    )
}
