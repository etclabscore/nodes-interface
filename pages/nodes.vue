<template>
  <v-row justify="center" align="center" class="pa-0" no-gutters>
    <v-col cols="12">
      <v-card tile>
        <v-card-title>
          <v-icon class="mr-2">mdi-server-network</v-icon>
          Nodes
          <v-spacer />
          <v-text-field
            v-model="search"
            class="pt-0"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :search="search"
          :headers="chartHeaders"
          :items="nodes"
          :items-per-page="20"
          class="elevation-1"
          :expanded.sync="expanded"
          item-key="id"
          :show-expand="!isMobile"
          disable-pagination
          hide-default-footer
        >
          <template #expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-tabs v-model="tab" grow>
                <v-tab>Overview</v-tab>
                <v-tab>Raw</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item :key="overview">
                  <v-list dense>
                    <extended-list-item
                      title="Node ID"
                      tooltip="Unique identifier for of this node"
                      three-line
                    >
                      <template #subtitle>
                        <nuxt-link
                          :to="{
                            name: 'node',
                            params: { id: item.id },
                          }"
                        >
                          {{ item.id }}
                        </nuxt-link>
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      title="IP Address"
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle>
                        {{ item.ip }}
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      title="Client"
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle>
                        {{ item.fullname }}
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      title="Protocols"
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle>
                        {{ item.caps.join(', ') }}
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      title="Fork ID"
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle>
                        {{ item.forkID.tag }} ({{ item.forkID.current }})
                      </template>
                      <template #action> Next fork block </template>
                      <template #action2>
                        {{ nf.format(item.forkID.next) }}
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      title="Head"
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle>
                        {{ item.head }}
                      </template>
                      <template #action> Total Difficulty </template>
                      <template #action2>
                        {{ nf.format(item.TD) }}
                      </template>
                    </extended-list-item>
                    <extended-list-item
                      :title="
                        'Discovery (score: ' +
                        nf.format(item.discoveryInfo.score) +
                        ')'
                      "
                      tooltip="Unique identifier for of this node"
                    >
                      <template #subtitle
                        >First Response - {{ item.discoveryInfo.firstResponse }}
                      </template>
                      <template #action>
                        Last Response - {{ item.discoveryInfo.lastResponse }}
                      </template>
                      <template #action2>
                        Last Check - {{ item.discoveryInfo.lastCheck }}
                      </template>
                    </extended-list-item>
                  </v-list>
                </v-tab-item>
                <v-tab-item :key="raw">
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
    </v-col>
  </v-row>
</template>

<script>
import ExtendedListItem from '~/components/ListItem.vue'

export default {
  name: 'Nodes',
  components: {
    ExtendedListItem,
  },
  data() {
    return {
      search: null,
      expanded: [],
      tab: null,
      nf: new Intl.NumberFormat(this.locale, {}),
      chartHeaders: [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'IP', align: 'start', sortable: false, value: 'ip' },
        { text: 'Client', align: 'start', sortable: true, value: 'name' },
        { text: 'Version', sortable: true, value: 'release' },
        {
          text: 'Fork ID',
          align: 'start',
          sortable: true,
          value: 'forkID.tag',
        },
        {
          text: 'Fork Next',
          align: 'start',
          sortable: true,
          value: 'forkID.next',
        },
        { text: 'Head', align: 'start', sortable: true, value: 'head' },
      ],
    }
  },
  computed: {
    nodes() {
      return this.$store.state.nodes.raw
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
