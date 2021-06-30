<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col
      cols="12"
      :class="{
        'pa-2': true,
        'pb-12': true,
        'pt-12': isMobile,
        'pt-6': !isMobile,
      }"
    >
      <node-table :nodes="nodes" :pagination="true" :title="protocol" />
    </v-col>
  </v-row>
</template>

<script>
import NodeTable from '~/components/NodeTable.vue'

export default {
  name: 'Protocol',
  components: {
    NodeTable,
  },
  asyncData({ params, store }) {
    const protocol = `${params.pathMatch || 'index'}`
    const nodes = store.state.nodes.raw
    const filtered = nodes.filter(
      (node) => node.protocolVersion.toString() === protocol
    )
    return {
      protocol,
      nodes: filtered,
    }
  },
  computed: {
    darkmode() {
      return this.$vuetify.theme.dark
    },
    locale() {
      return this.$i18n.locale
    },
    isMobile() {
      return this.$store.state.mobile
    },
  },
}
</script>
