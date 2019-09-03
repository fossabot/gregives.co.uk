export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Software Developer & Designer',
    titleTemplate: 'Greg Ives | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:400,400i,500|Fira+Mono:500&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'dodgerblue' },
  /*
   ** Global CSS
   */
  css: ['~/assets/sass/default'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/tilt.js', mode: 'client', async: true, defer: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/localtunnel', { subdomain: 'gregives' }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@bazzite/nuxt-optimized-images'],
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
