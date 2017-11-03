let qs = require('qs')

export default {
  state: {
    emails: [],
    email: {}
  },
  mutations: {
    updateEmails (state, data) {
      state.emails = data
    },
    updateEmail (state, data) {
      state.email = data
    }
  },
  actions: {
    getAll (context) {
      return window.axios.get('/api/campaigns').then((response) => {
        context.commit('updateEmails', response.data.data)
        return response
      })
    },
    getOne (context, id) {
      return window.axios.get('/api/campaigns/' + id).then((response) => {
        context.commit('updateEmail', response.data.data)
        return response
      })
    },
    insert (context, data) {
      return window.axios.post('/api/campaigns', qs.stringify(data)).then((response) => {
        return response
      })
    },
    update (context, data) {
      return window.axios.put('/api/campaigns/' + data._id, qs.stringify(data)).then((response) => {
        return response
      })
    },
    remove (context, id) {
      return window.axios.delete('/api/campaigns/' + id).then((response) => {
        return response
      })
    }
  }
}
