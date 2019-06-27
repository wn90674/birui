module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/Swiper/4.5.0/css/swiper.min.css"
      },
    ],
    script: [{
      type: 'text/javascript',
      //src:'//at.alicdn.com/t/font_1254471_zwdo2p1yq7a.js'
      src: '/font/iconfont.js',
      async: true,
      defer: true,

    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3776bc',
    height: '2px'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/swiper',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      ['markdown-it-container', 'containerName'],
      'markdown-it-attrs'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}