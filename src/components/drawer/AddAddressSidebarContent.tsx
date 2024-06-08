import { useForm, SubmitHandler } from "react-hook-form"
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useCreateNewAddressMutation } from "../../redux/features/address/addressApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import DrawerCloseButton from "../DrawerCloseButton";

type Inputs = {
    contact_person_name: string;
    contact_person_number: string;
    email: string;
    address: string;
    postal_code: string;
    latitude: string;
    longitude: string;
    notes: string;
    address_type: 'home' | 'work' | 'other';
    road: string;
    house: string;
    floor: string;
    distance: number;
    is_guest: 0 | 1; // assuming is_guest can be 0 or 1
}

export default function AddAddressSidebarContent() {
    const { user, device_token } = useAppSelector((state: RootState) => state.auth)
    const [createNewAddress, { isSuccess, isError }] = useCreateNewAddressMutation()
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Address create successful.")
            reset();
        }
    }, [isSuccess, reset])

    useEffect(() => {
        if (isError) {
            toast.success("Address create failed.")
        }
    }, [isError])

    const [location, setLocation] = useState<{ latitude: null | number, longitude: null | number }>({ latitude: null, longitude: null });
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(null);
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    useEffect(() => {
        getLocation()

        if (error) {
            toast.error("Location detection failed")
        }
    }, [error])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email, name, phone } = user || {};
        const { latitude, longitude } = location;

        console.log(
            {
                ...data,
                distance: Number(data?.distance),
                "contact_person_name": name,
                "contact_person_number": phone,
                email,
                "is_guest": 0,
                "address_type": "home",
                latitude: latitude?.toString(),
                longitude: longitude?.toString(),
            })

        const body = {
            ...data,
            distance: Number(data?.distance),
            "contact_person_name": name,
            "contact_person_number": phone,
            email,
            "is_guest": 0,
            "address_type": "home",
            latitude: latitude?.toString(),
            longitude: longitude?.toString(),
        }

        createNewAddress({
            body,
            headers: {
                authorization: `Bearer ${device_token}`
            }
        })
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Save delivery address</h2>
                <DrawerCloseButton />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 flex flex-col gap-4">
                <div>
                    <input {...register("address", { required: true })} type="text" placeholder="Address" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("postal_code", { required: true })} type="text" placeholder="Postal code" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("road", { required: true })} type="text" placeholder="Road" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("house", { required: true })} type="text" placeholder="House" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("floor", { required: true })} type="text" placeholder="Floor" className="input input-bordered w-full" />
                </div>
                <div>
                    <input {...register("distance", { required: true })} type="number" placeholder="Distance" className="input input-bordered w-full" />
                </div>
                <div>
                    <textarea {...register("notes", { required: true })} rows={3} placeholder="Notes" className="textarea textarea-bordered w-full" />
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
