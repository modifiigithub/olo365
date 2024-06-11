import { useState } from "react"
import heroImage from "../assets/images/hero-bg.jpg"
import { IoMdClose } from "react-icons/io"

export default function Hero() {
    const [bookTable, setBookTable] = useState<boolean>(false)

    return (
        <>
            <div className="relative bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-stone-900/50"></div>

                <div className="text-center py-36 text-white z-10">
                    <h3 className="text-3xl md:text-5xl font-semibold">Indulge in Culinary Delights and </h3>
                    <h3 className="text-xl md:text-4xl font-semibold mt-4 md:mt-8">Unforgettable Dining Experiences</h3>

                    {/* <Link to="/table-book" className="btn btn-lg px-6 text-base border-brand-800 bg-brand-600 hover:bg-brand-500 text-white mt-12">Book a Table</Link> */}
                    <label htmlFor="book-table-modal" className="btn btn-lg px-6 text-base border-brand-800 bg-brand-600 hover:bg-brand-500 text-white mt-12">Book a Table</label>
                </div>
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="book-table-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-2xl relative">
                    <h3 className="font-bold text-3xl text-center">Choose A Service</h3>
                    <div className="flex justify-center items-center gap-2 md:gap-6 mt-8">
                        <button className="hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg">
                            Pickup
                        </button>
                        <button className="hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg">
                            Delivery
                        </button>
                        <button onClick={() => setBookTable(prev => !prev)} className="hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg">
                            Book Table
                        </button>
                    </div>

                    {bookTable && <div className="text-center mt-3 flex flex-row justify-center gap-4">
                        <label className="form-control w-full max-w-xs mx-auto">
                            <div className="label">
                                <span className="label-text">Select Your Booking Date</span>
                            </div>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs mx-auto">
                            <div className="label">
                                <span className="label-text">Select Your Booking Time</span>
                            </div>
                            <input type="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>}



                    <label htmlFor="book-table-modal" className="w-8 h-8 flex justify-center items-center cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-full absolute top-2 right-2">
                        <IoMdClose className="text-lg" />
                    </label>
                </div>
            </div>
        </>
    )
}
