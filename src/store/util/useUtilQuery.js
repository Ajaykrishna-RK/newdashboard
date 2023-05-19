import {useQuery} from 'react-query'
import {getCountriesList, 
  // getStatesList,
  //  getCurrencyList
  } from './utilUrls'

const Countries_list = () => {
  return useQuery(['countriesList'], () => getCountriesList(), {
    staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    poll: 500,
  })
}

// const States_list = (id) => {
//   return useQuery(['statesList', id], () => getStatesList(id), {
//     staleTime: 30000,
//     keepPreviousData: true,
//     refetchOnWindowFocus: false,
//     poll: 500,
//     enabled: id !== undefined,
//   })
// }

// const Currencies_list = () => {
//   return useQuery(['currenciesList'], () => getCurrencyList(), {
//     staleTime: 30000,
//     keepPreviousData: true,
//     refetchOnWindowFocus: false,
//     poll: 500,
//   })
// }

const useUtilQuery = {
  Countries_list,
  // States_list,
  // Currencies_list,
}

export default useUtilQuery
