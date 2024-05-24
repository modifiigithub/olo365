import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { filterProducts, sortProductsByPrice } from "../redux/features/product/productSlice";
import { RootState } from "../redux/app/store";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

function ActionButtonGroup() {
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
        <>
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
        </>
    )
}

export default function FilterAction() {
    return (
        <div className="py-5 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            <div className="container grid grid-cols-12 justify- items-center gap-6 flex-col md:flex-row">
                <div className="col-span-12 md:col-span-2">
                    <h3 className="text-2xl font-bold">Category</h3>
                </div>
                <div className="col-span-12 md:col-span-10 w-full flex justify-start lg:justify-between items-center">
                    <div className="hidden lg:flex gap-3">
                        <ActionButtonGroup />
                    </div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <IoIosSearch />
                    </label>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><FaBarsStaggered /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <ActionButtonGroup />
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
