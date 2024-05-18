import { ReactNode } from "react";
import { useGetProductsQuery } from "../redux/features/product/productsApi";
import SkeletonProductCard from "./SkeletonProductCard";
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { IProduct } from "../types";
import ProductCard from "./ProductCard";

export default function Products() {
    const { productType, productSort } = useAppSelector((state: RootState) => state.product)
    const { isLoading: isLoadingProducts, isSuccess: isSuccessProducts, data: products } = useGetProductsQuery(undefined)

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
    } else if (isSuccessProducts && products?.products?.length > 0) {
        /**
         * filter by product type
        */
        const filterProductsResult = products?.products?.filter((product: IProduct) => product.product_type.includes(productType))

        /**
         * sort by price
         */
        if (filterProductsResult && filterProductsResult?.length > 0) {
            const sortedProducts = filterProductsResult.sort((a: IProduct, b: IProduct) => {
                if (productSort === "asc") {
                    return Math.ceil(a.price) - Math.ceil(b.price);
                } else {
                    return Math.ceil(b.price) - Math.ceil(a.price);
                }
            });

            productsContent = sortedProducts.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
        } else {
            productsContent = <p className="col-span-12">No products found.</p>
        }

    } else if (isSuccessProducts && products?.data?.data?.length == 0) {
        productsContent = <p className="col-span-12">No products found.</p>
    } else {
        productsContent = <p className="col-span-12">Something was wrong.</p>
    }
    return (
        <div className="col-span-12 md:col-span-10 mt-4">
            <div className="grid grid-cols-12 gap-6 mb-6">
                {productsContent}
            </div>
        </div>
    )
}
