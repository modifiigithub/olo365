import { ReactNode } from "react";
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { useGetProductsQuery } from "../redux/features/product/productsApi";
import { ICategory, IProduct } from "../types";
import ProductCard from "./ProductCard";
import SkeletonProductCard from "./SkeletonProductCard";

interface CategoryProductsProps {
    category: ICategory;
}

export default function CategoryProducts({ category }: CategoryProductsProps) {
    const { productType, productSort, searchKeyword } = useAppSelector((state: RootState) => state.product);
    const { isLoading, isSuccess, data } = useGetProductsQuery({ category_ids: category.id });

    let content: ReactNode;

    if (isLoading) {
        content = (
            <>
                {[...Array(6)].map((_, index) => (
                    <SkeletonProductCard key={index} className="col-span-4" />
                ))}
            </>
        );
    } else if (isSuccess && data && data.products.length > 0) {
        /**
         * filter by product type
         */
        let filteredProducts = data.products.filter((product: IProduct) => product.product_type.includes(productType));

        if (filteredProducts.length > 0) {
            /**
             * sort by price
             */
            filteredProducts = filteredProducts.sort((a: IProduct, b: IProduct) => {
                const priceA = Math.ceil(a.price);
                const priceB = Math.ceil(b.price);
                return productSort === "asc" ? priceA - priceB : priceB - priceA;
            });
            /**
             * search product
             */
            const searchProductsContent = filteredProducts.filter((product: IProduct) =>
                product.name.includes(searchKeyword)
            );

            if (searchProductsContent.length > 0) {
                content = searchProductsContent.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                ));
            } else {
                content = <p className="col-span-12">No products found.</p>;
            }
        } else {
            content = <p className="col-span-12">No products found.</p>;
        }
    } else if (isSuccess && data && data.products.length === 0) {
        content = <p className="col-span-12">No products found.</p>;
    } else {
        content = <p className="col-span-12">Something went wrong.</p>;
    }

    return (
        <article className="my-6">
            <h2 className="text-xl mb-4 mt-8 font-bold bg-brand-100 p-3 rounded-lg">{category.name}</h2>
            <div className="grid grid-cols-12 gap-6">{content}</div>
        </article>
    );
}
