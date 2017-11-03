export default {
  state: {
    lists: [],
    list: {}
  },
  mutations: {
    updateLists (state, data) {
      state.lists = data
    },
    updateList (state, data) {
      state.list = data
    }
  },
  actions: {
    getAllList (context) {
      return window.axios.get('/api/lists').then((response) => {
        context.commit('updateLists', response.data.data)
        return response
      })
    }
  }
}
