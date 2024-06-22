import { useEffect } from "react";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { useGetProfileInfoQuery, useUpdateProfileInfoMutation } from "../../redux/features/auth/authApi";
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "sonner";

type Inputs = {
  name: string;
  address: string | null;
  phone: string;
  phone_code: string;
  country: string | null;
  city: string | null;
  zip_code: string | null;
}

export default function ProfileInfo() {
  const { device_token } = useAppSelector((state: RootState) => state.auth)
  const [updateProfileInfo, { isSuccess: isSuccessUpdateProfile }] = useUpdateProfileInfoMutation()
  const { data: profile } = useGetProfileInfoQuery({
    headers: {
      "authorization": "Bearer " + device_token
    }
  }, {
    skip: device_token ? false : true
  })

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  useEffect(() => {
    if (isSuccessUpdateProfile) {
      toast.success("User data update successful.")
    }
  }, [isSuccessUpdateProfile])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateProfileInfo({
      body: data,
      headers: {
        'authorization': "Bearer " + device_token
      }
    })
  }

  return (
    <div className="min-h-[80vh]">
      <h3 className="text-2xl font-bold">User Information</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="my-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" readOnly value={profile?.data?.email || ""} className="input input-bordered w-full" />
            </label>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input type="text" {...register("name")} defaultValue={profile?.data?.name || ""} className="input input-bordered w-full" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input type="text" {...register("address")} defaultValue={profile?.data?.address || ''} className="input input-bordered w-full" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country</span>
              </div>
              <input type="text" {...register("country")} defaultValue={profile?.data?.country || ''} className="input input-bordered w-full" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">City</span>
              </div>
              <input type="text" {...register("city")} defaultValue={profile?.data?.city || ''} className="input input-bordered w-full" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Country Phone Code</span>
              </div>
              <select {...register("phone_code")} defaultValue={profile?.data?.phone_code || ''} className="input input-bordered w-full">
                <option value="+1">+1 United States</option>
                <option value="+44">+44 United Kingdom</option>
                <option value="+91">+91 India</option>
                <option value="+61">+61 Australia</option>
                <option value="+81">+81 Japan</option>
                <option value="+49">+49 Germany</option>
                <option value="+33">+33 France</option>
                <option value="+86">+86 China</option>
                <option value="+7">+7 Russia</option>
                <option value="+34">+34 Spain</option>
                <option value="+39">+39 Italy</option>
                <option value="+55">+55 Brazil</option>
                <option value="+27">+27 South Africa</option>
              </select>
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input type="text" {...register("phone")} defaultValue={profile?.data?.phone || ''} className="input input-bordered w-full" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Zip Code</span>
              </div>
              <input type="text" {...register("zip_code")} defaultValue={profile?.data?.zip_code || ''} className="input input-bordered w-full" />
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 text-white mt-6">
            Update Information
          </button>
        </div>
      </form>
    </div>
  )
}
