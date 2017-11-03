<template>
    <div class="row">
        <div class="col s12">
            <h5>{{ lead.email }}</h5>
        </div>

        <div class="col s6">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Informações coletadas</span>
                    <table>
                        <thead>
                            <tr>
                                <th>campo</th>
                                <th>valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in lead.data">
                                <td>{{ data.label }}</td>
                                <td>{{ data.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="col s6">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Listas ativas</span>
                    <table>
                        <thead>
                            <tr>
                                <th>titulo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in lead.lists">
                                <td>{{ list.title }}</td>
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
    lead: function () {
      return this.$store.state.lead.lead
    }
  },
  mounted: function () {
    this.$store.dispatch('getOneLead', this.$route.params.id)
  }
}
</script>
