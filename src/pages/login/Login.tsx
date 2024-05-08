import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import logo from "../../assets/svgs/logo-dark.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../redux/app/hooks";
import { userLoggedIn } from "../../redux/features/auth/authSlice";

type Inputs = {
    email: string
    password: string
}

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [login, { isLoading, isSuccess, isError, error, data }] = useLoginMutation()
    const {
        register,
        handleSubmit
    } = useForm<Inputs>()

    useEffect(() => {
        if (isSuccess) {
            const message = data?.message ? data.message : "Login Successfully";
            toast.success(message)

            const { id, role_id, name, email, device_token} = data.data
    
            dispatch(userLoggedIn({
                device_token,
                user: {
                    id, role_id, name, email
                }
            }))

            navigate("/")
        }
    }, [isSuccess, data, navigate, dispatch])

    useEffect(() => {
        if (isError) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const errorRes: any = error;
            let message = "Something is worng."

            if (errorRes && errorRes?.data && errorRes?.data?.message) {
                message = errorRes?.data?.message;
            }

            toast.error(message)
        }
    }, [isError, error])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        login(data)
    }

    return (
        <div className="container h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[30rem] mx-auto">
                <div>
                    <img className="mb-10 mx-auto w-56" src={logo} alt="logo" />
                    <h2 className="mb-5 text-3xl font-bold">Login to your account</h2>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input defaultValue="customer@yopmail.com" {...register("email", { required: true })} type="email" className="grow" placeholder="Enter email" />
                    </label>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKeyOutline />
                        <input defaultValue="Test@123" {...register("password", { required: true })} type="password" className="grow" placeholder="Enter password" />
                    </label>
                </div>
                <button disabled={isLoading} type="submit" className="btn bg-brand-600 hover:bg-brand-500 w-full text-white mt-5">
                    {isLoading ? <span className="loading loading-bars loading-xs"></span> : <>  Sign In</>}
                </button>
                <div>
                    <p className="mt-4">Don't have an Account? Click here: <Link className="text-blue-500 font-medium" to="/register">Sign Up</Link></p>
                </div>
            </form>
        </div>
    )
}
