import { createStore } from 'vuex'
import SearchEngineService from '@/services/SearchEngineService'

export default createStore({
  state: {
    voters: [],
    simulationResults: {
      winningLinks: [],
      losingLinks: [],
      totalSocialWelfare: 0,
    },
    searchTerms: [],
  },
  getters: {},
  mutations: {
    SET_VOTERS(state, voters) {
      state.voters = voters
    },
    SET_SEARCH_TERMS(state, searchTerms) {
      state.searchTerms = searchTerms
    },
    SET_SEARCH_RESULTS(state, results) {
      state.voters = results.voters
      state.simulationResults.winningLinks = results.winning_links
      state.totalSocialWelfare = results.total_utility
    },
  },
  actions: {
    fetchVoters({ commit }) {
      SearchEngineService.getVoters().then((voters) => {
        commit('SET_VOTERS', voters)
      })
    },
    fetchSearchTerms({ commit }) {
      SearchEngineService.getSearchTerms().then((terms) => {
        commit('SET_SEARCH_TERMS', terms)
      })
    },
    fetchResults({ commit }, form) {
      console.log(form)
      SearchEngineService.getSearchResults(form.searchTerm, form.abcRule).then(
        (results) => {
          commit('SET_SEARCH_RESULTS', results)
        }
      )
    },
  },
  modules: {},
})
