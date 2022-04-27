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
      return res.data
    })
  },
  refreshVoters() {
    return apiClient.get('/refresh-voters').then((res) => {
      return res.data
    })
  },
  getLinks() {
    return apiClient.get('/links').then((res) => {
      return res.data
    })
  },
  getVoters() {
    return apiClient.get('/voters').then((res) => {
      return res.data
    })
  },
  getSearchTerms() {
    return apiClient.get('/search-terms').then((res) => {
      return res.data
    })
  },
  getSearchResults(term, abcRule, numOfResults) {
    return apiClient
      .get(
        `/results?&abcRule=${abcRule}&term=${term}&numOfResults=${numOfResults}`
      )
      .then((res) => {
        return res.data
      })
  },
}
