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
    </div>
</template>

<script>
export default {
  computed: {
    email: function () {
      return this.$store.state.email.email
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
  }
}
</script>
