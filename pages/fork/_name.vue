<template>
  <v-container v-if="!$fetchState.pending" fluid>
    <v-row>
      <v-col cols="12">
        <ForkCountdownCard :latest-block-number="liveStats.latestBlockNumber" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <LiveStatsTable
          :nodes="liveStats.raw"
          :last-updated="liveStats.now"
          :title="$t('liveStats.title')"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <ForkClientUpgraded :nodes="nodes" />
      </v-col>
      <v-col cols="12" md="6">
        <NodeOperatorsUpgradedCard :operators="operators" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(categoryOperators, category) in operators.raw"
        :key="category"
        cols="12"
        md="6"
      >
        <NodeOperatorsTable :operators="categoryOperators" :title="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ForkClientUpgraded from '~/components/ForkClientUpgraded.vue'
import ForkCountdownCard from '~/components/ForkCountdownCard.vue'
import LiveStatsTable from '~/components/LiveStatsTable.vue'
import NodeOperatorsTable from '~/components/NodeOperatorsTable.vue'
import NodeOperatorsUpgradedCard from '~/components/NodeOperatorsUpgradedCard.vue'

export default {
  name: 'SpiralForkStatus',
  components: {
    NodeOperatorsTable,
    NodeOperatorsUpgradedCard,
    LiveStatsTable,
    ForkCountdownCard,
    ForkClientUpgraded,
  },
  data() {
    return {
      tab: null,
    }
  },
  async fetch() {
    return await Promise.all([
      this.$store.dispatch('nodes/set_nodes'),
      this.$store.dispatch('operators/set_operators'),
      this.$store.dispatch('liveStats/set_live_stats'),
    ])
  },
  computed: {
    nodes() {
      return this.$store.state.nodes
    },
    operators() {
      return this.$store.state.operators
    },
    liveStats() {
      return this.$store.state.liveStats
    },
    isMobile() {
      return this.$store.state.mobile
    },
    darkmode() {
      return this.$vuetify.theme.dark
    },
    breadcrumbs() {
      return [
        {
          text: this.$t('operators.breadcrumb'),
          disabled: true,
          to: '/fork/spiral',
        },
      ]
    },
  },
  mounted() {
    this.$store.dispatch('liveStats/auto_polling')
  },
  destroyed() {
    this.$store.dispatch('liveStats/clear_auto_polling')
  },
}
</script>
