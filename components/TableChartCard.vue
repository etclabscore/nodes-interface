<template>
  <v-card tile class="table-chart-card">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div :class="{ 'w-100': isMobile, 'w-auto': !isMobile }">
        <v-card-title>
          <v-icon class="mr-1">{{ icon }}</v-icon>
          {{ title }}
        </v-card-title>
        <v-skeleton-loader :loading="loading" type="table-heading,text@3">
          <v-simple-table style="width: 100%">
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">{{ $t('home.totalNodes') }}</th>
                  <th class="text-right" :colspan="inlineColsNumber">
                    {{ total }}
                  </th>
                </tr>
                <template v-if="inlineColNames.length > 0">
                  <tr>
                    <th class="text-left"></th>
                    <th
                      v-for="name of inlineColNames"
                      :key="name"
                      class="text-right"
                    >
                      {{ name }}
                    </th>
                  </tr>
                </template>
              </thead>
              <tbody>
                <tr v-for="(count, name) of table" :key="name">
                  <template v-if="!to">
                    <td class="text-left">
                      {{ name === '-' ? noLabelText : name }}
                    </td>
                  </template>
                  <template v-else>
                    <td class="text-left">
                      <nuxt-link :to="'/' + to + '/' + name">
                        {{ name }}
                      </nuxt-link>
                    </td>
                  </template>
                  <template v-if="typeof count === 'object'">
                    <td
                      v-for="num of Object.values(count)"
                      :key="`${name}/${num}`"
                      class="text-right"
                    >
                      {{ num }} ({{
                        percent(num, rowTotal(Object.values(count)))
                      }}%)
                    </td>
                  </template>
                  <template v-else>
                    <td class="text-right">
                      {{ count }} ({{ percent(count, total) }}%)
                    </td>
                  </template>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-skeleton-loader>
      </div>
      <v-skeleton-loader :loading="loading" type="avatar" class="my-3">
        <apexchart
          v-if="!isMobile"
          max-width="256"
          type="pie"
          :options="getChartOptions()"
          :series="series"
        ></apexchart>
      </v-skeleton-loader>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'TableChartCard',
  props: {
    icon: {
      type: String,
      default() {
        return 'mdi-console'
      },
    },
    title: {
      type: String,
      default() {
        return ''
      },
    },
    table: {
      type: Object,
      required: true,
    },
    labels: {
      type: Array,
      default() {
        return []
      },
    },
    series: {
      type: Array,
      default() {
        return []
      },
    },
    total: {
      type: Number,
      required: true,
    },
    to: {
      type: String,
      default() {
        return null
      },
    },
    noLabelText: {
      type: String,
      default() {
        return '-'
      },
    },
    colors: {
      type: Array,
      default() {
        return ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
      },
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
    loading() {
      return !this.series || this.series.length === 0
    },
    options() {
      const self = this
      return {
        chart: {
          id: this.title.toLowerCase() + '-chart',
          width: '100%',
          type: 'pie',
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        dataLabels: {
          formatter(val, opts) {
            let name = opts.w.globals.labels[opts.seriesIndex]
            if (name === '-') {
              name = self.noLabelText
            }
            return [name, val.toFixed(1) + '%']
          },
        },
        legend: {
          show: false,
        },
        colors: this.colors,
      }
    },
    inlineColsNumber() {
      const vals = Object.values(this.table)
      return typeof vals[0] === 'object' ? Object.values(vals[0]).length : 1
    },
    inlineColNames() {
      const vals = Object.values(this.table)
      if (typeof vals[0] === 'object') {
        return Object.keys(vals[0])
      }
      return []
    },
  },
  methods: {
    percent(count, total) {
      return ((count / total) * 100).toFixed(1)
    },
    rowTotal(vals) {
      return vals.reduce((a, b) => a + b, 0)
    },
    getChartOptions() {
      return {
        ...this.options,
        labels: this.labels,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.table-chart-card {
  :deep(.v-skeleton-loader__avatar) {
    width: 200px;
    height: 200px;
    aspect-ratio: 1;
    margin-right: 12px;
  }

  :deep(.apexcharts-canvas) {
    min-width: 254px;
  }
}
</style>
