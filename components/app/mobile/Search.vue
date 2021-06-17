<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <v-card tile>
      <v-toolbar color="primary">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ $t('search.title') }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items> </v-toolbar-items>
      </v-toolbar>
      <search :mobile="true" @resultClicked="dialog = false" />
    </v-card>
  </v-dialog>
</template>

<script>
import Search from '~/components/app/Search'

export default {
  name: 'SearchMobile',
  components: {
    Search,
  },
  data() {
    return {
      dialog: false,
    }
  },
  /* watch: {
    $route() {
      this.dialog = false
    }
  }
  */
}
</script>
