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

        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Ações em campanhas</span>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ação</th>
                                <th>campanha</th>
                                <th>data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(o, index) in lead.actions">
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <span v-if="o.action[0].typeAction === 'open'">abertura</span>
                                    <span v-if="o.action[0].typeAction === 'click'">click em link: <a :href="o.action[0].link" target="_blank">{{ o.action[0].link }}</a></span>
                                </td>
                                <td><a :href="'#/emails/view/' + o.campaign._id">{{ o.campaign.title }}</a></td>
                                <td>{{ o.action[0].date }}</td>
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
