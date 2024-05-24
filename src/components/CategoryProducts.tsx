import { ReactNode } from "react"
import { useAppSelector } from "../redux/app/hooks"
import { RootState } from "../redux/app/store"
import { useGetProductsQuery } from "../redux/features/product/productsApi"
import { ICategory, IProduct } from "../types"
import ProductCard from "./ProductCard"
import SkeletonProductCard from "./SkeletonProductCard"

interface CategoryProductsProps {
    category: ICategory
}

export default function CategoryProducts({ category }: CategoryProductsProps) {
    const { productType, productSort } = useAppSelector((state: RootState) => state.product)
    const { isLoading: isLoadingProducts, isSuccess: isSuccessProducts, data: products } = useGetProductsQuery({
        category_ids: category.id
    })

    let content: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined;

    if (isLoadingProducts) {
        content = <>
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

            content = sortedProducts.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
        } else {
            content = <p className="col-span-12">No products found.</p>
        }

    } else if (isSuccessProducts && products?.data?.data?.length == 0) {
        content = <p className="col-span-12">No products found.</p>
    } else {
        content = <p className="col-span-12">Something was wrong.</p>
    }

    return (
        <div className="my-6">
            <h2 className="text-xl mb-4 mt-8 font-bold bg-brand-100 p-3 rounded-lg">{category.name}</h2>

            <div className="grid grid-cols-12 gap-6">
                {content}
            </div>
        </div>
    )
}
