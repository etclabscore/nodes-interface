<template>
  <v-autocomplete
    v-model="query"
    :items="articles"
    :is-loading="isLoading"
    :search-input.sync="search"
    no-filter
    clearable
    hide-details
    hide-selected
    flat
    :outlined="!mobile"
    :filled="mobile"
    solo
    attach
    :dense="!mobile"
    :rounded="!mobile"
    prepend-inner-icon="mdi-magnify"
    :full-width="mobile"
    :allow-overflow="false"
    :class="{ 'mw-300': !mobile }"
    :menu-props="menu"
  >
    <template #no-data>
      <v-list-item>
        <v-list-item-title>
          {{ $t('search.noResults') }}
        </v-list-item-title>
      </v-list-item>
    </template>
    <template #selection="{ attr, on, item, selected }">
      <v-chip
        v-bind="attr"
        :input-value="selected"
        color="blue-grey"
        class="white--text"
        v-on="on"
      >
        <span v-text="item.title"></span>
      </v-chip>
    </template>
    <template #item="{ item }">
      <v-list-item
        flat
        :to="{ path: item.path }"
        @click="$emit('resultClicked')"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle
            v-text="item.description"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  name: 'Search',
  props: {
    mobile: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      query: null,
      search: null,
      isLoading: false,
      articles: [],
    }
  },
  computed: {
    menu() {
      return {
        auto: false,
        rounded: true,
        flat: true,
        right: true,
        maxHeight: this.mobile ? 'auto' : 304,
        origin: 'right top',
      }
    },
  },
  watch: {
    async search(query) {
      if (!query) {
        this.articles = []
        return
      }
      this.isLoading = true
      this.articles = await this.$content(this.$i18n.locale, { deep: true })
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
      this.isLoading = false
    },
  },
}
</script>
