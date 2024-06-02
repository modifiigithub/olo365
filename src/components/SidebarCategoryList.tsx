import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { useGetCategoriesQuery } from "../redux/features/category/categoryApi";
import { categoryFilter } from "../redux/features/category/categorySlice";
import { ICategory } from "../types";

export default function SidebarCategoryList() {
    const dispatch = useAppDispatch()
    const { category: categoryItem } = useAppSelector((state: RootState) => state.category);
    const { isLoading: isLoadingCategories, isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)
    /**
  * show categories
  */
    let content;

    if (isLoadingCategories) {
        content = (
            <>
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="skeleton h-6 w-full my-4"></div>
                ))}
            </>
        );
    } else if (isSuccessCategories && categories?.length > 0) {
        content = categories?.map((category: ICategory) =>
            <p onClick={() => dispatch(categoryFilter(category))} key={category.id}
                className={`${categoryItem?.id === category.id ? "bg-brand-100 rounded-lg" : ""} w-fit px-1 my-3 cursor-pointer text-lg font-semibold hover:underline text-stone-700`} >
                {category.name}
            </p>)
    } else {
        content = <p className="col-span-12">Something was wrong.</p>
    }
    return (
        <div className="mt-3 sticky top-28 pb-2 h-[85vh] overflow-y-scroll">
            {content}
        </div>
    )
}
