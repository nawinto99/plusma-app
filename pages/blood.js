export default function BloodDonor() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <form action="/" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Lame
                        </label>
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email_address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="text"
                          name="email_address"
                          id="email_address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="mobile_number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="mobile_number"
                          id="mobile_number"
                          autoComplete="tel"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <select
                          type="text"
                          name="state"
                          id="state"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option> Andaman and Nicobar Islands</option>
                          <option> Andhra Pradesh </option>
                          <option> Arunachal Pradesh </option>
                          <option> Assam </option>
                          <option> Bihar </option>
                          <option> Chandigarh </option>
                          <option> Chhattisgarh </option>
                          <option> Dadra and Nagar Haveli </option>
                          <option> Daman and Diu </option>
                          <option> Delhi </option>
                          <option> Goa </option>
                          <option> Gujarat </option>
                          <option> Haryana </option>
                          <option> Himachal Pradesh </option>
                          <option> Jammu and Kashmir </option>
                          <option> Jharkhand </option>
                          <option> Karnataka </option>
                          <option> Kerala </option>
                          <option> Lakshadweep </option>
                          <option> Madhya Pradesh </option>
                          <option> Maharashtra </option>
                          <option> Manipur </option>
                          <option> Meghalaya </option>
                          <option> Mizoram </option>
                          <option> Nagaland </option>
                          <option> Odisha </option>
                          <option> Puducherry </option>
                          <option> Punjab </option>
                          <option> Rajasthan </option>
                          <option> Sikkim </option>
                          <option> Tamil Nadu </option>
                          <option> Telangana </option>
                          <option> Tripura </option>
                          <option> Uttar Pradesh </option>
                          <option> Uttarakhand </option>
                          <option> West Bengal </option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white text-center sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
