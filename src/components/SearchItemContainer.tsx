import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { handleSearchModal } from "../redux/features/drawer/drawerSlice";
import ItemSearchInput from "./ItemSearchInput";
import Products from "./Products";
import { IoIosSearch } from "react-icons/io";
import { useGetProductsQuery } from "../redux/features/product/productsApi";
import SkeletonProductCard from "./SkeletonProductCard";
import { IProduct } from "../types";
import ItemCard from "./ItemCard";

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export default function SearchItemContainer() {
    const [searchKeyword, setSearchKeyword] = useState("")
    const dispatch = useAppDispatch()
    const { isLoading: isLoadingProducts, isSuccess: isSuccessProducts, data: products } = useGetProductsQuery({
        keyword: searchKeyword
    })

    const { searchModalMode } = useAppSelector((state: RootState) => state.drawer);

    function closeModal() {
        dispatch(handleSearchModal(false))
    }

    isSuccessProducts && console.log(products.data)

    let content;

    if (isLoadingProducts) {
        content = <>
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
            <SkeletonProductCard className="col-span-4" />
        </>
    } else if (isSuccessProducts && products?.data?.length > 0) {
        content = products?.data?.map((product: IProduct) => <ItemCard key={product.id} product={product} />)

    } else if (isSuccessProducts && products?.data?.length == 0) {
        content = <p className="col-span-12">No products found.</p>
    } else {
        content = <p className="col-span-12">Something was wrong.</p>
    }

    return (
        <div>
            <input type="checkbox" checked={searchModalMode} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box max-w-5xl">
                    <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <h3 className="font-bold text-xl">Explore Menu Items</h3>
                    <div className="my-3">
                        {/* <ItemSearchInput /> */}
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" onChange={e => setSearchKeyword(e.target.value)} value={searchKeyword} className="grow" placeholder="Search" />
                            <IoIosSearch />
                        </label>
                    </div>

                    <div className="h-[28rem] overflow-y-scroll mt-5">
                        <div className="grid grid-cols-12 gap-6 mb-6">
                            {content}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
