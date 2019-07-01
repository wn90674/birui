module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title:'彼瑞教育',
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
        content: '彼瑞教育'
      },
      {
        name:'keywords',
        content:'教育，产品，平台，个性化开发，管理会计，Excel课程，大数据，财务分析，审计，财务'
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
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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