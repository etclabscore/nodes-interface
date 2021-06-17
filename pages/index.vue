<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-col cols="12" class="text-center pa-0">
      <div class="text-center my-6">
        <v-avatar tile class="pa-2 bordered-avatar" size="320" max-width="100%">
          <v-img :src="params.logo[theme]" height="250" contain class="pa-2" />
        </v-avatar>
      </div>
      <h1 class="v-heading text-h3 text-sm-h3 mb-4">{{ $t('home.title') }}</h1>
      <p class="mx-auto" style="width: 420px; max-width: 85%">
        {{ $t('home.desc') }}
      </p>
      <v-row no-gutters align="center" class="text-center pt-4">
        <span class="mx-auto">
          <v-btn
            color="primary"
            nuxt
            :to="'/' + locale + '/introduction'"
            x-large
            min-width="200px"
            class="mb-2"
          >
            <v-icon class="mr-1">mdi-gauge</v-icon>
            {{ $t('home.getStarted') }}
          </v-btn>
          <v-btn
            color="#212121"
            style="color: #fff"
            :href="params.github"
            target="_blank"
            x-large
            min-width="200px"
            class="mb-2"
          >
            <v-icon class="mr-1">mdi-github</v-icon>
            {{ $t('home.github') }}
          </v-btn>
        </span>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    params() {
      return this.$store.state.params
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
