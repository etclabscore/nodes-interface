<template>
  <v-app dark>
    <v-app-bar fixed app :flat="isMobile" clipped-right>
      <v-btn icon nuxt to="/" class="mr-1">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <span v-if="params.hardfork.enabled">
        <NuxtLink
          :to="`/fork/${params.hardfork.name.toLowerCase()}`"
          class="ml-4 text-body-2 text-sm-body-1"
        >
          {{ params.hardfork.name }} status page
        </NuxtLink>
        <small v-if="!isMobile">
          - See readiness dashboard for the upcoming
          {{ params.hardfork.name }} hardfork
        </small>
      </span>

      <v-spacer />
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in avlLocales"
            :key="index"
            @click="$i18n.setLocale(item.code)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item :href="params.github" target="_blank">
            <v-list-item-title>{{ $t('helpTranslate') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon :href="params.github" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pb-12">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      padless
      app
      fixed
      height="22px"
      style="
        background-color: var(--v-primary-base);
        font-size: 12px;
        font-weight: 600;
      "
      class="px-2"
    >
      <v-spacer />
      <span style="color: #fff">
        {{ $t('footer.copyright') }}
      </span>
      <v-spacer />
    </v-footer>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      class="mb-5"
      style="z-index: 5"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fab: false,
    }
  },
  async fetch() {
    await this.$store.dispatch('set_mobile', window.innerWidth < 600)
    await this.$store.dispatch('content/fetch')
  },
  computed: {
    darkmode: {
      get() {
        return this.$vuetify.theme.dark
      },
      set() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    params() {
      return this.$store.state.params
    },
    avlLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    locale() {
      return this.$i18n.locale
    },
    groups() {
      return this.$store.state.content.groups
    },
    items() {
      return this.$store.state.content.items
    },
    article() {
      return this.$store.state.content.selected.article
    },
    isMobile() {
      return this.$store.state.mobile
    },
  },
  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo('header', {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
      })
    },
    onResize() {
      this.$store.dispatch('set_mobile', window.innerWidth < 600)
    },
  },
}
</script>
