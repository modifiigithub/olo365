import FilterAction from "../../components/FilterAction";
import Hero from "../../components/home/Hero";
import { foods } from "../../data/foods";

export default function Home() {
    return (
        <>
            <Hero />
            <FilterAction />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3 relative h-full">
                        <div className="mt-3 sticky top-48">
                            {foods.map(food => <p key={food.id} className="my-3 cursor-pointer text-xl font-bold hover:underline text-stone-700">
                                {food.category}
                            </p>)}
                        </div>
                    </div>
                    <div className="col-span-9">
                        {foods.map(menu => <div key={menu.id}>
                            <h3 className="mt-4 mb-4 text-3xl font-bold">{menu.category}</h3>
                            <div className="grid grid-cols-12 gap-6 mb-6">
                                {menu.items.map(food => <div className="col-span-12 md:col-span-4 card card-compact bg-base-100 shadow-md border border-stone-200">
                                    <figure><img className="w-full h-52 object-cover rounded-md m-2 hover:scale-95 transition" src={food.cover} alt={food.title} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title font-semibold text-xl">{food.title}</h2>
                                        <div className="flex">
                                            <p className="text-lg font-semibold">$12.99</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-sm px-6 py-1 text-white rounded-full bg-brand-600 hover:bg-brand-500">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}
