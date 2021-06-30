<template>
  <v-card tile class="mt-2">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div style="width: 100%">
        <v-card-title>
          <v-icon class="mr-1">{{ icon }}</v-icon>
          {{ title }}
        </v-card-title>
        <v-simple-table style="width: 100%">
          <template #default>
            <thead>
              <tr>
                <th class="text-left">{{ $t('home.totalNodes') }}</th>
                <th class="text-right">{{ total }} (100%)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(count, name) of table" :key="name">
                <td class="text-left">{{ name }}</td>
                <td class="text-right">
                  {{ count }} ({{ percent(count, total) }}%)
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <apexchart
        v-if="!isMobile"
        width="320"
        type="pie"
        :options="getChartOptions()"
        :series="series"
        class="mt-3"
      ></apexchart>
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
  },
  data() {
    return {
      options: {
        chart: {
          id: this.title.toLowerCase() + '-chart',
          width: '100%',
          type: 'pie',
        },
        theme: {
          monochrome: {
            enabled: true,
          },
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
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          },
        },
        legend: {
          show: false,
        },
      },
    }
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
  },
  methods: {
    percent(count, total) {
      return ((count / total) * 100).toFixed(1)
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
