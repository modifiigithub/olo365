import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

export default function ProfileInfo() {
  const { user } = useAppSelector((state: RootState) => state.auth)

  return (
    <div className="min-h-[80vh]">
      <h3 className="text-2xl font-bold">User Information</h3>

      <form className="mt-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input type="text" defaultValue={user?.name} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input type="text" defaultValue={user?.address || ''} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input type="text" defaultValue={user?.phone || ''} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Country</span>
              </div>
              <input type="text" defaultValue={user?.country || ''} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">City</span>
              </div>
              <input type="text" defaultValue={user?.city || ''} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone Code</span>
              </div>
              <input type="text" defaultValue={user?.phone_code || ''} className="input input-bordered w-full max-w-xs" />
            </label>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Zip Code</span>
              </div>
              <input type="text" defaultValue={user?.zip_code || ''} className="input input-bordered w-full max-w-xs" />
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
