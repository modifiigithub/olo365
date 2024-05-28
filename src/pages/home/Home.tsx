import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import { lazy, Suspense } from "react";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
const CategoryList = lazy(() => import('../../components/CategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { category } = useAppSelector((state: RootState) => state.category);
    const { isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)

    let content;

    if (category) {
        content = <CategoryProducts category={category} />
    } else {
        content = isSuccessCategories && categories?.length > 0 && categories?.map((category: ICategory) =>
            <CategoryProducts category={category} />)
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
                        <Suspense>
                            <CategoryList />
                        </Suspense>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <div className="col-span-12 md:col-span-10">
                            {content}
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
