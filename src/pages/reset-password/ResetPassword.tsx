import { Helmet } from "react-helmet-async";
import { useResetPasswordMutation } from "../../redux/features/auth/authApi";
import { useAppSelector } from "../../redux/app/hooks";
import { RootState } from "../../redux/app/store";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    email: string;
    new_password: string;
    confirm_password: string;
}

export default function ResetPassword() {
    // const [resetPassword, { }] = useResetPasswordMutation()
    // const { device_token } = useAppSelector((state: RootState) => state.auth)
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <Helmet>
                <title>Reset Password</title>
            </Helmet>
            <section className="h-[70vh]">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg">
                    <h3 className="text-3xl font-semibold mb-4">Reset Your Password</h3>
                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Enter your email</span>
                        </div>
                        <input type="password" {...register("email")} placeholder="Enter email" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Enter your new password</span>
                        </div>
                        <input type="password" {...register("new_password")} placeholder="Type new password" className="input input-bordered w-full" />
                    </label>

                    <label className="form-control w-full mb-3">
                        <div className="label">
                            <span className="label-text">Enter your confirm password</span>
                        </div>
                        <input type="password" {...register("confirm_password")} placeholder="Type confirm password" className="input input-bordered w-full" />
                    </label>

                    <div className="mt-5">
                        <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 text-white w-full">Reset Password</button>
                    </div>
                </form>
            </section>

        </>
    )
}
