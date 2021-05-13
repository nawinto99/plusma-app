export default function Index() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* 1 card */}
        <div className="relative bg-white py-6 px-12 rounded-3xl w-64 my-6 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-red-600 left-4 -top-6">
            {/* svg  */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="px-12 py-2 text-black font-bold uppercase">
            <div className="font-bold text-xl items-center justify-center uppercase">Blood</div>
          </div>
          <div className="border-t-4"></div>
          <div className="mt-8">
            <a href="blooddonor">
              <button
                className="bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                <span>Donor</span>
              </button>
            </a>

            <a href="bloodseeker">
              <button
                className="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                <span>Seeker</span>
              </button>
            </a>
          </div>
        </div>
        {/* 2 card */}
        <div className="relative bg-white py-6 px-12 rounded-3xl w-64 my-6 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
            {/* svg  */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
          </div>
          <div className="px-12 py-2 text-black font-bold uppercase">
            <div className="font-bold text-xl items-center justify-center uppercase">Plasma</div>
          </div>
          <div className="border-t-4"></div>
          <div className="mt-8">
            <button
              className="bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span>Donor</span>
            </button>

            <button
              className="bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <span>Seeker</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
