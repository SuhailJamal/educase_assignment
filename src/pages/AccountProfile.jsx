export default function AccountProfile() {
  return (
    <div className="bg-slate-100 w-[400px] h-[95vh] shadow-md rounded-md mt-5  overflow-y-auto">
      <h2 className="text-xl pt-4 font-semibold mb-2 px-4 bg-white pb-4">
        Account Settings
      </h2>

      <div className="flex gap-6  bg-slate-100 px-4 items-start py-6">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 20h14v-2H5v2zM14.7 3.3l-1-1a1 1 0 00-1.4 0L11 3.6l3.4 3.4 1.3-1.3a1 1 0 000-1.4zM3 17.3V21h3.7l9.9-9.9-3.7-3.7L3 17.3z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold">Marry Doe</p>
          <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-gray-700 font-semibold text-sm bg-slate-100 p-4">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
}
