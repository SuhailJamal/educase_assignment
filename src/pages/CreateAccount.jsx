import { Link } from "react-router-dom";
export default function CreateAccount() {
  return (
    <>
      <div className="bg-white w-[400px] h-[95vh] shadow-md rounded-md mt-5 p-6 overflow-y-auto">
        <h2 className="text-3xl pr-10 font-bold mb-4">
          Create your PopX account
        </h2>

        <div className="relative w-full mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Full Name"
          />
        </div>

        <div className="relative w-full mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Phone Number"
          />
        </div>

        <div className="relative w-full mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Email Address"
          />
        </div>

        <div className="relative w-full mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Password"
          />
        </div>

        <div className="relative w-full mb-4">
          <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
            Company name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 pt-3 pb-2 text-sm focus:outline-none focus:border-purple-600"
            placeholder="Company Name"
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-800 font-medium mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" className="accent-purple-600" />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="agency" className="accent-purple-600" />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        <Link to="/account-profile">
          <button
            type="button"
            className="bg-purple-600 mt-[10rem] cursor-pointer  text-white font-semibold py-2 w-full rounded-md"
          >
            Create Account
          </button>
        </Link>
      </div>
    </>
  );
}
