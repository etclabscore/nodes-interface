<template>
  <v-row justify="center" align="center" class="pa-0" no-gutters>
    <v-col cols="12" md="8" sm="12" class="text-center py-12">
      <h2>{{ $t('home.title') }}</h2>
      <v-card tile class="mt-4">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div style="width: 100%">
            <v-card-title>
              <v-icon class="mr-1">mdi-console</v-icon>
              {{ $t('home.clients') }}
            </v-card-title>
            <v-simple-table style="width: 100%">
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('home.totalNodes') }}</th>
                    <th class="text-right">{{ totalNodes }} (100%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(count, name) of nodes.clients.table" :key="name">
                    <td class="text-left">{{ name }}</td>
                    <td class="text-right">
                      {{ count }} ({{ percent(count, totalNodes) }}%)
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
            :options="getChartOptions('clients')"
            :series="getChartSeries('clients')"
            class="mt-3"
          ></apexchart>
        </div>
      </v-card>
      <v-card tile class="mt-2">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div style="width: 100%">
            <v-card-title>
              <v-icon class="mr-1">mdi-directions-fork</v-icon>
              {{ $t('home.forkIds') }}
            </v-card-title>
            <v-simple-table style="width: 100%">
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('home.totalNodes') }}</th>
                    <th class="text-right">{{ totalNodes }} (100%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(count, name) of forkIds.table" :key="name">
                    <td class="text-left">{{ name }}</td>
                    <td class="text-right">
                      {{ count }} ({{ percent(count, totalNodes) }}%)
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
            :options="getChartOptions('forkIds')"
            :series="getChartSeries('forkIds')"
            class="mt-3"
          ></apexchart>
        </div>
      </v-card>
      <v-card tile class="mt-2">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div style="width: 100%">
            <v-card-title>
              <v-icon class="mr-1">mdi-handshake</v-icon>
              {{ $t('home.protocolVersions') }}
            </v-card-title>
            <v-simple-table style="width: 100%">
              <template #default>
                <thead>
                  <tr>
                    <th class="text-left">{{ $t('home.totalNodes') }}</th>
                    <th class="text-right">{{ totalNodes }} (100%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(count, name) of protocols.table" :key="name">
                    <td class="text-left">{{ name }}</td>
                    <td class="text-right">
                      {{ count }} ({{ percent(count, totalNodes) }}%)
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
            :options="getChartOptions('protocols')"
            :series="getChartSeries('protocols')"
            class="mt-3"
          ></apexchart>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tab: null,
      charts: {
        clients: {
          chart: {
            id: 'client-chart',
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
        forkIds: {
          chart: {
            id: 'forkId-chart',
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
        protocols: {
          chart: {
            id: 'protocol-chart',
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
      },
    }
  },
  async fetch() {
    await this.$store.dispatch('nodes/set_nodes')
  },
  computed: {
    params() {
      return this.$store.state.params
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
    totalNodes() {
      return this.$store.state.nodes.raw.length
    },
    nodes() {
      return this.$store.state.nodes
    },
    clients() {
      return this.$store.state.nodes.clients
    },
    forkIds() {
      return this.$store.state.nodes.forkIds
    },
    protocols() {
      return this.$store.state.nodes.protocols
    },
  },
  methods: {
    percent(count, total) {
      return ((count / total) * 100).toFixed(1)
    },
    getChartOptions(chart) {
      return {
        ...this.charts[chart],
        labels: this.$store.state.nodes[chart].chart.labels,
      }
    },
    getChartSeries(chart) {
      return this.$store.state.nodes[chart].chart.series
    },
  },
}
</script>
