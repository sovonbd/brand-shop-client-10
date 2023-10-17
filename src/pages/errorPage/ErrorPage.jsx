import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-[70vh] my-auto flex flex-col justify-center items-center gap-2 text-center">
      <div>
        <h1 className="text-8xl font-bold">404</h1>
        <p className="font-semibold">Page Not Found</p>
      </div>
      <Link to="/">
        <button className="bg-[#FF444A] border-none px-8 rounded-lg text-white font-semibold btn hover:bg-[#FF444A] focus:bg-[#FF444A]">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
