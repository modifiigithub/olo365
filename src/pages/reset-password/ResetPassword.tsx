import { Helmet } from "react-helmet-async";

export default function ResetPassword() {
    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <div>

                <form className="max-w-lg">
                    <h3 className="text-3xl font-semibold mb-4">Reset Your Password</h3>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Enter your old password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Enter your new password</span>
                        </div>
                        <input type="password" placeholder="Type here" className="input input-bordered w-full" />
                    </label>

                    <div className="mt-5">
                        <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 text-white w-full">Reset Password</button>
                    </div>
                </form>
            </div>

        </>
    )
}
