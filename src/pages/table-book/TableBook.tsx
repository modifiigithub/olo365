import SkeletonProductCard from "../../components/SkeletonProductCard";
import TableBookCard from "../../components/TableBookCard"
import { useGetTablesQuery } from "../../redux/features/common/commonApi"
import { ITable } from "../../types"

export default function TableBook() {
    const { data: tables, isLoading, isSuccess } = useGetTablesQuery(undefined)

    let content;

    if (isLoading) {
        content = (
            <>
                {[...Array(9)].map((_, index) => (
                    <SkeletonProductCard key={index} className="col-span-4" />
                ))}
            </>
        );
    } else if (isSuccess && tables?.data?.length > 0) {
        content = tables?.data?.map((table: ITable) => <TableBookCard key={table.id} table={table} />)
    } else if (isSuccess && tables?.data?.length === 0) {
        content = <p>No table found</p>
    } else {
        content = <p>Something was wrong.</p>
    }

    return (
        <section className="container min-h-[80vh]">
            <div>
                <h2 className="text-4xl font-semibold text-center mt-10">Reserve your perfect table</h2>
                <div className="mt-12 flex justify-center items-center gap-4">
                    <div>
                        <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option value="2000-02-01T21:30:00">9:30 p.m.</option>
                            <option value="2000-02-01T22:00:00">10:00 p.m.</option>
                            <option value="2000-02-01T22:30:00">10:30 p.m.</option>
                            <option value="2000-02-01T23:00:00">11:00 p.m.</option>
                            <option value="2000-02-01T23:30:00">11:30 p.m.</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-full">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                            <option value="11">11 people</option>
                            <option value="12">12 people</option>
                            <option value="13">13 people</option>
                            <option value="14">14 people</option>
                            <option value="15">15 people</option>
                            <option value="16">16 people</option>
                            <option value="17">17 people</option>
                            <option value="18">18 people</option>
                            <option value="19">19 people</option>
                            <option value="20">20 people</option>
                            <option value="21">Larger party</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn text-white rounded-lg text-base bg-brand-600 hover:bg-brand-500">
                            Let's go
                        </button>
                    </div>
                </div>
                <div className="my-10">
                    <h3 className="text-2xl font-semibold">Book for dinner tonight</h3>
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="grid grid-cols-12 gap-6">
                            {content}
                        </div>

                        

                    </div>
                </div>
            </div>
        </section>
    )
}
