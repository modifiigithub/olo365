import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import FilterAction from "../../components/FilterAction";
import Hero from "../../components/Hero";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { ICategory } from "../../types";
import Loader from "../../components/Loader";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
const SidebarCategoryList = lazy(() => import('../../components/SidebarCategoryList'));
const CategoryProducts = lazy(() => import('../../components/CategoryProducts'));

export default function Home() {
    const { searchKeyword } = useAppSelector((state: RootState) => state.product);
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
                    <div className="col-span-12 md:col-span-2 relative h-full">
                        <Suspense>
                            <SidebarCategoryList />
                        </Suspense>
                    </div>
                    <Suspense fallback={<Loader />}>
                        <div ref={productsContainerRef} className="col-span-12 md:col-span-10">
                            {noProductMessage}
                            {content}
                        </div>
                    </Suspense>
                </div>
            </div >
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