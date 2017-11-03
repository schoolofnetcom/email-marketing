<template>
    <div class="row">
        <div class="col s12">
            <h5>Listas de disparo</h5>
        </div>
        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>titulo</th>
                                <th>quatidade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list, index) in lists">
                                <td>{{ index + 1}}</td>
                                <td>{{ list.title }}</td>
                                <td>{{ list.quantity }}</td>
                                <td>
                                    <a :href="'#/lists/' + list._id" class="btn">ver</a>
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
    lists: function () {
      return this.$store.state.list.lists
    }
  },
  mounted: function () {
    this.$store.dispatch('getAllList')
  }
}
</script>
