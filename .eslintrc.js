module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: ['jest'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
