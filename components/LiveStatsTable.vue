<template>
  <v-card tile class="mx-sm-1 mx-0">
    <v-card-title>
      <v-icon class="mr-2">mdi-server-network</v-icon>
      {{ title }}
      <v-spacer />
      <small style="font-size: 10px">
        Next update
        {{ nextUpdateInSeconds ? `in ${nextUpdateInSeconds}s` : 'now' }}
      </small>
    </v-card-title>
    <v-data-table
      :loading="loading"
      :headers="chartHeaders"
      :items="nodes"
      class="elevation-1"
      :expanded.sync="expanded"
      item-key="id"
      :show-expand="!isMobile"
      :hide-default-footer="true"
      :items-per-page="-1"
      :loading-text="$t('liveStats.loading')"
      :no-data-text="$t('liveStats.noData')"
      :no-results-text="$t('liveStats.noResults')"
      :disable-pagination="true"
    >
      <template #loading>
        <v-skeleton-loader type="table-row@3"></v-skeleton-loader>
      </template>
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-list dense>
            <extended-list-item :title="$t('liveStats.client')">
              <template #subtitle>
                {{ item.name }}
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.version')">
              <template #subtitle>
                {{ formatRelease(item.release) }}
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.status')">
              <template #subtitle>
                <v-chip
                  v-if="item.syncing"
                  class="ma-2"
                  color="red"
                  text-color="white"
                  x-small
                  outlined
                >
                  Syncing
                </v-chip>
                <v-chip
                  v-else
                  class="ma-2"
                  color="green"
                  text-color="white"
                  x-small
                  outlined
                >
                  In sync
                </v-chip>
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.blockNumber')">
              <template #subtitle>
                {{ item.blockNumber }}
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.blockHash')">
              <template #subtitle>
                {{ formatHash(item.blockHash, 10, 8) }}
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.totalDifficulty')">
              <template #subtitle>
                {{ nf.format(item.totalDifficulty) }}
              </template>
            </extended-list-item>
            <extended-list-item :title="$t('liveStats.lastBlock')">
              <template #subtitle>
                {{ formatLastSeen(item.timestamp) }}
              </template>
            </extended-list-item>
          </v-list>
        </td>
      </template>
      <template #[`item.name`]="{ item }">
        {{ item.name === '-' ? $t('nodes.unknown') : item.name }}
      </template>
      <template #[`item.release`]="{ item }">
        {{ formatRelease(item.release) }}
      </template>
      <template #[`item.syncing`]="{ item }">
        <v-chip
          v-if="item.syncing"
          class="ma-2"
          color="red"
          text-color="white"
          x-small
          outlined
        >
          Syncing
        </v-chip>
        <v-chip
          v-else
          class="ma-2"
          color="green"
          text-color="white"
          x-small
          outlined
        >
          In sync
        </v-chip>
      </template>
      <template #[`item.blockNumber`]="{ item }">
        {{ item.blockNumber }}
      </template>
      <template #[`item.blockHash`]="{ item }">
        {{ formatHash(item.blockHash, 10, 8) }}
      </template>
      <template #[`item.totalDifficulty`]="{ item }">
        {{ nf.format(item.totalDifficulty) }}
      </template>
      <template #[`item.timestamp`]="{ item }">
        {{ formatLastSeen(item.timestamp) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { formatDistance } from 'date-fns'
import { enUS, es, ru, zhCN } from 'date-fns/locale'
import ExtendedListItem from '~/components/ListItem.vue'
import config from '~/params/config.json'

export default {
  name: 'LiveStatsTable',
  components: {
    ExtendedListItem,
  },
  props: {
    nodes: {
      type: Array,
      required: true,
    },
    lastUpdated: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      default() {
        return ''
      },
    },
    breadcrumbs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      updateInterval: null,
      nextUpdateInSeconds: 0,
      expanded: [],
      // eslint-disable-next-line vue/no-computed-properties-in-data
      nf: new Intl.NumberFormat(this.locale, {}),
      locales: {
        en: enUS,
        es,
        ru,
        zh: zhCN,
      },
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
    loading() {
      return this.nodes.length === 0
    },
    chartHeaders() {
      return [
        {
          text: this.$t('liveStats.client'),
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: this.$t('liveStats.version'),
          align: 'end',
          sortable: true,
          value: 'release',
        },
        {
          text: this.$t('liveStats.status'),
          align: 'center',
          sortable: true,
          value: 'syncing',
        },
        {
          text: this.$t('liveStats.blockNumber'),
          align: 'end',
          sortable: true,
          value: 'blockNumber',
        },
        {
          text: this.$t('liveStats.blockHash'),
          sortable: true,
          value: 'blockHash',
        },
        {
          text: this.$t('liveStats.totalDifficulty'),
          sortable: true,
          align: 'end',
          value: 'totalDifficulty',
        },
        {
          text: this.$t('liveStats.lastBlock'),
          align: 'end',
          sortable: true,
          value: 'timestamp',
        },
      ]
    },
  },
  created() {
    // update every 1 second the countdown
    this.updateInterval = setInterval(() => {
      this.nextUpdateInSeconds = Math.round(
        config.apiEndpoints.liveStatsFetchInterval -
          (Date.now() - this.lastUpdated.getTime()) / 1000
      )
    }, 1000)
  },
  destroyed() {
    clearInterval(this.updateInterval)
  },
  methods: {
    formatHash(hash, start, end) {
      // shorten hashes for better displaying
      return hash.substr(0, start) + '...' + hash.substr(hash.length - end)
    },
    formatRelease(version) {
      // clean up version/release to number/tag
      return version.split('-')[0].replace('v', '')
    },
    formatLastSeen(date) {
      return formatDistance(new Date(date * 1000), Date.now(), {
        addSuffix: true,
        includeSeconds: true,
        locale: this.locales[this.locale],
      })
    },
  },
}
</script>
