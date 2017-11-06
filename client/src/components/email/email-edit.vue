<template>
  <div class="row">
      <div class="col s12">
          <h5>Editando campanha</h5>
      </div>
      <div class="col s12">
          <a :href="'#/emails/view/' + email._id" class="btn">ver</a>
      </div>
      <div class="col s12">
          <div class="card grey lighten-4">
                <div class="card-content">
                    <form action="" @submit.prevent="save()">
                        <div class="input-field">
                            <input type="text" id="campanhaTitle" v-model="email.title">
                            <label for="campanhaTitle">Título</label>
                        </div>
                        <div class="input-field">
                            <textarea id="campanhaBody" rows="10" v-model="email.body" class="materialize-textarea"></textarea>
                            <label for="campanhaBody">Conteúdo</label>
                        </div>
                        <div class="input-field">
                            <input type="text" id="campanhaStart" v-model="email.start">
                            <label for="campanhaStart">Data de início</label>
                        </div>
                        <div class="input-filter">
                            <strong>Disparar para a lista:</strong>
                            <select multiple class="browser-default" v-model="email.lists">
                                <option v-for="list in lists" :value="list._id">{{ list.title }}</option>
                            </select>
                        </div>
                        <input type="submit" value="Salvar" class="btn">
                    </form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    email: function () {
      let email = this.$store.state.email.email
      email.lists = email.lists || []
      return email
    },
    lists: function () {
      return this.$store.state.list.lists
    }
  },
  methods: {
    save: function () {
      this.$store.dispatch('update', this.email).then(() => {
        this.$router.push('/emails/view/' + this.email._id)
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
    this.$store.dispatch('getAllList')
  }
}
</script>
