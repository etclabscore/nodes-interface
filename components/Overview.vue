<template>
  <span class="pa-0 ma-0">
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
        :country-data="countries"
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
      :no-label-text="$t('nodes.unknown')"
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
      :no-label-text="$t('nodes.none')"
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
      :no-label-text="$t('nodes.disabled')"
      icon="mdi-handshake"
      class="mr-1 mb-1"
      style="margin-left: 6px"
    />
  </span>
</template>

<script>
import WorldMap from 'vue-world-map-ms'
import TableChartCard from '~/components/TableChartCard.vue'

export default {
  name: 'Overview',
  components: {
    TableChartCard,
    WorldMap,
  },
  props: {
    nodes: {
      type: Object,
      required: true,
    },
    countries: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showMapOverlay: false,
      mapOverlayCountry: '',
      mapOverlayCount: 0,
    }
  },
  computed: {
    totalNodes() {
      return this.nodes.raw.length
    },
  },
  methods: {
    onMouseEnterMapCountry(countryCode) {
      if (this.countries[countryCode]) {
        this.mapOverlayCountry = countryCode + ': '
        this.mapOverlayCount = this.countries[countryCode]
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
