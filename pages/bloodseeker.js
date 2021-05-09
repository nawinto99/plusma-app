import Image from 'next/image'

const blood_donors = [
  {
    first_name: 'Naveen',
    last_name: 'Reddy',
    blood_group: 'AB+',
    email_id: 'dummy@dummy.com',
    mobile_no: '8888888888888888',
    state: 'Andhra Pradesh',
    city: 'Nellore',
    image:'/img/blooddonor.png'
  },
  // More people...
]

export default function BloodSeeker() {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-3xl rounded-3xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Available
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blood_donors.map((blood_donors) => (
                  <tr key={blood_donors.email_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image className="rounded-full" src={blood_donors.image} alt="logo" height={30} width={30} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {blood_donors.first_name + ' ' + blood_donors.last_name}
                          </div>
                          <div className="text-sm text-gray-500">{blood_donors.email_id}</div>
                          <div className="text-sm text-gray-500">{blood_donors.mobile_no}</div>
                          <div className="text-sm text-gray-500">{blood_donors.blood_group}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.state}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tbody className="bg-white divide-y divide-gray-200">
                {blood_donors.map((blood_donors) => (
                  <tr key={blood_donors.email_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <img className="h-8 w-8 rounded-full" src={blood_donors.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {blood_donors.first_name + ' ' + blood_donors.last_name}
                          </div>
                          <div className="text-sm text-gray-500">{blood_donors.email_id}</div>
                          <div className="text-sm text-gray-500">{blood_donors.mobile_no}</div>
                          <div className="text-sm text-gray-500">{blood_donors.blood_group}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.state}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tbody className="bg-white divide-y divide-gray-200">
                {blood_donors.map((blood_donors) => (
                  <tr key={blood_donors.email_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <img className="h-8 w-8 rounded-full" src={blood_donors.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {blood_donors.first_name + ' ' + blood_donors.last_name}
                          </div>
                          <div className="text-sm text-gray-500">{blood_donors.email_id}</div>
                          <div className="text-sm text-gray-500">{blood_donors.mobile_no}</div>
                          <div className="text-sm text-gray-500">{blood_donors.blood_group}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.state}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{blood_donors.city}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Yes
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>




            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
