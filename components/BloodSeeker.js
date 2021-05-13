export function BloodSeeker() {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="text-gray-600 text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Full Name</th>
              <th className="font-semibold text-sm uppercase px-6 py-4">Mobile</th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Email</th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">Available</th>
              <th className="font-semibold text-sm uppercase px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="font-semibold text-sm text-center">
                    <p>Naveen</p>
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">AB+</p>
                  </div>
                </div>
              </td>
              <td className="text-gray-500 text-sm font-semibold tracking-wide text-center">
                <p>88888888888888888</p>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-gray-500 text-sm font-semibold tracking-wide text-center">
                  dummy@dummy.com
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full">
                  Yes
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="text-purple-800 hover:underline">
                  Edit
                </a>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="font-semibold text-sm text-center">
                    <p>Naveen</p>
                    <p className="text-gray-500 text-sm font-semibold tracking-wide">AB+</p>
                  </div>
                </div>
              </td>
              <td className="text-gray-500 text-sm font-semibold tracking-wide text-center">
                <p>88888888888888888</p>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-gray-500 text-sm font-semibold tracking-wide text-center">
                  dummy@dummy.com
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full">
                  Yes
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <a href="#" className="text-purple-800 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
