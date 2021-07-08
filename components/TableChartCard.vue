<template>
  <v-card tile>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div style="width: 100%; max-width: 320px">
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
        width="256"
        type="pie"
        :options="getChartOptions()"
        :series="series"
        class="my-3"
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
      }
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
