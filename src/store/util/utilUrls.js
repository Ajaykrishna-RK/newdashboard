import DataService from '../DataService'

const getCountriesList = async () => {
  let url = `common/countries/?limit=200`
  const data = await DataService.get(url)
  return data.data
}

// const getStatesList = async (id) => {
//   let url = `common/states/?country=${id}`
//   const data = await DataService.get(url)
//   return data.data
// }

// const getCurrencyList = async (id) => {
//   let url = `common/currencies/?limit=200`
//   const data = await DataService.get(url)
//   return data.data
// }

export {getCountriesList,

  //  getStatesList,
  // getCurrencyList

}
