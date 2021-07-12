import getRoutes from "./utils/getRoutes";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Home',
    titleTemplate: '%s | Josh Cooper',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The personal website of Josh Cooper' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: ['remark-emoji'],
      prism: {
        theme: 'prism-themes/themes/prism-lucario.css'
      }
    },
  },

  generate: {
    routes() {
      return getRoutes();
    }
  },

  sitemap: {
    hostname: 'https://joshc.uk',
    gzip: true,
    exclude: [
      '/404'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Public Path
    publicPath: '/nuxt/',

    // Minify HTML
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true
  }
}
