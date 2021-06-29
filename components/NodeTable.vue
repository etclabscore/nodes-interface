<template>
  <v-card tile>
    <v-card-title>
      <v-icon class="mr-2">mdi-server-network</v-icon>
      {{ title }} ({{ nodes.length }})
      <v-spacer />
      <v-text-field
        v-model="search"
        class="pt-0"
        append-icon="mdi-magnify"
        :label="$t('nodes.search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="chartHeaders"
      :items="nodes"
      class="elevation-1"
      :expanded.sync="expanded"
      item-key="id"
      :show-expand="!isMobile"
      :disable-pagination="!pagination"
      :hide-default-footer="!pagination"
    >
      <template #expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <v-tabs v-model="tab" grow>
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
                    {{ item.ip }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.client.title')"
                  :tooltip="$t('nodes.client.tooltip')"
                >
                  <template #subtitle>
                    {{ item.fullname }}
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
                      {{ item.protocolVersion }}
                    </v-chip>
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.forkId.title')"
                  :tooltip="$t('nodes.forkId.tooltip')"
                >
                  <template #subtitle>
                    {{ item.forkID.tag }} ({{ item.forkID.current }})
                  </template>
                  <template #action> {{ $t('nodes.forkId.action1') }}</template>
                  <template #action2>
                    {{ nf.format(item.forkID.next) }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="$t('nodes.head.title')"
                  :tooltip="$t('nodes.head.tooltip')"
                >
                  <template #subtitle>
                    {{ item.head }}
                  </template>
                  <template #action>{{ $t('nodes.head.action1') }}</template>
                  <template #action2>
                    {{ nf.format(item.TD) }}
                  </template>
                </extended-list-item>
                <extended-list-item
                  :title="
                    $t('nodes.discovery.title') +
                    ' (' +
                    $t('nodes.discovery.score') +
                    ': ' +
                    nf.format(item.discoveryInfo.score) +
                    ')'
                  "
                  :tooltip="$t('nodes.discovery.tooltip')"
                >
                  <template #subtitle
                    >{{ $t('nodes.discovery.subtitle1') }} -
                    {{ item.discoveryInfo.firstResponse }}
                  </template>
                  <template #action>
                    {{ $t('nodes.discovery.action1') }} -
                    {{ item.discoveryInfo.lastResponse }}
                  </template>
                  <template #action2>
                    {{ $t('nodes.discovery.action2') }} -
                    {{ item.discoveryInfo.lastCheck }}
                  </template>
                </extended-list-item>
              </v-list>
            </v-tab-item>
            <v-tab-item>
              <pre class="mb-6"><code>{{ item }}</code></pre>
            </v-tab-item>
          </v-tabs-items>
        </td>
      </template>
      <template #[`item.id`]="{ item }">
        {{ formatHash(item.id, 10, 0) }}
      </template>
      <template #[`item.head`]="{ item }">
        {{ formatHash(item.head, 10, 8) }}
      </template>
      <template #[`item.release`]="{ item }">
        {{ formatRelease(item.release) }}
      </template>
      <template #[`item.forkID.next`]="{ item }">
        {{ nf.format(item.forkID.next) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
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
    pagination: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      search: null,
      expanded: [],
      tab: null,
      nf: new Intl.NumberFormat(this.locale, {}),
      chartHeaders: [
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
          value: 'ip',
        },
        {
          text: this.$t('nodes.client.title'),
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: this.$t('nodes.version'), sortable: true, value: 'release' },
        {
          text: this.$t('nodes.forkId.title'),
          align: 'start',
          sortable: true,
          value: 'forkID.tag',
        },
        {
          text: this.$t('nodes.nextFork'),
          align: 'start',
          sortable: true,
          value: 'forkID.next',
        },
        {
          text: this.$t('nodes.head.title'),
          align: 'start',
          sortable: true,
          value: 'head',
        },
      ],
    }
  },
  methods: {
    formatHash(hash, start, end) {
      // shorten hashes for better displaying
      return hash.substr(0, start) + '...' + hash.substr(hash.length - end)
    },
    formatRelease(version) {
      // clean up version/release to number/tag
      return version.split('-')[0]
    },
  },
}
</script>
