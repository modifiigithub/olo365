import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import DrawerCloseButton from "../../components/DrawerCloseButton";
const SidebarCategoryList = lazy(() => import('../../components/SidebarCategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { searchKeyword } = useAppSelector((state: RootState) => state.product);
    const { bottomCartDrawer } = useAppSelector((state: RootState) => state.drawer);
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
        console.log(searchKeyword !== "")
        if (searchKeyword !== "" && productsContainerRef.current && productsContainerRef?.current?.children?.length > 0) {
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
                    <div className="col-span-12 md:col-span-2 relative h-full hidden md:block">
                        <Suspense>
                            <SidebarCategoryList type="sidebar" />
                        </Suspense>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <div ref={productsContainerRef} className="col-span-12 md:col-span-10">
                            {noProductMessage}
                            {content}
                        </div>
                    </Suspense>
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
            </div>}
        </>
    )
}

/**
 * 


{    "order_type": "take_away", // client
    "delivery_address":{
        "contact_person_name": "Sumit Madaan",
        "contact_person_number": "9888117170",
        "email": "sumit@yopmail.com",
        "address": "22 Winifred, St Albans, Vic 3021",
        "road": "test road",
        "house": "58",
        "floor": "2",
        "is_guest": 0,
        "postal_code": "45213",
        "latitude": "30.4544848478",
        "longitude": "76.8754212356",
        "notes": "test note text",
        "address_type":"Home",
        "distance":10

    },
    "delivery_date": "2024-05-25",
    "delivery_time": "23:17:40",
    "guest_id":2,
    "order_amount": 62.5, 
    "branch_id": 1,
    "payment_status": "unpaid", 
    "payment_method": "cash_on_delivery",// clent 
    "gratuity_amount": 0,
    "gst_amount": 2.7,
    "order_note": "" // client
}

 * 
 */