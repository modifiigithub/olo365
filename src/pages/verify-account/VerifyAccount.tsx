import { Link } from "react-router-dom";
import logo from "../../assets/svgs/logo-dark.svg";
import { useState, useRef, useEffect } from "react";
import { useVerifyOtpMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

export default function VerifyAccount() {
    const [verifyOtp, { isSuccess: isSuccessVerifyOtp, isError }] = useVerifyOtpMutation();
    const [otpValue, setOtpValue] = useState<{ [key: string]: string }>({
        1: "",
        2: "",
        3: "",
        4: ""
    });

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [email, setEmail] = useState("nabil.seu.cse@gmail.com");

    useEffect(() => {
        if (isSuccessVerifyOtp) {
            toast.success("Account verify successful");
        }
    }, [isSuccessVerifyOtp]);

    useEffect(() => {
        if (isError) {
            toast.error("OTP is not valid.");
        }
    }, [isError]);

    useEffect(() => {
        if (otpValue[4]) {
            // send request to server
            const obj = {
                email,
                otp: Object.values(otpValue).join(""),
                verified_for: 1
            };
            verifyOtp(obj);
        }
    }, [otpValue, email, verifyOtp]);

    function handleInput(event: React.ChangeEvent<HTMLInputElement>, position: number) {
        const value = event.target.value;

        setOtpValue(prev => ({
            ...prev,
            [position]: value
        }));

        if (value && position < 4) {
            inputRefs.current[position]?.focus();
        }
    }

    return (
        <section className="container h-screen flex justify-center items-center">
            <form className="w-96 mx-auto">
                <div>
                    <Link to="/">
                        <img className="mb-10 mx-auto w-56" src={logo} alt="logo" />
                    </Link>
                    <h2 className="mb-5 text-3xl font-bold">Verify your email</h2>
                </div>
                <div className="mb-4">
                    <p className="mb-2 font-medium">Email</p>
                    <label className="input input-bordered flex items-center gap-2">
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="grow" placeholder="Enter email" />
                    </label>
                </div>
                <p className="mb-2 font-medium">OTP</p>
                <div className="mb-4 grid grid-cols-12 gap-2">
                    {[1, 2, 3, 4].map((position) => (
                        <div className="col-span-3" key={position}>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    ref={(el) => (inputRefs.current[position - 1] = el)}
                                    type="text"
                                    maxLength={1}
                                    value={otpValue[position]}
                                    onChange={(e) => handleInput(e, position)}
                                    className="grow text-center w-full"
                                    placeholder=""
                                />
                            </label>
                        </div>
                    ))}
                </div>

                {/* <button type="submit" className="btn bg-brand-600 hover:bg-brand-500 w-full text-white mt-3">
                    Submit
                </button> */}
            </form>
        </section>
    );
}
