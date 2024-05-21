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
                <label className="form-control w-full max-w-xs mb-3">
                    <div className="label">
                        <span className="label-text">Pick the table ID</span>
                    </div>
                    <select className="select select-bordered">
                        {tableOptions}
                    </select>
                </label>

                <label className="form-control w-full max-w-xs mb-3">
                    <div className="label">
                        <span className="label-text">Pick the branch ID</span>
                    </div>
                    <select className="select select-bordered">
                        {branchOptions}
                    </select>
                </label>
            </form>
        </div>
    )
}
