import { createStore } from 'vuex'
import SearchEngineService from '@/services/SearchEngineService'

export default createStore({
  state: {
    voters: [],
    links: [],
    simulationResults: {
      winningLinks: [],
      losingLinks: [],
      totalSocialWelfare: -1,
      totalRepresentation: -1,
    },
    searchTerms: [],
  },
  getters: {},
  mutations: {
    SET_VOTERS(state, voters) {
      state.voters = voters
    },
    SET_LINKS(state, links) {
      state.links = links
    },
    SET_SEARCH_TERMS(state, searchTerms) {
      state.searchTerms = searchTerms
    },
    SET_SEARCH_RESULTS(state, results) {
      state.voters = results.voters.map((v, i) => {
        v.utility = results.voterUtilities[i]
        v.represented = results.voterRepresentation[i]
        return v
      })
      state.simulationResults.winningLinks = results.winningLinks
      state.simulationResults.totalSocialWelfare = results.totalUtility
      state.simulationResults.totalRepresentation = results.totalRepresentation
    },
  },
  actions: {
    fetchVoters({ commit }) {
      SearchEngineService.getVoters().then((voters) => {
        commit('SET_VOTERS', voters)
      })
    },
    fetchLinks({ commit }) {
      SearchEngineService.getLinks().then((links) => {
        commit('SET_LINKS', links)
      })
    },
    refreshVoters({ commit }) {
      commit('SET_SEARCH_RESULTS', {
        winningLinks: [],
        losingLinks: [],
        totalSocialWelfare: -1,
        voters: [],
      })
      SearchEngineService.refreshVoters().then((voters) => {
        commit('SET_VOTERS', voters)
      })
    },
    refreshLinks({ commit }) {
      commit('SET_SEARCH_RESULTS', {
        winningLinks: [],
        losingLinks: [],
        totalSocialWelfare: -1,
        voters: [],
      })
      SearchEngineService.refreshLinks().then((links) => {
        commit('SET_LINKS', links)
      })
    },
    fetchSearchTerms({ commit }) {
      SearchEngineService.getSearchTerms().then((terms) => {
        commit('SET_SEARCH_TERMS', terms)
      })
    },
    fetchResults({ commit }, form) {
      SearchEngineService.getSearchResults(
        form.searchTerm,
        form.abcRule,
        form.numOfResults
      ).then((results) => {
        commit('SET_SEARCH_RESULTS', results)
      })
    },
  },
  modules: {},
})
