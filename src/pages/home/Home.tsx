import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import SearchItemContainer from "../../components/SearchItemContainer";
import TopHorizontalCategoryList from "../../components/TopHorizontalCategoryList";
import OrderItemList from "../../components/OrderItemList";
import BottomDrawer from "../../components/drawer/BottomCartDrawer";
import InfiniteScroll from "react-infinite-scroll-component";
// const SidebarCategoryList = lazy(() => import('../../components/SidebarCategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { category } = useAppSelector((state: RootState) => state.category);
    const { isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)

    let content;

    if (category) {
        content = <CategoryProducts category={category} />
    } else {
        content = isSuccessCategories && categories?.length > 0 && categories?.map((category: ICategory) =>
            <CategoryProducts key={category?.id} category={category} />)
    }

    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />

            <BottomDrawer />

            <SearchItemContainer />

            <div className="container">
                <FilterAction />
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-9">
                        <Suspense fallback={<Loader />}>
                            <TopHorizontalCategoryList />

                            <div className="col-span-12 md:col-span-10">
                                {/* <InfiniteScroll
                                    dataLength={categories?.length ? categories?.length : 0}
                                    hasMore={true}
                                    loader={<Loader />}
                                >
                                </InfiniteScroll> */}
                                    {content}
                            </div>
                        </Suspense>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                        <div className="sticky top-28">
                            <OrderItemList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
