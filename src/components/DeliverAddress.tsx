import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { useGetAllAddressQuery } from "../redux/features/address/addressApi"
import { handleDeliverAddress } from "../redux/features/address/addressSlice";
import { IAddress } from "../types";
import SkeletonProductCard from "./SkeletonProductCard";

export default function DeliverAddress() {
    const dispatch = useAppDispatch()
    const { address } = useAppSelector((state: RootState) => state.address)
    const { data: addressData, isLoading: isLoadingFetchAddress, isSuccess: isSuccessFetchAddress } = useGetAllAddressQuery(undefined)

    function handleAddDeliverAddress(item: IAddress) {
        dispatch(handleDeliverAddress(item))
    }

    let content;

    if (isLoadingFetchAddress) {
        content = <>
            {[...Array(5)].map((_, index) => (
                <SkeletonProductCard key={index} className="col-span-12 md:col-span-4" />
            ))}
        </>
    } else if (isSuccessFetchAddress && addressData?.data?.length > 0) {
        content = addressData?.data?.map((item: IAddress) =>
            <div key={item.id} className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg">
                <h2 className="font-bold text-lg capitalize">{item.address_type}</h2>
                <p className="mt-1">{item.address}</p>
                <p><b className="text-bold">Distance:</b> {item.distance} Mins</p>
                {
                    address?.id === item.id ?
                        <button className="btn btn-sm text-base text-black bg-brand-200 hover:bg-brand-300 mt-5">
                            Added Deliver Address
                        </button> :
                        <button onClick={() => handleAddDeliverAddress(item)} className="btn btn-sm text-white text-base bg-brand-600 hover:bg-brand-500 mt-5">
                            Deliver Here
                        </button>
                }

            </div>)
    } else if (isSuccessFetchAddress && addressData?.data?.length == 0) {
        content = <p>No address found</p>
    } else {
        content = <p>Something was wrong.</p>
    }

    return (
        <>{content}</>
    )
}
