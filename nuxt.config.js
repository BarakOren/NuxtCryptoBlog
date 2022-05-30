const bodyParser = require('body-parser')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  head: {
    title: 'NuxtBlog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,800&display=swap"}
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios','@nuxtjs/tailwindcss']
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app' 
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app',
    fApiKey: "AIzaSyBeAtzKF2qu52oiFg4ObAVg4DzoAcqmmYA",
    MarketCap: "c345b7d4-b2ec-428d-9fe9-5eb86f3296c2"
  },
  router: {
    extendRoutes(routes, resolve){
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]

}
