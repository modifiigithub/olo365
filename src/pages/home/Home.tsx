import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICartItem, ICategory } from "../../types";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import DrawerCloseButton from "../../components/DrawerCloseButton";
import SearchItemContainer from "../../components/SearchItemContainer";
import TopHorizontalCategoryList from "../../components/TopHorizontalCategoryList";
import { MdDeleteOutline } from "react-icons/md";
// const SidebarCategoryList = lazy(() => import('../../components/SidebarCategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { bottomCartDrawer } = useAppSelector((state: RootState) => state.drawer);
    const { category } = useAppSelector((state: RootState) => state.category);
    const { carts } = useAppSelector((state: RootState) => state.cart);
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

            <SearchItemContainer />

            <div className="container">
                <FilterAction />
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-9">
                        <Suspense fallback={<Loader />}>
                            <TopHorizontalCategoryList />

                            <div className="col-span-12 md:col-span-10">
                                {content}
                            </div>
                        </Suspense>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <h2 className="text-xl mb-4 mt-8 font-bold">Your Order</h2>

                        <div>
                            {
                                carts.map((item: ICartItem, index) => <div key={item.id} className="my-5">
                                    <div className="flex gap-4">
                                        <p className="text-lg font-semibold">{index + 1}.</p>

                                        <div className="flex justify-between w-full">
                                            <div>
                                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="font-semibold">
                                                <p>${item.price}</p>
                                                <button className="btn btn-sm mt-1">
                                                    <MdDeleteOutline className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            {bottomCartDrawer && <div className="fixed md:hidden bottom-0 w-full h-screen left-0 right-0 top-0 bg-black/50 flex items-end">
                <div className="w-full bg-base-200 px-4 py-8">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="card-title font-bold text-xl md:text-2xl">Samosa 2 pc</h2>
                            <p className="line-clamp-2 text-stone-600 text-base mb-2">Samosa 2 pc with chutney</p>
                        </div>
                        <DrawerCloseButton />
                    </div>

                    <div className="flex mt-4">
                        <div>
                            <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    version="1.2"
                                    baseProfile="tiny"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z" />
                                </svg>
                            </button>
                        </div>
                        <input
                            type="text"
                            className="input input-sm input-bordered w-12 text-center font-semibold"
                            defaultValue={1}
                        />
                        <div>
                            <button className="btn bg-brand-600 hover:bg-brand-500 text-white btn-sm">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            }
        </>
    )
}
