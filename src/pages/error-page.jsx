import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        id="error-page"
        className="flex flex-col justify-center items-center md:w-1/3 px-8 h-1/3 bg-[#4d4d4d] rounded text-white font-semibold"
      >
        <h1 className="text-2xl p-4">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>
          <button className="px-2 text-black py-2 mt-2 rounded-lg bg-white shadow-lg">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
