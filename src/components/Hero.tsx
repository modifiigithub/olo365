import heroImage from "../assets/images/hero-bg.jpg"

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-stone-900/50"></div>

            <div className="text-center py-36 text-white z-10">
                <h3 className="text-5xl font-semibold">Indulge in Culinary Delights and </h3>
                <h3 className="text-4xl font-semibold mt-8">Unforgettable Dining Experiences</h3>

                <button className="btn px-6 text-base border-brand-800 bg-brand-600 hover:bg-brand-500 text-white mt-12">Book a Table</button>
            </div>
        </div>
    )
}
