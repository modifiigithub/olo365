import { useState } from "react"
import heroImage from "../assets/images/hero-bg.jpg"
import { IoMdClose } from "react-icons/io"
import { FiExternalLink } from "react-icons/fi"
import { FaShop, FaTableList } from "react-icons/fa6"
import { SiDoordash } from "react-icons/si"
import { IoBagHandle } from "react-icons/io5"
import { TbTruckDelivery } from "react-icons/tb"
import TableBookSection from "./TableBookSection"

export default function Hero() {
    const [bookTable, setBookTable] = useState<boolean>(false)
    const [delivery, setDelivery] = useState<boolean>(false)
    const [pickup, setPickup] = useState<boolean>(false)
    const [pickupType, setPickupType] = useState<"now" | "late">()

    function openBookTable() {
        setBookTable(true)
        setDelivery(false)
        setPickup(false)
    }

    function openDelivery() {
        setBookTable(false)
        setDelivery(true)
        setPickup(false)
    }

    function openPickup() {
        setBookTable(false)
        setDelivery(false)
        setPickup(true)
    }

    return (
        <>
            <div className="relative bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-stone-900/50"></div>

                <div className="text-center py-36 text-white z-10">
                    <h3 className="text-3xl md:text-5xl font-semibold">Indulge in Culinary Delights and </h3>
                    <h3 className="text-xl md:text-4xl font-semibold mt-4 md:mt-8">Unforgettable Dining Experiences</h3>

                    <div className="mt-12 md:mt-24">
                        <label htmlFor="book-table-modal" className="cursor-pointer font-bold rounded-lg px-8 py-4 text-2xl md:text-[2.5rem] border-brand-800 bg-brand-700 hover:bg-brand-600 text-white">
                            Select Service
                        </label>
                    </div>
                </div>
            </div>


            <input type="checkbox" id="book-table-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box w-11/12 max-w-2xl relative px-10">
                    <h3 className="font-bold text-3xl text-center">Choose A Service</h3>
                    <div className="flex justify-center items-center gap-2 md:gap-6 mt-10">
                        <button onClick={openPickup} className={`${pickup ? "bg-base-200" : ""} hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg`}>
                            <p className="flex flex-col justify-center items-center gap-2">
                                <IoBagHandle className="md:text-3xl" />
                                <span className="text-base md:text-xl">Pickup</span>
                            </p>
                        </button>
                        <button onClick={openDelivery} className={`${delivery ? "bg-base-200" : ""} hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg`}>
                            <p className="flex flex-col justify-center items-center gap-2">
                                <TbTruckDelivery className="md:text-3xl" />
                                <span className="text-base md:text-xl">Delivery</span>
                            </p>

                        </button>
                        <button onClick={openBookTable} className={`${bookTable ? "bg-base-200" : ""} hover:bg-base-300 w-full h-24 text-xl font-semibold rounded-lg`}>

                            <p className="flex flex-col justify-center items-center gap-2">
                                <FaTableList className="md:text-3xl" />
                                <span className="text-base md:text-xl">Book Table</span>
                            </p>
                        </button>
                    </div>

                    {bookTable &&
                        <TableBookSection />
                    }

                    {delivery && <div>
                        <h3 className="text-lg font-semibold mt-3">Place order with</h3>

                        <div className="mt-4">
                            <div className="flex justify-between items-center cursor-pointer mb-3 hover:bg-base-200 p-2 rounded-lg">
                                <div className="flex gap-2 items-center">
                                    <FaShop className="text-4xl text-brand-500" />
                                    <p className="text-lg font-semibold">Storefront by DoorDash</p>
                                </div>
                                <FiExternalLink className="text-lg" />
                            </div>

                            <div className="flex justify-between items-center cursor-pointer mb-3 hover:bg-base-200 p-2 rounded-lg">
                                <div className="flex gap-2 items-center">
                                    <SiDoordash className="text-4xl text-[#f52e08]" />
                                    <p className="text-lg font-semibold">DoorDash</p>
                                </div>
                                <FiExternalLink className="text-lg" />
                            </div>

                            <div className="flex justify-between items-center cursor-pointer mb-3 hover:bg-base-200 p-2 rounded-lg">
                                <div className="flex gap-2 items-center">
                                    <img className="w-12" src="https://lh3.googleusercontent.com/MP73XMZO--gd4oI7ygSuCjAaALyFxZaOL4WQfuwMY46rpiB9JKNg3d7OfnQND9GOsz0=s80-pd-e1" alt="" />
                                    <p className="text-lg font-semibold">SkipTheDishes</p>
                                </div>
                                <FiExternalLink className="text-lg" />
                            </div>


                            <div className="flex justify-between items-center cursor-pointer mb-3 hover:bg-base-200 p-2 rounded-lg">
                                <div className="flex gap-2 items-center">
                                    {/* <SiUbereats className="text-4xl" /> */}
                                    <img className="w-12" src="https://lh3.googleusercontent.com/8gu-mASJGE9_palCvno_QpoUZ8kd13pYYp_nuhdP54w6tJHQRXdX8QgQegI6AvBqReA=s80-pd-e1" alt="" />
                                    <p className="text-lg font-semibold">UberEats</p>
                                </div>
                                <FiExternalLink className="text-lg" /></div>
                        </div>

                    </div>
                    }

                    {pickup && <div className="text-center my-10">
                        <h2 className="text-lg mb-4 font-medium">When Would You Like Your Order</h2>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => setPickupType("late")} className={`btn btn-lg ${pickupType === "late" ? "bg-base-300" : "bg-white"}`}>
                                Later
                            </button>
                            <button onClick={() => setPickupType("now")} className={`btn btn-lg ${pickupType === "now" ? "bg-base-300" : "bg-white"}`}>
                                Now
                            </button>
                        </div>

                        {pickupType && <form>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-center w-full mt-6">Select Date</span>
                                </div>
                                <select className="select select-bordered w-full">
                                    <option value="2024-06-10" disabled>10/6/2024 (today) (close) Monday</option>
                                    <option value="2024-06-11">11/6/2024 Tuesday</option>
                                    <option value="2024-06-12">12/6/2024 Wednesday</option>
                                    <option value="2024-06-13">13/6/2024 Thursday</option>
                                    <option value="2024-06-14">14/6/2024 Friday</option>
                                    <option value="2024-06-15">15/6/2024 Saturday</option>
                                    <option value="2024-06-16">16/6/2024 Sunday</option>
                                    <option value="2024-06-17">17/6/2024 Monday</option>
                                    <option value="2024-06-18">18/6/2024 Tuesday</option>
                                    <option value="2024-06-19">19/6/2024 Wednesday</option>
                                    <option value="2024-06-20">20/6/2024 Thursday</option>
                                    <option value="2024-06-21">21/6/2024 Friday</option>
                                    <option value="2024-06-22">22/6/2024 Saturday</option>
                                    <option value="2024-06-23">23/6/2024 Sunday</option>
                                    <option value="2024-06-24">24/6/2024 Monday</option>
                                </select>
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-center w-full mt-2">Select Time</span>
                                </div>
                                <select className="select select-bordered w-full">
                                    <option value="11:40 am">11:40 am</option>
                                    <option value="12:20 pm">12:20 pm</option>
                                    <option value="1:00 pm">1:00 pm</option>
                                    <option value="1:40 pm">1:40 pm</option>
                                    <option value="2:20 pm">2:20 pm</option>
                                    <option value="3:00 pm">3:00 pm</option>
                                    <option value="3:40 pm">3:40 pm</option>
                                    <option value="4:20 pm">4:20 pm</option>
                                    <option value="5:00 pm">5:00 pm</option>
                                    <option value="5:40 pm">5:40 pm</option>
                                    <option value="6:20 pm">6:20 pm</option>
                                    <option value="7:00 pm">7:00 pm</option>
                                    <option value="7:40 pm">7:40 pm</option>
                                    <option value="8:20 pm">8:20 pm</option>
                                    <option value="9:00 pm">9:00 pm</option>
                                    <option value="9:40 pm">9:40 pm</option>
                                </select>
                            </label>
                        </form>}
                    </div>}

                    <label htmlFor="book-table-modal" className="w-8 h-8 flex justify-center items-center cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-full absolute top-2 right-2">
                        <IoMdClose className="text-lg" />
                    </label>
                </div>
            </div>
        </>
    )
}
