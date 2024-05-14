import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { filterProducts, sortProductsByPrice } from "../redux/features/product/productSlice";
import { RootState } from "../redux/app/store";

export default function FilterAction() {
    const dispatch = useAppDispatch()
    const { productType, productSort } = useAppSelector((state: RootState) => state.product)

    function sortProduct() {
        if (productSort === "asc") {
            dispatch(sortProductsByPrice("desc"))
        } else {
            dispatch(sortProductsByPrice("asc"))
        }
    }

    return (
        <div className="py-5 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            <div className="container flex justify-between items-center ">
                <h3 className="text-2xl font-bold">Category</h3>
                <div className="flex gap-3">
                    <button onClick={() => dispatch(filterProducts(""))} className={`btn hover:bg-brand-500 btn-sm ${productType === "" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                        All
                    </button>
                    <button onClick={() => dispatch(filterProducts("non_veg"))} className={`btn hover:bg-brand-500 btn-sm ${productType === "non_veg" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                        Non Veg
                    </button>
                    <button onClick={() => dispatch(filterProducts("veg"))} className={`btn hover:bg-brand-500 btn-sm ${productType === "veg" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                        Veg
                    </button>
                    <button onClick={() => dispatch(filterProducts("drinks"))} className={`btn hover:bg-brand-500 btn-sm ${productType === "drinks" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                        Drinks
                    </button>
                    <button onClick={sortProduct} className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                        Price
                        {
                            productSort === "asc" ? <HiMiniBarsArrowDown className="text-lg" /> :
                                <HiMiniBarsArrowUp className="text-lg" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
