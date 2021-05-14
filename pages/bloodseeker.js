import { BloodSeeker } from '@/components/BloodSeeker'
import React, { useState } from 'react'
import Select from 'react-select'
import data from '@/data/data_india_state_city.json'

export default function BloodSeekerIndex(props) {
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
  const [cityList, setCityList] = useState([])

  const styles = {
    fontSize: 14,
    color: 'blue',
  }
  const handleStateChange = (obj) => {
    setState(obj)
    setCityList(obj.cityList)
    setCity(null)
  }

  const handleCityChange = (obj) => {
    setCity(obj)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="sm:mt-0">
          <div className="md:grid">
            <div className="md:mt-0 md:col-span-1">
              <form>
                <div className="shadow overflow-hidden rounded-lg">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-8 sm:col-span-8 lg:col-span-12">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                          State
                        </label>

                        <Select
                          placeholder="Select State"
                          value={state}
                          options={data}
                          onChange={handleStateChange}
                          getOptionLabel={(x) => x.stateName}
                          getOptionValue={(x) => x.stateName}
                          name="state"
                          inputId="nen100101"
                          instanceId="nen100202"
                        />
                      </div>

                      <div className="col-span-8 sm:col-span-8 lg:col-span-12">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <Select
                          placeholder="Select City"
                          value={city}
                          options={cityList}
                          onChange={handleCityChange}
                          getOptionLabel={(x) => x.cityName}
                          getOptionValue={(x) => x.cityName}
                          name="city"
                          inputId="nen100101"
                          instanceId="nen100202"
                        />
                      </div>
                      <div className="col-span-8 sm:col-span-8 lg:col-span-12">
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
                      type="search"
                      className="inline-flex justify-center py-2 px-12 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
       
      </div>
     
      <div className="py-4"></div>
      <BloodSeeker />
    </>
  )
}
