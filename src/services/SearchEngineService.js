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
  refreshLinks() {
    return apiClient.get('/refresh-links').then((res) => {
      console.log('REGENERATED LINKS', res.data)
      return res.data
    })
  },
  refreshVoters() {
    return apiClient.get('/refresh-voters').then((res) => {
      console.log('REGENERATED VOTERS', res.data)
      return res.data
    })
  },
  getLinks() {
    return apiClient.get('/links').then((res) => {
      console.log('LINKS', res.data)
      return res.data
    })
  },
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
