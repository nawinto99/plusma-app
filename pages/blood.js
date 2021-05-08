import { useState, useEffect } from 'react'
import { useBloodDonorEntries, createBloodDonorEntry } from '@/graphql/api'

function getBloodDonorEntries(data) {
  return data ? data.blood_donor_entries.data.reverse() : []
}

export default function Hero(props) {
  const { data, errorMessage } = useBloodDonorEntries()
  const [BloodDonorEntries, setBloodDonorEntries] = useState([])
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [bloodGroup, setbloodGroup] = useState('')
  const [emailId, setemailId] = useState('')
  const [mobileNo, setmobileNo] = useState('')
  const [state, setstate] = useState('')
  const [city, setcity] = useState('')

  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!BloodDonorEntries.length) {
      setBloodDonorEntries(getBloodDonorEntries(data))
    }
  }, [data, BloodDonorEntries.length])

  function handleSubmit(event) {
    event.preventDefault()
    if (firstName.trim().length === 0) {
      alert('Please provide first name')
      return
    }
    if (lastName.trim().length === 0) {
      alert('Please provide last name')
      return
    }

    if (emailId.trim().length === 0) {
      alert('Please provide email id')
      return
    }
    if (mobileNo.trim().length === 0) {
      alert('Please provide mobile number')
      return
    }
    if (bloodGroup.trim().length === 0) {
      alert('Please provide blood group')
      return
    }
    if (state.trim().length === 0) {
      alert('Please provide state')
      return
    }
    if (city.trim().length === 0) {
      alert('Please provide city')
      return
    }

    setSubmitting(true)
    createBloodDonorEntry(firstName, lastName, bloodGroup, emailId, mobileNo, state, city)
      .then((data) => {
        BloodDonorEntries.unshift(data.data.createBloodDonorEntry)
        setfirstName('')
        setlastName('')
        setbloodGroup('')
        setemailId('')
        setmobileNo('')
        setstate('')
        setcity('')
        setBloodDonorEntries(BloodDonorEntries)
        alert('Details saved successfully')
        setSubmitting(false)
      })
      .catch((error) => {
        console.log(`boo :( ${error}`)
        alert('🤷‍♀️')
        setSubmitting(false)
      })
  }

  function handlelastNameChange(event) {
    setlastName(event.target.value)
  }

  function handlefirstNameChange(event) {
    setfirstName(event.target.value)
  }

  function handlebloodGroupChange(event) {
    setbloodGroup(event.target.value)
  }

  function handleemailIdChange(event) {
    setemailId(event.target.value)
  }
  function handlemobileNoChange(event) {
    setmobileNo(event.target.value)
  }

  function handlestateChange(event) {
    setstate(event.target.value)
  }

  function handlecityChange(event) {
    setcity(event.target.value)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid">
            <div className="mt-5 md:mt-0 md:col-span-1">
              <form onSubmit={handleSubmit}>
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
                          onChange={handlefirstNameChange}
                          value={firstName}
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
                          onChange={handlelastNameChange}
                          value={lastName}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-3">
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
                          onChange={handlebloodGroupChange}
                          value={bloodGroup}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        >
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
                          onChange={handleemailIdChange}
                          value={emailId}
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
                          onChange={handlemobileNoChange}
                          value={mobileNo}
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
                          onChange={handlestateChange}
                          value={state}
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
                          onChange={handlecityChange}
                          value={city}
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
