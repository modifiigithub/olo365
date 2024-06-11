import { IoIosSearch } from "react-icons/io"
import { useAppDispatch } from "../redux/app/hooks"
import { searchProducts } from "../redux/features/product/productSlice"

export default function ItemSearchInput() {
    const dispatch = useAppDispatch()

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchProducts(e.target.value))
    }
    return (
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" onChange={e => handleOnChange(e)} className="grow" placeholder="Search" />
            <IoIosSearch />
        </label>
    )
}
