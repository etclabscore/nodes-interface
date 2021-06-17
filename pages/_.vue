<template>
  <v-row justify="center" align="center" class="pa-0">
    <v-app-bar v-if="isMobile" flat fixed dense style="top: 56px">
      <v-toolbar-title id="top-header">
        <v-icon v-if="!!article.icon">{{ article.icon }}</v-icon>
        {{ article.title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon class="ml-1" nuxt @click.stop="toggleTocDrawer()">
        <v-icon>mdi-text-search</v-icon>
      </v-btn>
    </v-app-bar>
    <v-col
      cols="12"
      :class="{
        'pa-2': true,
        'pb-12': true,
        'pt-12': isMobile,
        'pt-6': !isMobile,
      }"
    >
      <v-alert :value="fallback" type="error" text outlined dismissible>
        {{ $t('slug.fallback', [locale.name, defaultLocale.name]) }}
      </v-alert>
      <v-card v-if="!!article" key="card" flat tile class="bg-0">
        <template v-if="!isMobile">
          <v-card-title id="top-header">
            <h1>
              <v-icon v-if="!!article.icon" large>{{ article.icon }}</v-icon>
              {{ article.title }}
            </h1>
            <v-spacer />
            <v-btn
              icon
              :href="github + '/edit/master/content' + article.path + '.md'"
              target="_blank"
            >
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-btn>
            <v-btn icon class="ml-1" nuxt @click.stop="toggleTocDrawer()">
              <v-icon>mdi-text-search</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider />
        </template>
        <v-card-text>
          <p>{{ article.description }}</p>
          <nuxt-content :document="article" />
        </v-card-text>
        <v-card-actions class="pt bt-1">
          <v-btn
            v-if="prev"
            :to="{ path: prev.path }"
            text
            color="primary"
            class="no-tt"
          >
            <v-icon class="mr-1" small>mdi-arrow-left</v-icon>
            {{ prev.title }}
          </v-btn>
          <v-spacer />
          <v-btn
            v-if="next"
            :to="{ path: next.path }"
            text
            color="primary"
            class="no-tt"
          >
            {{ next.title }}
            <v-icon class="ml-1" small>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <resizable-drawer id="toc" side="right" :dark="darkmode">
      <template v-if="!!article">
        <v-subheader>{{ $t('toc') }}</v-subheader>
        <v-list dense class="pa-0 ml-4">
          <v-list-item
            v-for="link of article.toc"
            :key="link.id"
            :class="{
              'pl-6': link.depth === 3,
              'static-toc': link.id !== currentlyActiveToc,
              'static-toc-active': link.id === currentlyActiveToc,
            }"
            @click="tableOfContentsHeadingClick(link)"
          >
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </resizable-drawer>
  </v-row>
</template>

<script>
import Prism from '~/plugins/prism'
import ResizableDrawer from '~/components/app/ResizableDrawer'

export default {
  name: 'Slug',
  components: {
    ResizableDrawer,
  },
  async asyncData({ $content, params, error, i18n }) {
    const fetchArticle = async function (path) {
      const [article] = await $content({ deep: true }).where({ path }).fetch()

      if (article) {
        // get previous and next for slug action links
        const [prev, next] = await $content(i18n.locale, { deep: true })
          .where({ type: { $ne: 'group' } })
          .only(['title', 'slug', 'path'])
          .sortBy('createdAt', 'asc')
          .surround(article.slug)
          .fetch()

        return { article, prev, next }
      } else {
        return null
      }
    }
    let path = `/${params.pathMatch || 'index'}`
    let article = await fetchArticle(path, false)
    let fallback = false
    if (!article) {
      // article exists not, fallback.
      const s = path.split('/')
      s[1] = i18n.defaultLocale
      path = s.join('/')
      article = await fetchArticle(path, true)
      if (!article) {
        // fallback exists not, 404.
        return error({ statusCode: 404, message: 'Article not found' })
      }
      fallback = true
    }
    return {
      fallback,
      article: article.article,
      prev: article.prev,
      next: article.next,
    }
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        // root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0,
      },
    }
  },
  head() {
    return {
      title: this.article?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article?.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article?.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article?.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article?.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article?.description,
        },
      ],
    }
  },
  computed: {
    darkmode() {
      return this.$vuetify.theme.dark
    },
    locale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
    defaultLocale() {
      return this.$i18n.locales.filter(
        (i) => i.code === this.$i18n.defaultLocale
      )[0]
    },
    github() {
      return this.$store.state.params.github
    },
    isMobile() {
      return this.$store.state.mobile
    },
  },
  mounted() {
    Prism.highlightAll()
    const hash = this.$route.hash
    if (hash) {
      this.$vuetify.goTo(hash)
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    this.observer.disconnect()
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.$vuetify.goTo(`#${link.id}`)
      this.currentlyActiveToc = link.id
    },
    toggleTocDrawer() {
      this.$store.dispatch('drawers/toggleToc')
    },
  },
}
</script>
