import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useGetTablesQuery } from "../../redux/features/common/commonApi"
import { ITable } from "../../types";

export default function PlaceOrder() {
    const { totalPrice, totalProduct } = useAppSelector((state: RootState) => state.cart);
    const { data: tables, isLoading: isLoadingTables, isSuccess: isSuccessTables } = useGetTablesQuery(undefined)

    let tableOptions;

    if (isLoadingTables) {
        tableOptions = <span className="loading loading-dots loading-sm"></span>
    } else if (isSuccessTables && tables?.data?.length > 0) {
        tableOptions = tables?.data?.map((table: ITable) => <option key={table.id}>Table ID: {table.id}</option>)
    } else {
        tableOptions = <p>Something was wrong.</p>
    }

    return (
        <div className="container h-screen">
            <h3 className="text-2xl font-bold mt-5">Place Order</h3>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-8">
                    <form className="mt-4">
                        <div className=" grid grid-cols-12 gap-6">
                            <label className="form-control col-span-4">
                                <div className="label">
                                    <span className="label-text">Pick the table ID</span>
                                </div>
                                <select className="select select-bordered">
                                    {tableOptions}
                                </select>
                            </label>

                            {/* <label className="form-control col-span-3">
                                <div className="label">
                                    <span className="label-text">Pick the branch ID</span>
                                </div>
                                <select className="select select-bordered">
                                    {branchOptions}
                                </select>
                            </label> */}

                            <label className="form-control col-span-4">
                                <div className="label">
                                    <span className="label-text">Number of People</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-3">
                                <div className="label">
                                    <span className="label-text">Gst Amount</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-12">
                                <div className="label">
                                    <span className="label-text">Order note</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24" placeholder="Order note" />
                            </label>
                        </div>

                        <h3 className="text-2xl font-semibold mt-5">Delivery address</h3>
                        <div className="grid grid-cols-12 gap-6">

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">Contact person name</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">Contact person number</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">order_amount</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">payment_method</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label>

                        </div>

                        <div>
                            <button type="submit" className="btn text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                                Checkout
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <div className="border border-stone-200 p-3 rounded-lg">
                        <h3 className="text-xl font-bold">Order summary</h3>
                        <div className="flex justify-between mt-5">
                            <h3 className="text-lg font-semibold">Total Product:</h3>
                            <p className="font-semibold">{totalProduct}</p>
                        </div>
                        <div className="flex justify-between mt-5">
                            <h3 className="text-lg font-semibold">Total Price:</h3>
                            <p className="bold">${totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
