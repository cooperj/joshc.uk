import getRoutes from "./utils/getRoutes";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Josh Cooper',
    titleTemplate: '%s Josh Cooper',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "theme-color", content: "#e3d407"},
      { property: "og:site_name", content: "Josh Cooper"},
      { property: "og:locale", content: "en_GB"},
      { property: "og:type", content: "website"},      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.css'
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
    liveEdit: false,
    markdown: {
      remarkPlugins: [],
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
