interface SkeletonProductCard {
    className?: string
}

export default function SkeletonProductCard({ className }: SkeletonProductCard) {
    return (
        <div className={className ? className : ""}>
            <div className="flex flex-col gap-4 mb-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-end">
                    <div className="skeleton h-4 w-20"></div>
                </div>
            </div>
        </div>
    )
}
