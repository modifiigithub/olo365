import FilterAction from "../../components/FilterAction";
import FoodCard from "../../components/FoodCard";
import Hero from "../../components/Hero";
import { foods } from "../../data/foods";

export default function Home() {
    return (
        <>
            <Hero />
            <FilterAction />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-3 relative h-full">
                        <div className="mt-3 sticky top-28">
                            {foods.map(food => <p key={food.id} className="my-3 cursor-pointer text-xl font-bold hover:underline text-stone-700">
                                {food.category}
                            </p>)}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        {foods.map(menu => <div key={menu.id}>
                            <h3 className="mt-4 mb-4 text-3xl font-bold">{menu.category}</h3>
                            <div className="grid grid-cols-12 gap-6 mb-6">
                                {menu.items.map(food => <FoodCard key={food.title} food={food} />)}
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}
