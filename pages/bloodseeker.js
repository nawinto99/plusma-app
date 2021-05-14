import { BloodSeeker } from '@/components/BloodSeeker'
import { dataStates } from '@/components/Data'



export default function BloodSeekerIndex() {

  return (
    <>
    <div className="flex items-center justify-center">
        <div className="sm:mt-0">
          <div className="md:grid">
            <div className="md:mt-0 md:col-span-1">
              <form >
                <div className="shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-6">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <select
                          type="text"
                          name="state"
                          id="state"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option></option>
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

                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label
                          htmlFor="blood_group"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Blood Group
                        </label>
                        <select
                          type="text"
                          name="blood_group"
                          id="blood_group"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
                          <option></option>
                          <option> O+ </option>
                          <option> O- </option>
                          <option> A+ </option>
                          <option> A- </option>
                          <option> B+ </option>
                          <option> B- </option>
                          <option> AB+ </option>
                          <option> AB- </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-white text-center sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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