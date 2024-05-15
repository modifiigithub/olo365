import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";

export default function ProfileInfo() {
  const { user } = useAppSelector((state: RootState) => state.auth)

  return (
    <div className="min-h-[80vh]">
      <h3 className="text-2xl font-bold">User Information</h3>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="text" readOnly value={user?.email} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input type="text" defaultValue={user?.name} className="input input-bordered w-full max-w-xs" />
          </label>
        </div>

        <div>
          <button type="submit" className="btn btn-sm bg-brand-600 hover:bg-brand-500 text-white mt-3">
            Update Information
          </button>
        </div>
      </form>
    </div>
  )
}
