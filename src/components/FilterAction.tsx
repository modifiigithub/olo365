import { HiMiniBarsArrowDown, HiMiniBarsArrowUp } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { filterProducts, sortProductsByPrice } from "../redux/features/product/productSlice";
import { RootState } from "../redux/app/store";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { TiLeaf } from "react-icons/ti";

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
                <button onClick={() => dispatch(filterProducts(""))} className={`btn hover:bg-brand-500 ${productType === "" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                    All
                </button>
            </>
            <button onClick={() => dispatch(filterProducts("non_veg"))} className={`btn hover:bg-brand-500 ${productType === "non_veg" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                Non Veg <IoFastFoodOutline className="text-lg" />
            </button>
            <button onClick={() => dispatch(filterProducts("veg"))} className={`btn hover:bg-brand-500 ${productType === "veg" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                Veg <TiLeaf className="text-lg" />
            </button>
            <button onClick={() => dispatch(filterProducts("drinks"))} className={`btn hover:bg-brand-500 ${productType === "drinks" ? "bg-brand-600 text-base-100" : "hover:bg-brand-600 hover:text-base-100"}`}>
                Drinks <RiDrinks2Line className="text-lg" />
            </button>
            <button onClick={sortProduct} className="btn hover:bg-brand-600 hover:text-base-100">
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
    return (
        <div className="py-5 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            {/* <div className="col-span-12 md:col-span-2 flex justify-between items-center">
                    <h3 className="text-[28px] font-bold">Category</h3>
                    <button className="btn block md:hidden" onClick={handleOpenCategory}>
                        <FaBars />
                    </button>
                </div> */}
            <div className="col-span-12 lg:col-span-10 w-full flex flex-col lg:flex-row justify-between lg:items-center">

                <ActionButtonGroup className="hidden lg:flex gap-3" />

                <ActionButtonGroup className="lg:hidden flex flex-col gap-3 mt-3" />
            </div>
        </div>
    )
}
