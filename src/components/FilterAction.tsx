import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { filterProducts, searchProducts, sortProductsByPrice } from "../redux/features/product/productSlice";
import { RootState } from "../redux/app/store";
import { IoIosSearch } from "react-icons/io";

function ActionButtonGroup({ className }: {
    className?: string
}) {
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
        <div className={`${className ? className : ""}`}>
            <>
                <button onClick={() => dispatch(filterProducts(""))} className={`btn hover:bg-brand-500 btn-sm ${productType === "" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                    All
                </button>
            </>
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
    )
}

export default function FilterAction() {
    const dispatch = useAppDispatch()

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(searchProducts(e.target.value))
    }

    return (
        <div className="py-5 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            <div className="container grid grid-cols-12 justify- items-center gap-6 flex-col md:flex-row">
                <div className="col-span-12 md:col-span-2">
                    <h3 className="text-2xl font-bold">Category</h3>
                </div>
                <div className="col-span-12 lg:col-span-10 w-full flex flex-col lg:flex-row justify-between lg:items-center">

                    <ActionButtonGroup className="hidden lg:flex gap-3" />

                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" onChange={e => handleOnChange(e)} className="grow" placeholder="Search" />
                        <IoIosSearch />
                    </label>
                    <ActionButtonGroup className="lg:hidden flex flex-col gap-3 mt-3" />
                </div>
            </div>

        </div>
    )
}
