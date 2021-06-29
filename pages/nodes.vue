<template>
  <v-row justify="center" align="center" class="pa-0 pb-12" no-gutters>
    <v-col cols="12">
      <node-table :nodes="nodes" :title="$t('nodes.nodes')" />
    </v-col>
  </v-row>
</template>

<script>
import NodeTable from '~/components/NodeTable.vue'

export default {
  name: 'Nodes',
  components: {
    NodeTable,
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
}
</script>
