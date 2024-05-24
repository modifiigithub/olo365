import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
// const Products = lazy(() => import('../../components/Products'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { isLoading: isLoadingCategories, isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)
    /**
  * show categories
  */
    let categoriesContent;

    if (isLoadingCategories) {
        categoriesContent = <>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
            <div className="skeleton h-6 w-full my-4"></div>
        </>
    } else if (isSuccessCategories && categories?.length > 0) {
        categoriesContent = categories?.map((category: ICategory) =>
            <p key={category.id} className="my-3 cursor-pointer text-lg font-semibold hover:underline text-stone-700" >
                {category.name}
            </p>)
    } else {
        categoriesContent = <p className="col-span-12">Something was wrong.</p>
    }

    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <FilterAction />

            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-2 relative h-full pb-5">
                        <div className="mt-3 sticky top-28">
                            {categoriesContent}
                        </div>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <div className="col-span-12 md:col-span-10">
                            {
                                isSuccessCategories && categories?.length > 0 && categories.map((category: ICategory) => <CategoryProducts category={category} />)
                            }
                        </div>
                    </Suspense>
                    {/* <Suspense fallback={<Loader />}>
                        <Products />
                    </Suspense> */}
                </div>
            </div >
        </>
    )
}
