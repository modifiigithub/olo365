import { ReactNode } from "react";
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { useGetProductsQuery } from "../redux/features/product/productsApi";
import { ICategory, IProduct } from "../types";
import ProductCard from "./ItemCard";
import SkeletonProductCard from "./SkeletonProductCard";

interface CategoryProductsProps {
    category: ICategory;
}

export default function CategoryProducts({ category }: CategoryProductsProps) {
    const { productType, productSort } = useAppSelector((state: RootState) => state.product);
    const { category: categoryId } = useAppSelector((state: RootState) => state.category);
    const { isLoading, isSuccess, data } = useGetProductsQuery({ category_ids: category.id });

    let content: ReactNode;

    if (isLoading) {
        content = (
            <>
                {[...Array(6)].map((_, index) => (
                    <SkeletonProductCard key={index} className="col-span-12 md:col-span-4" />
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

            if (filteredProducts.length > 0) {
                content = filteredProducts.map((product: IProduct) => (
                    <ProductCard key={product.id} product={product} />
                ));
            } else {
                // content = ""
                if (categoryId) {
                    content = <p className="col-span-12">No item found.</p>;
                } else {
                    content = ""
                }
            }
        } else {
            // content = ""
            if (categoryId) {
                content = <p className="col-span-12">No item found.</p>;
            } else {
                content = ""
            }
        }
    } else if (isSuccess && data && data?.products?.length === 0) {
        // return <p className="col-span-12 mt-4">No item found.</p>;
        content = "";
    } else {
        content = <p className="col-span-12">Something went wrong.</p>;
    }

    return (
        <>
            {content != "" &&
                <article className="my-6">
                    <h2 className="text-xl mb-4 mt-8 font-bold bg-brand-100 p-3 rounded-lg">{category.name}</h2>
                    <div className="grid grid-cols-12 gap-6">{content}</div>
                </article>
            }
        </>
    );
}
