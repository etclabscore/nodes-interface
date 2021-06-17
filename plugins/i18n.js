export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale

  // app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {}

  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = async (oldLocale, newLocale) => {
    await app.store.dispatch('content/fetch')
    let fullpath = app.router.history.current.fullPath
    const s = fullpath.split('/')
    const localeMatch = app.i18n.locales.filter((i) => i.code === s[1])
    if (localeMatch.length && app.i18n.locale !== s[1]) {
      s[1] = app.i18n.locale
      fullpath = s.join('/')
      // app.store.dispatch('content/select', fullpath)
      app.router.replace({ path: fullpath })
      // Vue.nextTick()
    }
  }
}
