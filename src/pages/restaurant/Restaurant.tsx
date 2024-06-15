import { FaRegMessage } from "react-icons/fa6"
import heroImage from "../../assets/images/hero-bg.jpg"
import { FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa"
import { ImSpoonKnife } from "react-icons/im"
import { IoMdNotificationsOutline } from "react-icons/io"

const images = [
    "https://images.unsplash.com/photo-1560053608-13721e0d69e8",
    "https://images.unsplash.com/photo-1564759224907-65b945ff0e84",
    "https://images.unsplash.com/photo-1517638851339-a711cfcf3279"
]

export default function Restaurant() {
    return (
        <section>
            <img className="w-full h-96 object-cover" src={heroImage} alt="hero" />

            <div className="container">
                <div className="grid grid-cols-12 gap-8 justify-center -mt-14">
                    <div className="col-span-12 md:col-span-1"></div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="bg-white rounded-lg px-4">
                            <div className="flex gap-4 border-b border-stone-300">
                                <div className="p-4 cursor-pointer">
                                    <p className="font-semibold">Overview</p>
                                </div>
                                <div className="p-4 cursor-pointer">
                                    <p className="font-semibold">Experiences</p>
                                </div>
                                <div className="p-4 cursor-pointer">
                                    <p className="font-semibold">Photos</p>
                                </div>
                                <div className="p-4 cursor-pointer">
                                    <p className="font-semibold">Menu</p>
                                </div>
                                <div className="p-4 cursor-pointer">
                                    <p className="font-semibold">Reviews</p>
                                </div>
                            </div>

                            <h2 className="text-4xl font-bold py-5 border-b border-stone-300">Yogo Eat</h2>
                            <div className="flex justify-between gap-3 p-3">
                                <div>
                                    <p className="font-semibold">4.7</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaRegMessage />
                                    <p className="font-semibold">320 Reviews</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <FaRegMoneyBillAlt />
                                    <p className="font-semibold">CAN$31 to CAN$50</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <ImSpoonKnife />
                                    <p className="font-semibold">Contemporary Indian</p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3 mt-1">
                                <span className="font-semibold">Top tags:</span>
                                <button className="btn btn-sm border border-stone-300 font-semibold rounded-full">Good for groups</button>
                                <button className="btn btn-sm border border-stone-300 font-semibold rounded-full">Good for special occasions</button>
                                <button className="btn btn-sm border border-stone-300 font-semibold rounded-full">Vegetarian-friendly</button>
                            </div>

                            <div className="mt-5 text-sm">
                                <p>
                                    Tasty Indian Bistro, which is located in Delta, British Columbia, is a restaurant devoted to serving the unique spice and flavor of Indian cooking to its guests. Traditional dishes from all parts of India are served, and there are also fusion creations to be found on the menu. In addition to the top-notch menu, Tasty Indian Bistro also boasts an exquisite atmosphere in which to dine.
                                </p> <br />
                                <p>
                                    If you're looking to try one of the fusion dishes at Tasty Indian Bistro, the mango and coconut chicken curry is a great place to start. Vegetable specials like the tasty cream paneer, which is Indian cheese cooked in creamy gravy, will make the vegetarians in your party pleased.
                                </p> <br />
                                <p>
                                    Spl. Handcrafted cocktail Menu and Live Kitchen in the Patio will be an exclusive experience.
                                </p> <br />
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-bold border-b border-stone-300 pb-2 mb-3">Experiences</h3>

                                <div className="border border-stone-300 rounded-lg p-4">
                                    <h3 className="text-lg font-bold">Experience the Tasty's Live Kitchen Menu</h3>
                                    <div className="flex gap-2 items-center mt-1">
                                        <FaRegCalendarAlt />
                                        <p className="font-semibold text-sm">Multiple dates available</p>
                                    </div>

                                    <button className="btn btn-sm border-brand-800 bg-brand-600 hover:bg-brand-500 text-white mt-3">
                                        Reserve
                                    </button>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-2xl font-bold border-b border-stone-300 pb-2 mb-3">145 Photos</h3>

                                {/* {
                                    images?.map(image => <div>
                                        <img src={image} alt="image" />
                                    </div>)
                                } */}

                                <div className="grid grid-cols-12 gap-2 pb-10">
                                    <div className="col-span-6">
                                        <img className="w-full object-cover rounded-lg" src={images[0]} alt="" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className="grid grid-cols-12 gap-2">
                                            <div className="col-span-6">
                                                <img className="w-full object-cover rounded-lg" src={images[1]} alt="" />
                                            </div>
                                            <div className="col-span-6">
                                                <img className="w-full object-cover rounded-lg" src={images[0]} alt="" />
                                            </div>
                                            <div className="col-span-6">
                                                <img className="w-full object-cover rounded-lg" src={images[2]} alt="" />
                                            </div>
                                            <div className="col-span-6">
                                                <img className="w-full object-cover rounded-lg" src={images[0]} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>











                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="bg-white rounded-lg px-4 border border-stone-300 pb-5">
                            <h3 className="text-center text-xl font-semibold py-3 border-b border-stone-300">Make a reservation</h3>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text-alt font-bold">Party Size</span>
                                    </div>
                                    <select className="select select-bordered">
                                        <option>1 person</option>
                                        <option>2 people</option>
                                        <option>3 people</option>
                                        <option>4 people</option>
                                        <option>5 people</option>
                                        <option>6 people</option>
                                        <option>7 people</option>
                                        <option>8 people</option>
                                    </select>
                                </label>

                                <div className="grid grid-cols-12 gap-6">
                                    <label className="form-control w-full col-span-12 md:col-span-6">
                                        <div className="label">
                                            <span className="label-text-alt font-bold">Date</span>
                                        </div>
                                        <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                    </label>

                                    <label className="form-control w-full col-span-12 md:col-span-6">
                                        <div className="label">
                                            <span className="label-text-alt font-bold">Date</span>
                                        </div>

                                        <select className="select select-bordered">
                                            <option>9:00 am</option>
                                            <option>9:30 am</option>
                                            <option>10:00 am</option>
                                            <option>10:30 am</option>
                                            <option>11:00 am</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="mt-2">
                                    <p className="label-text-alt font-bold">Select a time</p>

                                    <div className="mt-4 flex items-center gap-3">
                                        <div>
                                            <button className="btn btn-sm px-4 border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">1:30 pm</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1">Experiences</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm px-4 border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">1:45 pm</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1">Experiences</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm px-4 border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">2:00 pm</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1">Experiences</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center gap-3">
                                        <div>
                                            <button className="btn btn-sm px-4 border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">1:30 pm</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1">Experiences</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm px-4 border-brand-800 bg-brand-600 hover:bg-brand-500 text-white">1:45 pm</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1">Experiences</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-sm px-4 border border-brand-800 text-brand-800 bg-white">
                                                <IoMdNotificationsOutline className="text-lg" />
                                                Notify me</button>
                                            <p className="text-brand-950 text-sm font-semibold mt-1 opacity-0">Experiences</p>
                                        </div>
                                    </div>










                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-12 md:col-span-1"></div>
                </div>
            </div>
        </section>
    )
}
