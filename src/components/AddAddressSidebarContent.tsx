import { useForm, SubmitHandler } from "react-hook-form"
import { useAppSelector } from "../redux/app/hooks";
import { RootState } from "../redux/app/store";
import { useCreateNewAddressMutation } from "../redux/features/address/addressApi";
import { useEffect } from "react";
import { toast } from "sonner";

type Inputs = {
    address: string;
    zip_code: string;
    note: string;
}

export default function AddAddressSidebarContent() {
    const { user, device_token } = useAppSelector((state: RootState) => state.auth)
    const [createNewAddress, { isSuccess }] = useCreateNewAddressMutation()
    const {
        register,
        handleSubmit
    } = useForm<Inputs>({
        defaultValues: {
            address: "234 Elm Street, Apt 567",
            zip_code: "2453",
            note: "This is a primary address"
        }
    })

    useEffect(() => {
        if (isSuccess) {
            toast.success("Address create successful.")
        }
    }, [isSuccess])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email, name, phone, phone_code } = user || {};

        const userInfo = {
            customer_name: name,
            phone_code,
            phone,
            email,
        }

        const body = { ...data, ...userInfo, is_primary: true }

        createNewAddress({
            body,
            headers: {
                authorization: `Bearer ${device_token}`
            }
        })
    }

    return (
        <div>
            <h2 className="text-xl font-bold">Save delivery address</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-4">
                <div>
                    <input {...register("address", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("zip_code", { required: true })} type="text" placeholder="Zip code" className="input input-bordered w-full" />
                </div>
                <div>
                    <textarea {...register("note", { required: true })} rows={3} placeholder="Note" className="textarea textarea-bordered w-full" />
                </div>
                <div>
                    <button type="submit" className="btn text-white rounded-xl w-full text-base bg-brand-600 hover:bg-brand-500">
                        Save address and proceed
                    </button>
                </div>
            </form>

        </div>
    )
}
