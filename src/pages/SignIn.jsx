import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <>
      <div className="w-[400px] h-[95vh] p-6 shadow-md rounded-md mt-5 bg-white flex flex-col justify-start">
        <h2 className="text-4xl pr-10 font-bold mb-1">
          Signin to your PopX account
        </h2>
        <p className="text-gray-500 text-lg pr-10 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Email Field */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Enter email address"
          />
        </div>

        {/* Password Field */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Enter password"
          />
        </div>

        <Link to="/account-profile">
          <button
            type="button"
            className="bg-gray-300 text-white font-bold py-2 rounded-md w-full cursor-not-allowed"
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
}
