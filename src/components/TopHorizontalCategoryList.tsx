import { FaBars, FaBarsStaggered } from "react-icons/fa6"
import { ICategory } from "../types"
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi"
import { useAppDispatch, useAppSelector } from "../redux/app/hooks"
import { categoryFilter } from "../redux/features/category/categorySlice"
import { setDrawerType } from "../redux/features/drawer/drawerSlice"
import { RootState } from "../redux/app/store"

export default function TopHorizontalCategoryList() {
    const dispatch = useAppDispatch()
    const { category: stateCategory } = useAppSelector((state: RootState) => state.category)
    const { isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)

    function handleCategoryFilter(category: ICategory | null) {
        dispatch(categoryFilter(category))
    }

    function openMobileSidebarCategory() {
        dispatch(setDrawerType("category"))
    }

    return (
        <div className="flex justify-end md:justify-between items-center mt-5">
            <div className="hidden md:flex">
                <div>
                    <p onClick={() => handleCategoryFilter(null)}
                        className={`${stateCategory === null ? "bg-brand-600 text-white" : "bg-brand-100"} px-3 mr-3 text-sm cursor-pointer font-bold p-2 rounded-lg`}
                    >All</p>
                </div>
                {
                    isSuccessCategories && categories?.slice(0, 3)?.map((category: ICategory) =>
                        <div key={category.id}>
                            <p onClick={() => handleCategoryFilter(category)}
                                className={`${stateCategory?.id === category?.id ? "bg-brand-600 text-white hover:bg-brand-700" : "bg-brand-100"} px-3 mr-3 text-sm cursor-pointer font-bold p-2 rounded-lg`}
                            >
                                {category.name}
                            </p>
                        </div>
                    )
                }
            </div>

            <button className="block md:hidden btn" onClick={openMobileSidebarCategory}>
                <FaBarsStaggered />
            </button>

            <div className="hidden md:block dropdown dropdown-end">
                <div tabIndex={10} role="button" className="btn m-1">
                    <FaBars className="text-lg" />
                </div>
                <ul tabIndex={10} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 md:w-[50vw] md:h-80 md:overflow-y-scroll">
                    {
                        isSuccessCategories && categories?.slice(4, categories?.length - 1).map((category: ICategory) =>
                            <li onClick={() => handleCategoryFilter(category)}>
                                <a className={`${stateCategory?.id === category?.id ? "bg-brand-600 text-white hover:bg-brand-700" : ""} `}>
                                    {category?.name}
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
