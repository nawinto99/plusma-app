import { useState, useEffect } from 'react'
import { useBloodDonorEntries } from '@/graphql/api'

function getBloodDonorEntries(data) {
  return data ? data.blood_donor_entries.data.reverse() : []
}

export function BloodSeeker(props) {
  const { data, errorMessage } = useBloodDonorEntries()
  const [BloodDonorEntries, setBloodDonorEntries] = useState([])

  useEffect(() => {
    if (!BloodDonorEntries.length) {
      setBloodDonorEntries(getBloodDonorEntries(data))
    }
  }, [data, BloodDonorEntries.length])

  return (
    <>
      

      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-gray-800 text-left">
              <th className="font-bold text-sm uppercase px-6 py-4 text-center">Name</th>
              <th className="font-bold text-sm uppercase px-6 py-4 text-center">Mobile</th>
              <th className="font-bold text-sm uppercase px-6 py-4 text-center">Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {errorMessage ? (
              <p>{errorMessage}</p>
            ) : (
              BloodDonorEntries.map((entry) => {
                return (
                  <tr
                    key={entry._id}
                    className="text-gray-500 text-sm font-semibold tracking-wide text-center"
                  >
                    <td className="px-6 py-2">
                      <p className="text-gray-600 font-bold">
                        {entry.first_name + ' ' + entry.last_name}
                      </p>
                      <p>{entry.blood_group}</p>
                    </td>
                    <td className="px-6 py-2">
                      <p>{entry.mobile_no}</p>
                    </td>
                    <td className="px-6 py-2">{entry.email_id}</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
