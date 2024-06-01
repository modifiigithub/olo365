import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
const SidebarCategoryList = lazy(() => import('../../components/SidebarCategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { searchKeyword } = useAppSelector((state: RootState) => state.product);
    const { category } = useAppSelector((state: RootState) => state.category);
    const { isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)
    const productsContainerRef = useRef<HTMLDivElement>(null)
    const [noProductMessage, setNoProductMessage] = useState<JSX.Element>(<></>)

    let content;

    if (category) {
        content = <CategoryProducts category={category} />
    } else {
        content = isSuccessCategories && categories?.length > 0 && categories?.map((category: ICategory) =>
            <CategoryProducts key={category?.id} category={category} />)
    }

    useEffect(() => {
        if (searchKeyword !== "" && productsContainerRef.current && productsContainerRef.current.children.length > 0) {
            setNoProductMessage(<p className="col-span-12 mt-5">No product found.</p>)
        } else {
            setNoProductMessage(<></>)
        }
    }, [searchKeyword])


    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <FilterAction />

            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-2 relative h-full">
                        <Suspense>
                            <SidebarCategoryList />
                        </Suspense>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <div ref={productsContainerRef} className="col-span-12 md:col-span-10">
                            {noProductMessage}
                            {content}
                        </div>
                    </Suspense>
                </div>
            </div >
        </>
    )
}
