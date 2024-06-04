import { useEffect, useState } from "react"
import { ITable } from "../types"
import { useForm, SubmitHandler } from "react-hook-form"
import { useBookTableMutation } from "../redux/features/common/commonApi"
import { useAppSelector } from "../redux/app/hooks"
import { RootState } from "../redux/app/store"
import { toast } from "sonner"

type Inputs = {
    booking_date: string
    start_time: string
    end_time: string
    people_count: string
}

interface TableBookCardProps {
    table: ITable
}

export default function TableBookCard({ table }: TableBookCardProps) {
    const [openModal, setOpenModal] = useState(false)
    const { user } = useAppSelector((state: RootState) => state.auth)
    const [bookTable, { isSuccess, isLoading, isError }] = useBookTableMutation()
    const {
        register,
        handleSubmit
    } = useForm<Inputs>()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Table book successful")
        }
    }, [isSuccess])

    useEffect(() => {
        if (isError) {
            toast.error("Table book failed")
        }
    }, [isError])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (user?.id) {
            bookTable({
                customer_id: user?.id,
                table_id: table?.id,
                ...data
            })
        }
    }

    return (
        <>
            <div key={table?.id} className="relative col-span-12 md:col-span-3 border border-stone-300 p-4 rounded-xl bg-white">
                {table?.is_active ? <div className="absolute top-3 right-3 badge bg-[#327df2] text-white">
                    Available
                </div> : <div className="absolute top-3 right-3 badge bg-red-500 text-white">
                    Not Available
                </div>
                }
                <p className="my-2 text-xl mt-3"><b> Table Id:</b> {table?.id}</p>
                <p className="text-base"><b>Capacity:</b> {table?.capacity}</p>

                <button onClick={() => setOpenModal(true)} className="btn btn-sm text-white rounded-full text-base bg-brand-600 hover:bg-brand-500 mt-3">Book Now</button>
            </div>

            <input checked={openModal} type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <button onClick={() => setOpenModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Book a table ({table?.id})</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="py-3">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Booking date</span>
                            </div>
                            <input {...register("booking_date", { required: true })} type="date" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Start time</span>
                            </div>
                            <input {...register("start_time", { required: true })} type="time" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">End time</span>
                            </div>
                            <input {...register("end_time", { required: true })} type="time" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">People count</span>
                            </div>
                            <input {...register("people_count", { required: true })} type="number" placeholder="Type people count" className="input input-bordered w-full" />
                        </label>
                        <div className="modal-action">
                            <button disabled={isLoading} className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500">
                                {
                                    isLoading ? <span className="loading loading-bars loading-sm"></span> : " Book Table"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
