'use strict'
export default ({ app: { router }, store }) => {
    /*
    ** 每次路由变更时进行pv统计
    */
    router.afterEach((to, from) => {
      /*
      ** 告诉 GA 增加一个 PV
      */
     if(process.env.NODE_ENV === 'production') {
      try {
        window._hmt = window._hmt || []
        window._hmt.push(['_trackPageview', to.fullPath])
      } catch (e) {}
    } 
     })
  }