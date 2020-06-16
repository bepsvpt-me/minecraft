export default {
  mode: 'spa',

  modern: true,

  globalName: 'minecraft',

  loading: false,

  loadingIndicator: false,

  render: {
    injectScripts: false,

    resourceHints: false,

    csp: true,
  },

  head: {
    title: 'Our Minecraft Server',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Our Minecraft Server Info',
      },
    ],
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  build: {
    publicPath: '/assets/',

    optimization: {
      splitChunks: {
        chunks: 'async',
      },
    },

    splitChunks: {
      commons: false,
      layouts: false,
      pages: false,
      runtime: false,
      vendor: false,
    },
  },
}
