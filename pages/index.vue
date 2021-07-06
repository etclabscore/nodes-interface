<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col cols="12" class="pa-1">
      <resizable-drawer
        v-if="nodes.raw.length > 0"
        id="charts"
        side="right"
        :dark="darkmode"
      >
        <v-toolbar v-if="isMobile">
          <v-btn icon @click="$store.dispatch('drawers/toggleCharts')"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>
        <v-card tile class="mr-1 mb-1 mt-1" style="margin-left: 6px">
          <v-sheet
            v-if="showMapOverlay"
            hide-overlay
            persistent
            width="180"
            style="position: absolute; bottom: 0"
            class="bg-0"
          >
            <v-card tile class="bg-0">
              <v-card-text color="primary"
                >{{ mapOverlayCountry }}
                {{ $tc('map.nodes', mapOverlayCount) }}</v-card-text
              >
            </v-card>
          </v-sheet>
          <world-map
            low-color="#b1efff"
            high-color="#14d0ff"
            :country-data="countryData"
            default-country-fill-color="#5a5a5a"
            :country-colors="false"
            :show-color-bar="true"
            :show-overlay="showMapOverlay"
            country-stroke-color="#222"
            @mouseenter="onMouseEnterMapCountry"
            @mouseleave="onMouseLeaveMapCountry"
          />
        </v-card>
        <table-chart-card
          :title="$t('home.clients')"
          :table="nodes.clients.table"
          :labels="nodes.clients.chart.labels"
          :series="nodes.clients.chart.series"
          :total="totalNodes"
          icon="mdi-console"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('home.forkIdCurrent')"
          :table="nodes.forks.current.table"
          :labels="nodes.forks.current.chart.labels"
          :series="nodes.forks.current.chart.series"
          :total="totalNodes"
          icon="mdi-directions-fork"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('home.forkIdNext')"
          :table="nodes.forks.next.table"
          :labels="nodes.forks.next.chart.labels"
          :series="nodes.forks.next.chart.series"
          :total="totalNodes"
          icon="mdi-directions-fork"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('nodes.protocolEth')"
          :table="nodes.protocols.eth.table"
          :labels="nodes.protocols.eth.chart.labels"
          :series="nodes.protocols.eth.chart.series"
          :total="totalNodes"
          icon="mdi-handshake"
          class="mr-1 mb-1"
          style="margin-left: 6px"
        />
        <table-chart-card
          :title="$t('nodes.protocolSnap')"
          :table="nodes.protocols.snap.table"
          :labels="nodes.protocols.snap.chart.labels"
          :series="nodes.protocols.snap.chart.series"
          :total="totalNodes"
          icon="mdi-handshake"
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
import WorldMap from 'vue-world-map-ms'
import NodeTable from '~/components/NodeTable.vue'
import TableChartCard from '~/components/TableChartCard.vue'
import ResizableDrawer from '~/components/app/ResizableDrawer.vue'

export default {
  name: 'Home',
  components: {
    NodeTable,
    TableChartCard,
    ResizableDrawer,
    WorldMap,
  },
  data() {
    return {
      showMapOverlay: false,
      mapOverlayCountry: '',
      mapOverlayCount: 0,
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
    countryData() {
      return this.$store.state.nodes.countries
    },
  },
  methods: {
    onMouseEnterMapCountry(countryCode) {
      if (this.countryData[countryCode]) {
        this.mapOverlayCountry = countryCode + ': '
        this.mapOverlayCount = this.countryData[countryCode]
        this.showMapOverlay = true
      }
    },
    onMouseLeaveMapCountry() {
      this.showMapOverlay = false
      this.mapOverlayCountry = ''
      this.mapOverlayCount = 0
    },
  },
}
</script>
