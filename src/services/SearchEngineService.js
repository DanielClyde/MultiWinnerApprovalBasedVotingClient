import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getVoters() {
    return apiClient.get('/voters').then((res) => {
      console.log('VOTERS', res.data)
      return res.data
    })
  },
  getSearchTerms() {
    return apiClient.get('/search-terms').then((res) => {
      console.log('SEARCH TERMS', res.data)
      return res.data
    })
  },
  getSearchResults(term, abcRule, numOfResults) {
    return apiClient
      .get(
        `/results?&abcRule=${abcRule}&term=${term}&numOfResults=${numOfResults}`
      )
      .then((res) => {
        console.log('RESULTS', res.data)
        return res.data
      })
  },
}
