<template>
    <div class="row">
        <div class="col s12">
            <h5>{{ email.title }} - campanha</h5>
        </div>
        <div class="col s12">
            <a :href="'#/emails/edit/' + email._id" class="btn blue">editar</a>
            <a :href="'#/emails/remove/' + email._id" class="btn red">remover</a>
        </div>
        <div class="col s6">
            <div class="card grey lighten-4">
                <div class="card-content">
                    <span class="card-title">Detalhes</span>
                    <table>
                        <tr>
                            <th>Título</th>
                            <td>{{ email.title }}</td>
                        </tr>
                        <tr>
                            <th>Data de disparo</th>
                            <td>{{ email.start }}</td>
                        </tr>
                        <tr>
                            <th>Aberturas</th>
                            <td>{{ email.opens }}</td>
                        </tr>
                        <tr>
                            <th>Cliques</th>
                            <td>{{ email.clicks }}</td>
                        </tr>
                        <tr>
                            <th>Descadastros</th>
                            <td>{{ email.unsubscribe }}</td>
                        </tr>
                        <tr>
                            <th>bounces</th>
                            <td>{{ email.bounces }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="col s6">
            <div class="card grey lighten-4">
                <div class="card-content">
                    <span class="card-title">Campanha enviada</span>
                    <iframe :src="rendered_mail" style="width: 100%; height: 300px; border: none"></iframe>
                </div>
            </div>
        </div>

        <div class="col s12">
            <div class="card grey lighten-4">
                <div class="card-content">
                    <span class="card-title">Leads enviados</span>

                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>email</th>
                                <th>listas</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(lead, index) in leads">
                                <td>{{ index + 1 }}</td>
                                <td>{{ lead.email }}</td>
                                <td>
                                    <div class="chip" v-for="chip in lead.lists">{{ chip.title }}</div>
                                </td>
                                <td>
                                    <a :href="'#/leads/' + lead._id" class="btn">ver</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  computed: {
    email: function () {
      return this.$store.state.email.email
    },
    leads: function () {
      return this.$store.state.lead.leads
    },
    rendered_mail: function () {
      return process.env.SERVER + '/campaigns/email-render/' + this.email._id
    }
  },
  methods: {
    getLeads: function () {
      if (this.email.lists) {
        let lists = this.email.lists.join(',')
        this.$store.dispatch('getAllLeads', lists)
      } else {
        setTimeout(this.getLeads(), 2000)
      }
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
    this.getLeads()
  }
}
</script>
