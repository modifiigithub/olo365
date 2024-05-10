import { Link, useRouteError } from "react-router-dom";
// import notFoundImage from "../../assets/404.jpg";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <section className="h-screen flex justify-center items-center">
            <div className="py-5 text-center">
                <h1 className="text-3xl mb-4">Oops! 404</h1>
                <p className="text-xl">Sorry, an unexpected error has occurred.</p>

                {/* <img className="w-80 mt-4 mx-auto" src={notFoundImage} alt="404" /> */}
                <Link to="/" className="mt-5 block">
                    <button className="btn bg-brand-600 hover:bg-brand-500 text-white">Go Home</button>
                </Link>
            </div>
        </section>
    );
}