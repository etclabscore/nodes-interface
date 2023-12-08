<template>
  <table-chart-card
    :title="$t('upcomingForkCard.title')"
    :table="nodes.clientsForkAdoption.table"
    :labels="nodes.clientsForkAdoption.chart.labels"
    :series="nodes.clientsForkAdoption.chart.series"
    :total="totalNodes"
    :no-label-text="$t('nodes.none')"
    :colors="['#00E396', '#FD6A6A']"
    icon="mdi-directions-fork"
    class="mx-sm-1 mx-0 mb-1"
    style="margin-left: 6px"
  />
</template>

<script>
import TableChartCard from '~/components/TableChartCard.vue'

export default {
  name: 'ForkClientUpgraded',
  components: {
    TableChartCard,
  },
  props: {
    nodes: {
      type: Object,
      required: true,
    },
  },
  computed: {
    totalNodes() {
      return this.nodes.raw.length
    },
  },
}
</script>
