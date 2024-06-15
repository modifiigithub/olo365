import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    // size: "lg" | "md" | "sm" | "xs",
    className?: string;
    type: "primary" | "light" | "error"
}

export default function Button({ children, className = "" }: ButtonProps) {
    
    return (
        <button className={`${className} btn btn-md md:btn-sm lg:btn-md text-white text-base bg-brand-600 hover:bg-brand-500`}>
            {children}
        </button>
    )
}
