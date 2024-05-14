import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { useGetProductsQuery } from "../../redux/features/product/productsApi";
import ProductCard from "../../components/ProductCard";
import { ICategory, IProduct } from "../../types";
import { ReactNode } from "react";
import SkeletonProductCard from "../../components/SkeletonProductCard";

export default function Home() {
    const { isLoading: isLoadingCategories, isSuccess: isSuccessCategories, data: categories } = useGetCategoriesQuery(undefined)
    const { isLoading: isLoadingProducts, isSuccess: isSuccessProducts, data: products } = useGetProductsQuery(undefined)

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
    } else if (isSuccessCategories && categories?.data?.length > 0) {
        categoriesContent = categories?.data?.slice(0, 10)?.map((category: ICategory) =>
            <p key={category.id} className="my-3 cursor-pointer text-lg font-semibold hover:underline text-stone-700" >
                {category.name}
            </p>)
    } else {
        categoriesContent = <p>Something was wrong.</p>
    }

    /**
     * show products
     */
    let productsContent: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined;

    if (isLoadingProducts) {
        productsContent = <>
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
        </>
    } else if (isSuccessProducts && products.data.data.length > 0) {
        productsContent = products.data.data.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
    } else if (isSuccessProducts && products.data.data.length == 0) {
        productsContent = <p>No products found.</p>
    } else {
        productsContent = <p>Something was wrong.</p>
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
                    <div className="col-span-12 md:col-span-2 relative h-full">
                        <div className="mt-3 sticky top-28">
                            {categoriesContent}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-10 mt-4">
                        <div className="grid grid-cols-12 gap-6 mb-6">
                            {productsContent}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
