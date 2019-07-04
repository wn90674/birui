module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '彼瑞教育',
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
        name: 'keywords',
        content: '北京彼瑞,彼瑞教育,教育，产品，平台，个性化开发，管理会计，Excel课程，大数据，财务分析，审计，财务'
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
      src: '/font/iconfont.js',
      async: true,
      defer: true,
    }, {
      type: 'text/javascript',
      src: 'https://hm.baidu.com/hm.js?80f745e3b81067b735d20cde04972179',
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
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/element-ui',
    '@/plugins/swiper',
    '@/plugins/baiduGa.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  proxy: {
    '/api': {
      target: 'http://www.wn90674.cn/',
      pathRewrite: {
        '^/api': '/'
      }
    },
    '/v1/':{
      target:'http:127.0.0.1:3000/',
      pathRewrite:{
        '^/v1/':'/'
      }
    }
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