import { useEffect, useState } from "react"
import { useBookTableMutation, useGetTablesQuery } from "../redux/features/common/commonApi"
import { ITable } from "../types"
import { RootState } from "../redux/app/store"
import { useGetProfileInfoQuery } from "../redux/features/auth/authApi"
import { useAppSelector } from "../redux/app/hooks"
import { toast } from "sonner"
import Loader from "./Loader"

export default function TableBookSection() {
    const { device_token } = useAppSelector((state: RootState) => state.auth)
    const { data: tables, isLoading, isSuccess } = useGetTablesQuery(undefined)
    const { data: profile } = useGetProfileInfoQuery({
        headers: {
            "authorization": "Bearer " + device_token
        }
    }, {
        skip: device_token ? false : true
    })
    const [bookNewTable, { isSuccess: isSuccessBookNewTable, isLoading: isLoadingBookNewTable, isError: isErrorBookNewTable }] = useBookTableMutation()

    const [bookTableDate, setBookTableDate] = useState<string | null>(null)
    const [bookTableStartTime, setBookTableStartTime] = useState<string | null>(null)
    const [bookTableEndTime, setBookTableEndTime] = useState<string | null>(null)
    const [peopleCount, setPeopleCount] = useState<number>(0)
    const [tableId, setTableId] = useState<number>(0)

    useEffect(() => {
        if (isSuccessBookNewTable) {
            toast.success("Table book successful")
        }
    }, [isSuccessBookNewTable])

    useEffect(() => {
        if (isErrorBookNewTable) {
            toast.error("Table book failed")
        }
    }, [isErrorBookNewTable])

    function handleBookTable(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (tableId && profile?.data?.id && bookTableDate && bookTableStartTime && bookTableEndTime && peopleCount) {
            const obj = {
                table_id: tableId,
                customer_id: profile?.data?.id,
                booking_date: bookTableDate,
                start_time: bookTableStartTime,
                end_time: bookTableEndTime,
                people_count: peopleCount
            }

            bookNewTable(obj)
        } else {
            toast.error("Field required.")
        }
    }

    let content;

    if (isLoading) {
        content = <option>Loading...</option>
    } else if (isSuccess && tables?.data?.length > 0) {
        content = tables?.data?.map((table: ITable) => <option key={table?.id} value={table?.id}>Table {table?.id}</option>)
    } else if (isSuccess && tables?.data?.length === 0) {
        content = <option>No table found</option>
    } else {
        content = <option>Something was wrong.</option>
    }

    return (
        <div className="mt-5 pb-10">
            <>
                {(bookTableDate == null || bookTableStartTime == null || bookTableEndTime == null) &&
                    <div className="w-full">
                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Select Your Booking Date</span>
                            </div>
                            <input onChange={e => setBookTableDate(e.target.value)} type="date" placeholder="Type here" className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Select Your Start Time</span>
                            </div>
                            <input onChange={e => setBookTableStartTime(e.target.value)} type="time" placeholder="Type here" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full mb-3">
                            <div className="label">
                                <span className="label-text">Select Your End Time</span>
                            </div>
                            <input onChange={e => setBookTableEndTime(e.target.value)} type="time" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                }

                {(bookTableDate != null && bookTableStartTime != null && bookTableEndTime != null) &&
                    <div className="w-full">
                        <div className="flex justify-center items-center gap-3">
                            <p className="bg-base-300 p-2 border border-stone-400 rounded-lg">{bookTableDate}</p>
                            <p className="bg-base-300 p-2 border border-stone-400 rounded-lg">{bookTableStartTime}</p>
                            <p className="bg-base-300 p-2 border border-stone-400 rounded-lg">{bookTableEndTime}</p>
                        </div>
                        <form onSubmit={handleBookTable} className="mt-5 w-full flex flex-col gap-6">
                            <label className="form-control w-full mb-3">
                                <div className="label">
                                    <span className="label-text">Select Your End Time</span>
                                </div>
                                <select onChange={(e) => setTableId(Number(e.target.value))} className="select select-bordered w-full">
                                    {content}
                                </select>
                            </label>

                            <input onChange={e => setPeopleCount(Number(e.target.value))} name="people_count" type="number" placeholder="Number of people" className="input input-bordered w-full" />

                            <button disabled={isLoadingBookNewTable} type="submit" className="btn border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">
                                {
                                    isLoadingBookNewTable ? <Loader /> : "Submit Booking Request"
                                }
                            </button>
                        </form>
                    </div>
                }
            </>
        </div>
    )
}