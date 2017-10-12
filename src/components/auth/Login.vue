<template>
  <div class="row">
      <div class="col s6">
          <div class="card">
              <div class="card-content">
                  <span class="card-title">Autenticação</span>
                  <form @submit.prevent="userLogin()">
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="email" type="email" v-model="login.username" class="validate">
                              <label for="email">Email</label>
                          </div>
                      </div>
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="password" type="password" v-model="login.password" class="validate">
                              <label for="password">Senha</label>
                          </div>
                      </div>

                      <button class="btn" type="submit">
                          Acessar <i class="material-icons right">send</i>
                      </button>
                  </form>
              </div>
          </div>
      </div>
      <div class="col s6">
          <div class="card">
              <div class="card-content">
                  <span class="card-title">Registro</span>
                  <form @submit.prevent="userRegister()">
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="name" type="text" v-model="register.name" class="validate">
                              <label for="name">nome</label>
                          </div>
                      </div>
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="email" type="email" v-model="register.email" class="validate">
                              <label for="email">Email</label>
                          </div>
                      </div>
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="account_anme" type="text" v-model="register.account_name" class="validate">
                              <label for="account_anme">Nome da conta</label>
                          </div>
                      </div>
                      <div class="row">
                          <div class="input-field col s12">
                              <input id="password_register" type="password" v-model="register.password" class="validate">
                              <label for="password_register">Senha</label>
                          </div>
                      </div>

                      <button class="btn" type="submit">
                          Registrar-se <i class="material-icons right">send</i>
                      </button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      login: {},
      register: {}
    }
  },
  methods: {
    userLogin () {
      this.$store.dispatch('authentication', this.login).then(() => {
        this.$router.push({path: '/'})
      })
    },
    userRegister () {
      this.$store.dispatch('register', this.register).then(() => {
        this.$router.push({path: '/'})
      })
    }
  }
}
</script>

