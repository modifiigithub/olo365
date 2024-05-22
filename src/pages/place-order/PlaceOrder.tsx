import { useGetTablesQuery } from "../../redux/features/common/commonApi"
import { Table } from "../../types";

export default function PlaceOrder() {
    const { data: tables, isLoading: isLoadingTables, isSuccess: isSuccessTables } = useGetTablesQuery(undefined)

    let tableOptions;

    if (isLoadingTables) {
        tableOptions = <span className="loading loading-dots loading-sm"></span>
    } else if (isSuccessTables && tables?.data?.length > 0) {
        tableOptions = tables?.data?.map((table: Table) => <option key={table.id}>Table ID: {table.id}</option>)
    } else {
        tableOptions = <p>Something was wrong.</p>
    }

    let branchOptions;

    if (isLoadingTables) {
        branchOptions = <span className="loading loading-dots loading-sm"></span>
    } else if (isSuccessTables && tables?.data?.length > 0) {
        branchOptions = tables?.data?.map((table: Table) => <option>Branch ID: {table.branch_id}</option>)
    } else {
        branchOptions = <p>Something was wrong.</p>
    }

    return (
        <div className="container h-screen">
            <h3 className="text-xl font-bold mt-4">Place Order</h3>

            <form className="mt-4">
                <div className=" grid grid-cols-12 gap-6">
                    <label className="form-control col-span-3">
                        <div className="label">
                            <span className="label-text">Pick the table ID</span>
                        </div>
                        <select className="select select-bordered">
                            {tableOptions}
                        </select>
                    </label>

                    <label className="form-control col-span-3">
                        <div className="label">
                            <span className="label-text">Pick the branch ID</span>
                        </div>
                        <select className="select select-bordered">
                            {branchOptions}
                        </select>
                    </label>

                    <label className="form-control col-span-3">
                        <div className="label">
                            <span className="label-text">Number of People</span>
                        </div>
                        <input type="text" placeholder="Type number of people" className="input input-bordered" />
                    </label>

                    <label className="form-control col-span-3">
                        <div className="label">
                            <span className="label-text">Order note</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Order note"></textarea>
                    </label>
                </div>

                <div>
                    <button type="submit" className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500 mt-5">
                        Checkout
                    </button>
                </div>
            </form>
        </div>
    )
}
