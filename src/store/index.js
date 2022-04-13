import { createStore } from 'vuex'
import SearchEngineService from '@/services/SearchEngineService'

export default createStore({
  state: {
    voters: [],
    simulationResults: {
      searchResults: [],
      totalSocialWelfare: 0,
    },
  },
  getters: {},
  mutations: {
    SET_VOTERS(state, voters) {
      state.voters = voters
    },
  },
  actions: {
    fetchVoters({ commit }) {
      SearchEngineService.getVoters().then((voters) => {
        commit('SET_VOTERS', voters)
      })
    },
  },
  modules: {},
})
