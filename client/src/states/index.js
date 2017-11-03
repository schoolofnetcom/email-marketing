import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import email from './modules/email'
import list from './modules/list'
import lead from './modules/lead'

window.axios = require('axios')
window.axios.defaults.baseURL = process.env.SERVER
window.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  modules: {
    user: user,
    email: email,
    list: list,
    lead: lead
  }
}

Vue.use(Vuex)
export default new Vuex.Store(config)
