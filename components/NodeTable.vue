<template>
  <v-card tile>
    <v-card-title>
      <v-icon class="mr-2">mdi-server-network</v-icon>
      {{ title }}
      <v-spacer />
      <v-text-field
        v-model="search"
        class="pt-0"
        append-icon="mdi-magnify"
        :label="$t('nodes.search')"
        single-line
        hide-details
      ></v-text-field>
      <v-btn icon class="ml-2" @click="$store.dispatch('drawers/toggleCharts')">
        <v-icon>mdi-chart-pie</v-icon>
      </v-btn>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="chartHeaders"
      :items="nodes"
      class="elevation-1"
      :expanded.sync="expanded"
      item-key="id"
      :show-expand="!isMobile"
      :hide-default-footer="true"
      :items-per-page="-1"
      :loading-text="$t('nodes.loading')"
      :no-data-text="$t('nodes.noData')"
      :no-results-text="$t('nodes.noResults')"
    >
      <template #top="{ pagination, options, updateOptions }">
        <v-data-footer
          :pagination="pagination"
          :options="options"
          class="bb-1"
          :items-per-page-all-text="$t('nodes.all')"
          :items-per-page-text="$t('nodes.perPage')"
          @update:options="updateOptions"
        >
          <template v-if="!isMobile" #prepend>
            <v-breadcrumbs :items="breadcrumbs" />
          </template>
        </v-data-footer>
      </template>
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-tabs v-model="tab">
            <v-tab>{{ $t('nodes.overview') }}</v-tab>
            <v-tab>{{ $t('nodes.raw') }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-list dense>
                <extended-list-item
                  :title="$t('nodes.nodeId.title')"
                  :tooltip="$t('nodes.nodeId.tooltip')"
                  three-line
                >
                  <template #subtitle>
                    {{ item.id }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.ipAddress.title')"
                  :tooltip="$t('nodes.ipAddress.tooltip')"
                >
                  <template #subtitle>
                    {{ formatIpAddress(item.network.remoteAddress) }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.client.title')"
                  :tooltip="$t('nodes.client.tooltip')"
                >
                  <template #subtitle>
                    {{ item.name }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.enode.title')"
                  :tooltip="$t('nodes.enode.tooltip')"
                >
                  <template #subtitle>
                    {{ item.enode }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.protocols.title')"
                  :tooltip="$t('nodes.protocols.tooltip')"
                >
                  <template #subtitle>
                    {{ item.caps.join(', ') }}
                  </template>
                  <template #action>
                    <v-chip label>
                      {{ item.protocols.eth.version }}
                    </v-chip>
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.forkId.title')"
                  :tooltip="$t('nodes.forkId.tooltip')"
                >
                  <template #subtitle>
                    {{ item.protocols.eth.forkId.tag }} ({{
                      item.protocols.eth.forkId.hash
                    }})
                  </template>
                  <template #action> {{ $t('nodes.forkId.action1') }}</template>
                  <template #action2>
                    {{ nf.format(item.protocols.eth.forkId.next) }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.head.title')"
                  :tooltip="$t('nodes.head.tooltip')"
                >
                  <template #subtitle>
                    {{ item.protocols.eth.head }}
                  </template>
                  <template #action>{{ $t('nodes.head.action1') }}</template>
                  <template #action2>
                    {{ nf.format(item.protocols.eth.difficulty) }}
                  </template>
                </extended-list-item>
              </v-list>
            </v-tab-item>
            <v-tab-item>
              <pre
                class="mb-6"
              ><code style="overflow-x: auto">{{ item }}</code></pre>
            </v-tab-item>
          </v-tabs-items>
        </td>
      </template>
      <template #[`item.id`]="{ item }">
        {{ formatHash(item.id, 10, 0) }}
      </template>
      <template #[`item.network.remoteAddress`]="{ item }">
        {{ formatIpAddress(item.network.remoteAddress) }}
      </template>
      <template #[`item.protocols.eth.head`]="{ item }">
        {{ formatHash(item.protocols.eth.head, 10, 8) }}
      </template>
      <template #[`item.client.release`]="{ item }">
        {{ formatRelease(item.client.release) }}
      </template>
      <template #[`item.protocols.eth.version`]="{ item }">
        {{ item.protocols.eth ? 'v' + item.protocols.eth.version : '-' }}
      </template>
      <template #[`item.protocols.snap.version`]="{ item }">
        {{ item.protocols.snap ? 'v' + item.protocols.snap.version : '-' }}
      </template>
      <template #[`item.protocols.eth.forkId.next`]="{ item }">
        {{ nf.format(item.protocols.eth.forkId.next) }}
      </template>
      <template #[`item.contact.first.unix`]="{ item }">
        {{ formatUptime(item.contact) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { formatDistance } from 'date-fns'
import { enUS, es, ru, zhCN } from 'date-fns/locale'
import ExtendedListItem from '~/components/ListItem.vue'

export default {
  name: 'NodeTable',
  components: {
    ExtendedListItem,
  },
  props: {
    nodes: {
      type: Array,
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
      search: null,
      expanded: [],
      tab: null,
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
    chartHeaders() {
      return [
        {
          text: this.$t('nodes.nodeId.title'),
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: this.$t('nodes.ipAddress.title'),
          align: 'start',
          sortable: false,
          value: 'network.remoteAddress',
        },
        {
          text: this.$t('nodes.country'),
          align: 'start',
          sortable: true,
          value: 'ip_info.country_name',
        },
        {
          text: this.$t('nodes.client.title'),
          align: 'start',
          sortable: true,
          value: 'client.name',
        },
        {
          text: this.$t('nodes.version'),
          sortable: true,
          value: 'client.release',
        },
        {
          text: this.$t('nodes.protocolEth'),
          sortable: true,
          align: 'center',
          value: 'protocols.eth.version',
        },
        {
          text: this.$t('nodes.protocolSnap'),
          align: 'center',
          sortable: true,
          value: 'protocols.snap.version',
        },
        {
          text: this.$t('nodes.forkId.title'),
          align: 'start',
          sortable: true,
          value: 'protocols.eth.forkId.tag',
        },
        {
          text: this.$t('nodes.nextFork'),
          align: 'start',
          sortable: true,
          value: 'protocols.eth.forkId.nextTag',
        },
        {
          text: this.$t('nodes.uptime'),
          align: 'start',
          sortable: true,
          value: 'contact.first.unix',
        },
      ]
    },
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
    formatIpAddress(address) {
      // remove port
      return address.split(':')[0]
    },
    formatUptime(contact) {
      return formatDistance(
        new Date(contact.first.unix * 1000),
        new Date(contact.last.unix * 1000),
        {
          addSuffix: false,
          locale: this.locales[this.locale],
        }
      )
    },
  },
}
</script>
