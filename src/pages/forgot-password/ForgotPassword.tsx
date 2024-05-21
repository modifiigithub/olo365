import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/svgs/logo-dark.svg"
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="container h-screen flex justify-center items-center">
            <form className="w-[30rem] mx-auto">
                <div>
                    <Link to="/">
                        <img className="mb-10 mx-auto w-56" src={logo} alt="logo" />
                    </Link>
                    <h2 className="mb-5 text-3xl font-bold">Forgot Password</h2>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <MdOutlineMail />
                        <input defaultValue="customer@yopmail.com" type="email" className="grow" placeholder="Enter email" />
                    </label>
                </div>

                <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 w-full text-white mt-3">
                    Send Email
                </button>
                <div>
                    <p className="mt-4"> Already have an account? Please click: <Link className="text-blue-500 font-medium" to="/login">Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}
