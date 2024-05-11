import { FaCartPlus } from "react-icons/fa6";

interface FoodItem {
    title: string;
    description: string;
    cover: string;
    nutrition: {
        energy: string;
        carbohydrates: string;
        protein: string;
        fat: string;
        fiber: string;
    }
}

export default function FoodCard({ food }: { food: FoodItem }) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 card card-compact bg-base-100 p-2 shadow-md border border-stone-200 overflow-hidden">
            <div className="h-52 w-full overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover transition rounded-lg hover:scale-110" src={food.cover} alt={food.title} />
            </div>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{food.title}</h2>
                <p className="line-clamp-2 text-stone-600 text-base mb-2">{food.description}</p>
                <div className="flex items-center">
                    <p className="text-xl font-bold">$12.99</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm px-6 py-1 text-white rounded-full bg-brand-600 hover:bg-brand-500">
                            <FaCartPlus />
                            Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}