import { CiFilter } from "react-icons/ci";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

export default function FilterAction() {
    return (
        <div className="flex justify-between items-center py-3 border-b">
            <h3 className="text-xl font-semibold">Category</h3>
            <div className="flex gap-3">
                <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                    Veg
                </button>
                <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                    Price
                    <HiMiniBarsArrowDown className="text-lg" />
                    {/* <HiMiniBarsArrowUp /> */}
                </button>
                <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                    Filter
                    <CiFilter className="text-lg" />
                </button>
            </div>
        </div>
    )
}
