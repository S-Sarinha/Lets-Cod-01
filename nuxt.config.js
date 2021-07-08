import colors from 'vuetify/es5/util/colors'
import axios from 'axios'
import fs from 'fs'

export default {
  mode: 'universal',
  // srcDir: '/blog/',
  router: {
    base: '/blog/'
    // base: process.env.NODE_ENV === 'production'
    // ? '/blog/'
    // : '/',
  },

  generate: {
    //dir: '/blog/',
    // routes: [
    //   '/'
    //   // '/posts/dados-contabeis-orcamentarios-e-fiscais-enviados-ao-tesouro-nacional',
    //   // '/posts/verificacoes-do-siconfi-para-2020'
    // ],
    async routes () {
      let response = await axios.get('https://api.otimizze.me/v0/blog/getAll/?blog=3')
      fs.writeFileSync('dist/data.json', JSON.stringify(response.data))
      // return response.data.map(post => ({
      //   route: `${post.url}`,
      //   payload: post
      // }))
      let rotas = []

      // return response.data.map(post => ({
      //   route: `${post.url}`,
      //   payload: post
      // }))

      rotas = response.data.map(
        post => ({
          route: `${post.url}`,
          payload: post
        })
      )

      let rotaIndex = {
        route: '/',
        payload: response.data
      }
      rotas.push(rotaIndex)

      return rotas

    },
  },

  /*
  ** Headers of the page
  */
  head: {
    //titleTemplate: '%s -',
    //title: process.env.npm_package_name || '',
    title: 'Blog Pean Flores',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'Dicas para profissionais e organizações que atuam nas mais diversas áreas da gestão de recursos públicos e Serviços Sociais Autônomos.' },
      // { hid: 'og:type', name: 'og:type', content: 'website' },
      // { hid: 'og:title', name: 'og:title', content: 'Blog RM2 Compliance' },
      // { hid: 'og:description', name: 'og:description', content: 'Dicas para profissionais e organizações que atuam nas mais diversas áreas da gestão de recursos públicos e Serviços Sociais Autônomos.' },
      // { hid: 'og:image', name: 'og:image', content: 'https://www.rm2compliance.com.br/blog/preview.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed:300,400,500,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/fixes.css',
    '~/assets/css/fonts.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'~/plugins/breakpoint.js'
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api.otimizze.me/v0/blog',
    //baseURL: 'https://jsonplaceholder.typicode.com'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#F0006E', // rosa F50057
          accent: colors.grey.darken3,
          secondary: '#25d366', // dark blue
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    // publicPath: 'blog/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
