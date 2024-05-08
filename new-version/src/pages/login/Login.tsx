import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import logo from "../../assets/svgs/logo-dark.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    email: string
    password: string
}


export default function Login() {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[30rem] mx-auto">
                <div>
                    <img className="mb-10 mx-auto w-56" src={logo} alt="logo" />
                    <h2 className="mb-5 text-3xl font-bold">Login to your account</h2>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input {...register("email", { required: true })} type="email" className="grow" placeholder="Enter email" />
                    </label>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKeyOutline />
                        <input {...register("password", { required: true })} type="password" className="grow" placeholder="Enter password" />
                    </label>
                </div>
                <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 w-full text-white mt-5">Sign In</button>
                <div>
                    <p className="mt-4">Don't have an Account? Click here: <Link className="text-blue-500 font-medium" to="/register">Sign Up</Link></p>
                </div>
            </form>
        </div>
    )
}
