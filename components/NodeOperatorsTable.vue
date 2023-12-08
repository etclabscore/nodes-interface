<template>
  <v-card tile class="mx-sm-1 mx-0">
    <v-card-title>
      <template>
        <v-icon :aria-label="title" role="img" aria-hidden="false" class="mr-2"
          >mdi-account</v-icon
        >
        {{ title }}
      </template>
      <v-spacer />
      <v-text-field
        v-model="search"
        :class="{ 'pt-0': true, 'w-100': isMobile }"
        append-icon="mdi-magnify"
        :label="$t('nodes.search')"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :search="search"
      :headers="chartHeaders"
      :items="operators"
      class="elevation-1"
      :mobile-breakpoint="0"
      :hide-default-header="isMobile"
      :hide-default-footer="isMobile"
      :items-per-page="-1"
      :loading-text="$t('nodes.loading')"
      :no-data-text="$t('nodes.noData')"
      :no-results-text="$t('nodes.noResults')"
      :disable-pagination="isMobile"
    >
      <template #[`item.service`]="{ item }">
        <v-list-item-title>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">{{ item.service }}</span>
            </template>

            <div>
              <span v-if="item.url">- Web: {{ item.url }}<br /></span>
              <span v-if="item.twitter">- X: {{ item.twitter }}<br /></span>
              <span v-if="item.telegram">- T: {{ item.telegram }}<br /></span>
              <span v-if="item.discord">- Discord: {{ item.discord }}</span>
            </div>
          </v-tooltip>
        </v-list-item-title>
      </template>

      <template #[`item.status`]="{ item }">
        <v-chip
          v-if="item.status === 1"
          class="ma-2"
          color="green"
          text-color="white"
          x-small
          outlined
        >
          Ready
        </v-chip>
        <v-chip
          v-else
          class="ma-2"
          color="indigo"
          text-color="white"
          x-small
          outlined
        >
          No information
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { enUS, es, ru, zhCN } from 'date-fns/locale'

export default {
  name: 'ServiceList',
  props: {
    title: {
      type: String,
      required: true,
    },
    operators: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      search: null,
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
    chartHeaders() {
      return [
        {
          text: this.$t('operators.service'),
          align: 'start',
          sortable: false,
          value: 'service',
        },
        {
          text: this.$t('operators.status'),
          align: 'end',
          sortable: true,
          value: 'status',
        },
      ]
    },
  },
}
</script>
