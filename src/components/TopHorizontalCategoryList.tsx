import { FaBars, FaBarsStaggered } from "react-icons/fa6"
import { ICategory } from "../types"
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi"
import { useAppDispatch } from "../redux/app/hooks"
import { categoryFilter } from "../redux/features/category/categorySlice"
import { setDrawerType } from "../redux/features/drawer/drawerSlice"

export default function TopHorizontalCategoryList() {
    const dispatch = useAppDispatch()
    const { isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)

    function handleCategoryFilter(category: ICategory) {
        dispatch(categoryFilter(category))
    }

    function openMobileSidebarCategory() {
        dispatch(setDrawerType("category"))
    }

    return (
        <div className="flex justify-end md:justify-between items-center mt-5">
            <div className="hidden md:flex">
                {
                    isSuccessCategories && categories?.slice(0, 3)?.map((category: ICategory) =>
                        <div key={category.id}>
                            <p onClick={() => handleCategoryFilter(category)} className="bg-brand-100 px-3 mr-3 text-sm cursor-pointer font-bold p-2 rounded-xl">{category.name}</p>
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
                        categories?.map((category: ICategory) => <li onClick={() => handleCategoryFilter(category)}><a>{category?.name}</a></li>)
                    }
                </ul>
            </div>
        </div>
    )
}
