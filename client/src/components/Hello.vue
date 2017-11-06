<template>
  <div class="hello">
    <div class="col s6">
      <div class="row">
        <div class="col s6">
          <div class="card blue white-text">
            <div class="card-content">
              <span class="card-title">Total de aberturas</span>
              <h1>{{ totals[0].opens }}</h1>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="card red white-text">
            <div class="card-content">
              <span class="card-title">Total de clicks</span>
              <h1>{{ totals[0].clicks }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col s6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Dados por campanha</span>
          <table>
            <thead>
              <tr>
                <th>campanha</th>
                <th>aberturas</th>
                <th>clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="campaign in campaigns">
                <td><a :href="'#/emails/'+ campaign.id">{{ campaign.title }}</a></td>
                <td>{{ campaign.opens }}</td>
                <td>{{ campaign.clicks }}</td>
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
    campaigns: function () {
      return this.$store.state.email.emails
    },
    totals: function () {
      return this.$store.state.email.totals
    }
  },
  mounted () {
    this.$store.dispatch('getAll')
    this.$store.dispatch('totals')
  }
}
</script>
