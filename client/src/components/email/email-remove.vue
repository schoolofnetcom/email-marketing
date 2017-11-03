<template>
    <div class="row">
        <div class="col s12">
            <h5>Remoção de campanha</h5>
        </div>
        <div class="col s12">
            <a :href="'#/emails/view/' + email._id" class="btn blue">ver</a>
        </div>
        <div class="col s12">
            <div class="card red white-text">
                <div class="card-content">
                    <span class="card-title">Confirmação</span>
                    <p>Você confirma a remoção deste registro? Você não poderá desfazer esta ação</p>
                    <a href="" class="btn white black-text" @click.prevent="remove">sim</a>
                    <a href="#/email" class="btn black">não</a>
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
  methods: {
    remove: function () {
      if (confirm('Tem certeza?')) {
        this.$store.dispatch('remove', this.email._id).then(() => {
          this.$router.push('/email')
        })
      }
    }
  },
  mounted () {
    this.$store.dispatch('getOne', this.$route.params.id)
  }
}
</script>
