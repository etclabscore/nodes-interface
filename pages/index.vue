<template>
  <v-row justify="center" align="center" class="pa-0" no-gutters>
    <v-col cols="12" md="8" sm="12" class="text-center py-12">
      <h2>{{ $t('home.title') }}</h2>
      <table-chart-card
        :title="$t('home.clients')"
        :table="nodes.clients.table"
        :labels="$store.state.nodes.clients.chart.labels"
        :series="$store.state.nodes.clients.chart.series"
        :total="totalNodes"
        icon="mdi-console"
        to="client"
      />
      <table-chart-card
        :title="$t('home.forkIds')"
        :table="nodes.forkIds.table"
        :labels="nodes.forkIds.chart.labels"
        :series="nodes.forkIds.chart.series"
        :total="totalNodes"
        icon="mdi-directions-fork"
        to="fork"
      />
      <table-chart-card
        :title="$t('home.protocols')"
        :table="nodes.protocols.table"
        :labels="nodes.protocols.chart.labels"
        :series="nodes.protocols.chart.series"
        :total="totalNodes"
        icon="mdi-handshake"
        to="protocol"
      />
    </v-col>
  </v-row>
</template>

<script>
import TableChartCard from '~/components/TableChartCard.vue'

export default {
  name: 'Home',
  components: {
    TableChartCard,
  },
  async fetch() {
    await this.$store.dispatch('nodes/set_nodes')
  },
  computed: {
    totalNodes() {
      return this.$store.state.nodes.raw.length
    },
    nodes() {
      return this.$store.state.nodes
    },
  },
}
</script>
