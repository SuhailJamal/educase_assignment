import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="w-[400px] h-[95vh] p-5 shadow-md rounded-md mt-5 flex flex-col justify-end">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl">Welcome to PopX</h1>
          <p className="text-sm text-slate-700 mr-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            nesciunt. Lorem ipsum dolor sit amet.
          </p>

          <Link to="/create-account">
            <button className="bg-blue-500 text-white font-bold cursor-pointer w-[95%] py-2 my-3 rounded">
              Create Account
            </button>
          </Link>

          <Link to="/signin">
            <button className="bg-purple-300 font-bold text-black w-[95%] py-2 cursor-pointer rounded">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
