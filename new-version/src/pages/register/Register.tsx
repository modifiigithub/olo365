import { MdOutlineMail } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import logo from "../../assets/svgs/logo-dark.svg";
import { CiPhone } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

type Inputs = {
    name: string
    email: string
    password: string
    c_password: string
    phone: string
    phone_code: string
}

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors }, // Destructure errors from formState
        watch
    } = useForm<Inputs>()

    const password = watch("password");

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[30rem] mx-auto">
                <div>
                    <img className="mb-10 mx-auto w-56" src={logo} alt="logo" />
                    <h2 className="mb-5 text-3xl font-bold">Create your account</h2>
                </div>
                <div className="mb-2">
                    <p className="mb-2 font-medium">Name</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <FaUser />
                        <input {...register("name", { required: true })} type="text" className="grow" placeholder="Enter name" />
                    </label>
                </div>
                <div className="mb-2">
                    <p className="mb-2 font-medium">Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input {...register("email", { required: true })} type="email" className="grow" placeholder="Enter email" />
                    </label>
                </div>
                <div className="mb-2">
                    <p className="mb-2 font-medium">Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKeyOutline />
                        <input {...register("password", { required: true, minLength: 6 })} type="password" className="grow" placeholder="Enter password" />
                    </label>
                    {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>} {/* Display error message if password validation fails */}
                </div>

                <div className="mb-2">
                    <p className="mb-2 font-medium">Confirm Password</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <IoKeyOutline />
                        <input {...register("c_password", {
                            required: true,
                            validate: value => value === password || "The passwords do not match" // Validate if confirm password matches password
                        })} type="password" className="grow" placeholder="Confirm password" />
                    </label>
                    {errors.c_password && <p className="text-red-500 font-semibold">{errors.c_password.message}</p>} {/* Display error message if confirm password validation fails */}
                </div>

                <div className="flex">
                    <div className="mb-2">
                        <p className="mb-2 font-medium">Phone</p>
                        <select {...register("phone_code", { required: true })} className="select select-bordered rounded-none rounded-tl-lg rounded-bl-lg">
                            <option>340</option>
                            <option>670</option>
                            <option>684</option>
                        </select>

                    </div>
                    <div className="mb-2 w-full">
                        <p className="mb-2 font-medium text-white">Password</p>
                        <label className="input input-bordered focus:border-none flex items-center gap-2 rounded-none rounded-br-lg rounded-tr-lg">
                            <CiPhone />
                            <input {...register("phone", { required: true })} type="text" className="grow" placeholder="Enter phone" />
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 w-full text-white mt-3">Sign Up</button>
                <div>
                    <p className="mt-4"> Already have an account? Please click: <Link className="text-blue-500 font-medium" to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}
