import config from './params/config.json'

const msgs = {}
for (const l of config.i18n.locales) {
  msgs[l.code] = require('./i18n/' + l.code + '.json')
}

const locale = require('./i18n/' + config.i18n.default + '.json')

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // router config
  router: config.router,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: locale.title || 'Octano Static',
    htmlAttrs: {
      lang: config.i18n.default,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: locale.home.desc || 'we are all dev',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: config.favicon }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/i18n.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
      // markdown heading auto links
      remarkAutolinkHeadings: {
        content: {
          type: 'element',
          tagName: 'span',
          properties: {
            className: [
              'v-icon',
              'mdi',
              'mdi-link-box-variant-outline',
              'mr-1',
              'mb-1',
              'header-link',
            ],
          },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/scss/variables.scss'],
    theme: config.theme,
    treeShake: false,
  },

  // i18n module configuration (https://i18n.nuxtjs.org/basic-usage)
  i18n: {
    locales: config.i18n.locales,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: config.title + '_i18n_redirected',
      fallbackLocale: config.i18n.default || 'en',
      alwaysRedirect: true,
      onlyOnRoot: true,
    },
    defaultLocale: config.i18n.default || 'en',
    vueI18n: {
      fallbackLocale: config.i18n.default || 'en',
      messages: msgs,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // hooks
  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension !== '.md') return
      let dir = config.github.split('/')
      dir = dir[dir.length - 1]
      file.data = file.data.replace(/STATIC_GITHUB/g, config.github + '.git')
      file.data = file.data.replace(/STATIC_DIR/g, dir)
    },
  },
}
