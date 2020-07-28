import { NuxtConfig } from '@nuxt/types'

const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-mode
  mode: 'universal',

  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,

  // https://nuxtjs.org/api/configuration-target
  target: 'static',

  // https://nuxtjs.org/api/configuration-vue-config
  vue: {
    config: {
      devtools: true,
    },
  },

  // https://nuxtjs.org/api/configuration-head
  head: {
    title: 'The World Minecraft Server',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The World Minecraft Server Info',
      },
    ],
  },

  // https://nuxtjs.org/api/configuration-global-name
  globalName: 'minecraft',

  // https://nuxtjs.org/api/configuration-loading
  loading: false,

  // https://nuxtjs.org/api/configuration-loading-indicator
  loadingIndicator: false,

  // https://nuxtjs.org/api/configuration-render
  render: {
    // https://nuxtjs.org/api/configuration-render#injectscripts
    injectScripts: false,

    // https://nuxtjs.org/api/configuration-render#resourcehints
    resourceHints: false,

    // https://nuxtjs.org/api/configuration-render#csp
    csp: true,
  },

  // https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
  buildModules: [
    // https://typescript.nuxtjs.org/
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // https://nuxtjs.org/api/configuration-build
  build: {
    publicPath: '/assets/',
  },
} as NuxtConfig
