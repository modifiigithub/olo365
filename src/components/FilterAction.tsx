
import { HiMiniBarsArrowDown } from "react-icons/hi2";

export default function FilterAction() {
    return (
        <div className="py-5 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            <div className="container flex justify-between items-center ">
                <h3 className="text-3xl font-bold">Category</h3>
                <div className="flex gap-3">
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-base-100 btn-sm">
                        All
                    </button>
                    <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                        Non Veg
                    </button>
                    <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                        Veg
                    </button>
                    <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                        Price
                        <HiMiniBarsArrowDown className="text-lg" />
                        {/* <HiMiniBarsArrowUp /> */}
                    </button>
                    {/* <button className="btn hover:bg-brand-600 hover:text-base-100 btn-sm">
                    Filter
                    <CiFilter className="text-lg" />
                </button> */}
                </div>
            </div>
        </div>
    )
}
