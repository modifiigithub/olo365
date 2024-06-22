import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { usePlaceOrderMutation } from "../../redux/features/order/orderApi";
import { calculateGST } from "../../utils/calculateGST";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";

type Inputs = {
    order_note: string;
    payment_method: string;
    order_type: string;
}

export default function PlaceOrder() {
    const [gstAmount, setGstAmount] = useState(0)
    const { totalPrice, totalProduct, carts } = useAppSelector((state: RootState) => state.cart);
    const { device_token } = useAppSelector((state: RootState) => state.auth);
    const { address: delivery_address } = useAppSelector((state: RootState) => state.address);
    // const { data: tables, isLoading: isLoadingTables, isSuccess: isSuccessTables } = useGetTablesQuery(undefined)
    const [placeOrder, { isSuccess: isSuccessPlaceOrder, isLoading: isLoadingPlaceOrder, isError: isErrorPlaceOrder }] = usePlaceOrderMutation()
    // const { data: address, isLoading: isLoadingFetchAddress, isSuccess: isSuccessFetchAddress } = useGetAllAddressQuery(undefined)

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const obj = {
            ...data,
            carts,
            delivery_address,
            gst_amount: gstAmount,
            gratuity_amount: 0,
            order_amount: totalPrice,
            delivery_date: "2024-05-25",
            delivery_time: "23:17:40",
            guest_id: 2,
        }

        const result = await axios.post("https://staging.modifii.com/api/v1/olo/order/place", obj, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + device_token
            }
        })

        placeOrder(obj)
        console.log(result)
    }


    useEffect(() => {
        if (isSuccessPlaceOrder) {
            toast.success("Order place successful")
        }
    }, [isSuccessPlaceOrder])


    useEffect(() => {
        if (isErrorPlaceOrder) {
            toast.error("Order place failed")
        }
    }, [isErrorPlaceOrder])


    useEffect(() => {
        const result = calculateGST(totalPrice, 5);
        setGstAmount(result);

    }, [totalPrice])

    
    // let tableOptions;

    // if (isLoadingTables) {
    //     tableOptions = <span className="loading loading-dots loading-sm"></span>
    // } else if (isSuccessTables && tables?.data?.length > 0) {
    //     tableOptions = tables?.data?.map((table: ITable) => <option key={table.id}>Table ID: {table.id}</option>)
    // } else {
    //     tableOptions = <p>Something was wrong.</p>
    // }

    return (
        <div className="container min-h-[80vh]">
            <h3 className="text-2xl font-bold mt-5">Place Order</h3>

            <div className="grid grid-cols-12 gap-8 mb-10">
                <div className="col-span-12 md:col-span-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 border border-stone-200 p-4 rounded-lg">
                        <div className=" grid grid-cols-12 gap-6">
                            {/* <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">Pick the table ID</span>
                                </div>
                                <select className="select select-bordered">
                                    {tableOptions}
                                </select>
                            </label> */}

                            {/* <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text">Number of People</span>
                                </div>
                                <input type="text" placeholder="Type number of people" className="input input-bordered" />
                            </label> */}

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text-alt">Order Type</span>
                                </div>
                                <select {...register("order_type")} className="select select-bordered">
                                    <option value="take_away">Take Away</option>
                                </select>
                            </label>

                            <label className="form-control col-span-6">
                                <div className="label">
                                    <span className="label-text-alt">Select Payment Method</span>
                                </div>
                                <select {...register("payment_method")} className="select select-bordered">
                                    <option value="cash_on_delivery">Cash on delivery</option>
                                    <option value="credit_debit_card">Credit/Debit card</option>
                                </select>
                            </label>

                            <label className="form-control col-span-12">
                                <div className="label">
                                    <span className="label-text">Order note</span>
                                </div>
                                <textarea {...register("order_note")} className="textarea textarea-bordered h-24" placeholder="Order note" />
                            </label>
                        </div>

                        <div>
                            <button disabled={isLoadingPlaceOrder} type="submit" className="btn text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                                Checkout
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-span-12 md:col-span-4">
                    <div className="border border-stone-200 p-3 rounded-lg mt-5">
                        <div className="border-b border-stone-200 py-4 px-6">
                            <h3 className="text-xl font-bold">Bill Details</h3>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Item:</h3>
                                <p className="font-bold">{totalProduct}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">Total Price:</h3>
                                <p className="font-bold">${totalPrice}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <h3 className="text-lg font-semibold">GST Charges:</h3>
                                <p className="font-bold">${gstAmount}</p>
                            </div>

                            <div className="flex justify-between mt-5 pt-2 border-t-2">
                                <h3 className="text-lg font-semibold">To Pay:</h3>
                                <p className="font-bold">${(gstAmount + totalPrice)?.toFixed(2)}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
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



