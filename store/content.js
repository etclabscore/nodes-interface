import consola from 'consola'

export const state = () => ({
  groups: null,
  items: null,
  selected: {
    article: null,
    prev: null,
    next: null,
    fallback: false,
  },
})

export const mutations = {
  SET_CONTENT(state, content) {
    state.groups = content.groups
    state.items = content.items
  },
  SET_SELECTED(state, selected) {
    state.selected = selected
  },
}

export const actions = {
  async fetch({ commit }) {
    try {
      // get locale
      const locale = this.$i18n.locale
      // get group definitions (_menu.md)
      const g = await this.$content(locale, { deep: true })
        .where({ type: 'group' })
        .sortBy('index')
        .fetch()

      // construct menu groups
      const groups = {}
      for (const i of g) {
        const id = i.dir.substr(1).replace('/', '-') // convert to an 'id'
        i.items = [] // set an empty child items array
        groups[id] = i // add to groups object
      }

      // get article definitions
      const articles = await this.$content(locale, { deep: true })
        .where({ type: { $ne: 'group' } })
        .sortBy('createdAt')
        .fetch()

      // add child items to groups menu
      const items = [] // root level items
      for (const i of articles) {
        if (!i.type) {
          if (i.dir !== '/' + locale) {
            const group = i.dir.substr(1).replace('/', '-')
            i.group = group
            if (groups[group]) {
              groups[group].items.push(i)
            }
          } else {
            items.push(i) // no parent group
          }
        }
      }
      commit('SET_CONTENT', { groups, items })
    } catch (e) {
      consola.log(e)
    }
  },
  async select({ commit }, payload) {
    const path = payload.path
    const fallback = payload.fallback
    const [article] = await this.$content({ deep: true })
      .where({ path })
      .fetch()

    if (article) {
      // get previous and next for slug action links
      const [prev, next] = await this.$content(this.$i18n.locale, {
        deep: true,
      })
        .where({ type: { $ne: 'group' } })
        .only(['title', 'slug', 'path'])
        .sortBy('createdAt', 'asc')
        .surround(article.slug)
        .fetch()

      commit('SET_SELECTED', { article, prev, next, fallback })

      return article
    } else {
      return null
    }
  },
}
