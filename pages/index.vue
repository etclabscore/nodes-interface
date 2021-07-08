<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col v-if="!isMobile" cols="12" class="pa-1">
      <resizable-drawer
        v-if="nodes.raw.length > 0"
        id="charts"
        side="right"
        :dark="darkmode"
      >
        <overview :nodes="nodes" :countries="countryData" />
      </resizable-drawer>
      <node-table
        :nodes="nodes.raw"
        :pagination="true"
        :title="$t('home.title')"
        :breadcrumbs="breadcrumbs"
      />
    </v-col>
    <v-col v-else-if="nodes.raw.length > 0" cols="12" class="pa-0">
      <v-tabs v-model="tab" fixed-tabs class="bg-0 pa-0">
        <v-tab>overview</v-tab>
        <v-tab>nodes</v-tab>
        <v-tab-item>
          <overview :nodes="nodes" :countries="countryData" />
        </v-tab-item>
        <v-tab-item>
          <node-table
            :nodes="nodes.raw"
            :pagination="true"
            :title="$t('home.title')"
            :breadcrumbs="breadcrumbs"
          />
        </v-tab-item>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import NodeTable from '~/components/NodeTable.vue'
import ResizableDrawer from '~/components/app/ResizableDrawer.vue'
import Overview from '~/components/Overview.vue'

export default {
  name: 'Home',
  components: {
    NodeTable,
    ResizableDrawer,
    Overview,
  },
  data() {
    return {
      tab: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('nodes/set_nodes')
  },
  computed: {
    nodes() {
      return this.$store.state.nodes
    },
    isMobile() {
      return this.$store.state.mobile
    },
    darkmode() {
      return this.$vuetify.theme.dark
    },
    countryData() {
      return this.$store.state.nodes.countries
    },
    breadcrumbs() {
      return [
        {
          text: this.$t('nodes.network'),
          disabled: true,
          to: '/',
        },
      ]
    },
  },
}
</script>
