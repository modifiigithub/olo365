import { useState } from "react"
import { ITable } from "../types"

interface TableBookCardProps {
    table: ITable
}

export default function TableBookCard({ table }: TableBookCardProps) {
    const [openModal, setOpenModal] = useState(false)
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

                    <form className="py-3">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Booking date</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Start time</span>
                            </div>
                            <input type="time" placeholder="Type here" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">End time</span>
                            </div>
                            <input type="time" placeholder="Type here" className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">People count</span>
                            </div>
                            <input type="number" placeholder="Type people count" className="input input-bordered w-full" />
                        </label>
                        <div className="modal-action">
                            <button className="btn text-white rounded-full text-base bg-brand-600 hover:bg-brand-500">Book Table</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
