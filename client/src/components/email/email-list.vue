<template>
    <div class="row">
        <div class="col s12">
            <h5>Gerenciamento de campanha</h5>
        </div>
        <div class="col m9">
            <div class="card grey lighten-4">
                <div class="card-content">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>titulo</th>
                                <th>status</th>
                                <th>inicio</th>
                                <th>lista</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(email, index) in emails">
                                <td>{{ index + 1 }}</td>
                                <td>{{ email.title }}</td>
                                <td>{{ email.status }}</td>
                                <td>{{ email.start }}</td>
                                <td>{{ email.list }}</td>
                                <td>
                                    <a :href="'#/emails/view/' + email._id" class="btn">ver</a>
                                    <a :href="'#/emails/edit/' + email._id" class="btn blue">editar</a>
                                    <a :href="'#/emails/remove/' + email._id" class="btn red">remover</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col m3">
            <div class="card lime">
                <div class="card-content">
                    <span class="card-title">
                        Deseja iniciar uma nova campanha?
                    </span>

                    <p>
                        <a href="#/email/new" class="btn blue">começar</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    emails: function () {
      return this.$store.state.email.emails
    }
  },
  mounted () {
    this.$store.dispatch('getAll')
  }
}
</script>
