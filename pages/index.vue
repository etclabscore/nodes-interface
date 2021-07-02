<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col
      cols="12"
      :class="{
        'pa-1': true,
        'pb-1': true,
        'pt-12': isMobile,
        'pt-1': !isMobile,
      }"
    >
      <resizable-drawer id="charts" side="right" :dark="darkmode">
        <v-toolbar v-if="isMobile">
          <v-btn icon @click="$store.dispatch('drawers/toggleCharts')"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>
        <table-chart-card
          :title="$t('home.clients')"
          :table="nodes.clients.table"
          :labels="nodes.clients.chart.labels"
          :series="nodes.clients.chart.series"
          :total="totalNodes"
          icon="mdi-console"
          to="client"
          class="mr-1 mb-1 mt-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('home.forkIds')"
          :table="nodes.forkIds.table"
          :labels="nodes.forkIds.chart.labels"
          :series="nodes.forkIds.chart.series"
          :total="totalNodes"
          icon="mdi-directions-fork"
          to="fork"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('home.protocols')"
          :table="nodes.protocols.table"
          :labels="nodes.protocols.chart.labels"
          :series="nodes.protocols.chart.series"
          :total="totalNodes"
          icon="mdi-handshake"
          to="protocol"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
      </resizable-drawer>
      <node-table
        :nodes="nodes.raw"
        :pagination="true"
        :title="$t('home.title')"
        :breadcrumbs="breadcrumbs"
      />
    </v-col>
  </v-row>
</template>

<script>
import NodeTable from '~/components/NodeTable.vue'
import TableChartCard from '~/components/TableChartCard.vue'
import ResizableDrawer from '~/components/app/ResizableDrawer.vue'

export default {
  name: 'Home',
  components: {
    NodeTable,
    TableChartCard,
    ResizableDrawer,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: 'ETC Mainnet',
          disabled: true,
          to: '/',
        },
        {
          text: 'Nodes',
          disabled: true,
          to: '/',
        },
      ],
    }
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
    isMobile() {
      return this.$store.state.mobile
    },
    darkmode() {
      return this.$vuetify.theme.dark
    },
  },
}
</script>
