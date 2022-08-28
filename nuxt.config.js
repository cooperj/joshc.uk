export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: true,

  loading: "~/components/Loading.vue",

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8080"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Josh Cooper",
    titleTemplate: "%s → Josh Cooper",
    htmlAttrs: {
      lang: "en"
    },
    script: [
      { src: "/pls.js", defer: true, "data-domain": "joshc.uk" }
    ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#018281" },
      { property: "og:site_name", content: "Josh Cooper" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/assets/images/joshua.jpg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: "@joshcdev" }
    ],
    link: [     
      // Favicons etc
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/favicons/apple-icon-57x57.png?v=2" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/favicons/apple-icon-60x60.png?v=2" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/favicons/apple-icon-72x72.png?v=2" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/favicons/apple-icon-76x76.png?v=2" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/favicons/apple-icon-114x114.png?v=2" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/favicons/apple-icon-120x120.png?v=2" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/favicons/apple-icon-144x144.png?v=2" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/favicons/apple-icon-152x152.png?v=2" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-icon-180x180.png?v=2" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicons/android-icon-192x192.png?v=2" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png?v=2" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicons/favicon-96x96.png?v=2" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png?v=2" },
      { rel: "manifest", href: "/manifest.json?v=2" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/styles/main.css",
    "@/node_modules/@fortawesome/fontawesome-free/css/all.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap"
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: [],
      prism: {
        theme: "prism-themes/themes/prism-nord.min.css"
      }
    }
  },

  generate: {   
    // https://redfern.dev/articles/adding-a-sitemap-using-nuxt-content/
    // https://jackwhiting.co.uk/posts/generating-sitemap-entries-for-nuxt-content/
    routes: async () => {
      const { $content } = require('@nuxt/content')

      const files = await $content({ deep: true }).only(["path"]).where({ draft: false }).fetch()
      return files.map((file) => (file.path === "/index" ? "/" : file.path))
    },

    fallback: '404.html'
  },
  
  sitemap: {
    hostname: "https://www.joshc.uk",
    gzip: true,
    exclude: ["/404"],
  },

  hooks: {
    // Create medium like reading time
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text);
        document.readingTime = text;
      }
    }
  },

  router: {
		// middleware: "delay",
	},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Public Path
    publicPath: "/nuxt/",

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
};
