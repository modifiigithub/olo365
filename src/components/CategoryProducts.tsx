import { useGetProductsQuery } from "../redux/features/product/productsApi"
import { ICategory, IProduct } from "../types"
import ProductCard from "./ProductCard"
import SkeletonProductCard from "./SkeletonProductCard"

interface CategoryProductsProps {
    category: ICategory
}

export default function CategoryProducts({ category }: CategoryProductsProps) {
    const { data, isSuccess, isLoading } = useGetProductsQuery({
        category_ids: category.id
    })

    let content;

    if (isLoading) {
        content = <>
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
        </>
    } else if (isSuccess && data?.products.length > 0) {
        content = data?.products.map((product: IProduct) => <ProductCard key={product.id} product={product} />)
    } else if (isSuccess && data?.products.length == 0) {
        content = <h4>No product found.</h4>
    } else {
        content = <h4>Something was wrong.</h4>
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
