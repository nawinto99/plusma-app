import useFetch from '../lib/useFetch'

function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}

/**
|--------------------------------------------------
| This GraphQL query returns an array of BloodDonor
| entries complete with both the provided and implicit
| data attributes.
|
| Learn more about GraphQL: https://graphql.org/learn/
|--------------------------------------------------
*/
export const useBloodDonorEntries = () => {
  const query = `query blood_donor_entries($size: Int) {
    blood_donor_entries(_size: $size) {
      data {
        _id
        _ts
        first_name
        last_name
        blood_group
        email_id
        mobile_no
        state
        city
      }
      after
    }
  }`
  const size = 100
  const { data, error } = useFetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  })

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  }
}

/**
|--------------------------------------------------
| This GraphQL mutation creates a new BloodDonorEntry
| with the requisite first Name handle and last_name arguments.
|
| It returns the stored data and includes the unique
| identifier (_id) as well as _ts (time created).
|
| The BloodDonor uses the _id value as the unique key
| and the _ts value to sort and display the date of
| publication.
|
| Learn more about GraphQL mutations: https://graphql.org/learn/queries/#mutations
|--------------------------------------------------
*/
export const createBloodDonorEntry = async (
  firstName,
  lastName,
  bloodGroup,
  emailId,
  mobileNo,
  state,
  city
) => {
  const query = `mutation CreateBloodDonorEntry(
    $firstName: String!, 
    $lastName: String!, 
    $bloodGroup: String!, 
    $emailId: String!, 
    $mobileNo: String!, 
    $state: String!,
    $city: String!
    ) 
    {
    createBloodDonorEntry(data: {
      first_name: $firstName,
      last_name: $lastName,
      blood_group: $bloodGroup,
      email_id: $emailId,
      mobile_no: $mobileNo,
      state: $state,
      city: $city
    }) {
      _id
      _ts
      first_name
      last_name
      blood_group
      email_id
      mobile_no
      state
      city
    }
  }`

  const res = await fetch(process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { firstName, lastName, bloodGroup, emailId, mobileNo, state, city },
    }),
  })
  const data = await res.json()

  return data
}
