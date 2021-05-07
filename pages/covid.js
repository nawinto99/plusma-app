export default function Covid(props) {
  let {
    covidConfirmedAll,
    covidActiveAll,
    covidRecoveredAll,
    covidDeceasedAll,
    covidConfirmedDaily,
    covidRecoveredDaily,
    covidDeceasedDaily,
  } = props

  return (
    <>
      <div className="conatianer  mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-6">
          <div className="bg-white p-4 rounded-xl flex justify-around">
            <div className="flex flex-col text-justify">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 font-bold uppercase">
                confirmed
              </p>
              <p className="text-blue-500 font-bold uppercase">{covidConfirmedAll}</p>
            </div>

            <div className="border-t-4"></div>

            <div className="flex flex-col text-justify">
              <span className="text-success mr-2">
                <p className="text-green-500 font-bold uppercase">{covidConfirmedDaily}</p>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 italic font-semibold ">
                Today
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl flex justify-around">
            <div className="flex flex-col text-justify">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 font-bold uppercase">
                Active
              </p>
              <p className="text-blue-500 font-bold uppercase">{covidActiveAll}</p>
            </div>

            <div className="border-t-4"></div>

            <div className="flex flex-col text-justify">
              <span className="text-success mr-2">
                <p className="text-green-500 font-bold uppercase"> 0 </p>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 italic font-semibold ">
                Today
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl flex justify-around">
            <div className="flex flex-col text-justify">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 font-bold uppercase">
                Recovered
              </p>
              <p className="text-blue-500 font-bold uppercase">{covidRecoveredAll}</p>
            </div>

            <div className="border-t-4"></div>

            <div className="flex flex-col text-justify">
              <span className="text-success mr-2">
                <p className="text-green-500 font-bold uppercase"> {covidRecoveredDaily} </p>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 italic font-semibold ">
                Today
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl flex justify-around">
            <div className="flex flex-col text-justify">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 font-bold uppercase">
                Deceased
              </p>
              <p className="text-blue-500 font-bold uppercase">{covidDeceasedAll}</p>
            </div>

            <div className="border-t-4"></div>

            <div className="flex flex-col text-justify">
              <span className="text-success mr-2">
                <p className="text-red-500 font-bold uppercase"> {covidDeceasedDaily} </p>
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 italic font-semibold ">
                Today
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.covid19india.org/data.json`)
  const data = await res.json()

  let covidAPIStatewise = data['statewise']

  let covidConfirmedAll = covidAPIStatewise[0]['confirmed']
  let covidActiveAll = covidAPIStatewise[0]['active']
  let covidRecoveredAll = covidAPIStatewise[0]['recovered']
  let covidDeceasedAll = covidAPIStatewise[0]['deaths']

  let covidConfirmedDaily = covidAPIStatewise[0]['deltaconfirmed']
  let covidRecoveredDaily = covidAPIStatewise[0]['deltarecovered']
  let covidDeceasedDaily = covidAPIStatewise[0]['deltadeaths']

  return {
    props: {
      covidConfirmedAll,
      covidActiveAll,
      covidRecoveredAll,
      covidDeceasedAll,
      covidConfirmedDaily,
      covidRecoveredDaily,
      covidDeceasedDaily,
    },
  }
}
