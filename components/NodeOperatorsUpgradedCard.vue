<template>
  <table-chart-card
    :title="$t('nodeOperatorsUpgradedCard.title')"
    :table="operators.upgradedOperators.table"
    :labels="operators.upgradedOperators.chart.labels"
    :series="operators.upgradedOperators.chart.series"
    :total="operators.upgradedOperators.total"
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
  name: 'NodeOperatorsUpgradedCard',
  components: {
    TableChartCard,
  },
  props: {
    operators: {
      type: Object,
      required: true,
    },
  },
}
</script>
