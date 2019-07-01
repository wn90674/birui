<template>
  <header class="header">
    <div class="wrapper">
      <!-- logo -->
      <a href="/" class="logo">
        <img src="/img/logo.jpg" width="150px" alt="彼瑞教育">
      </a>
      <!-- nav -->
      <nav>
        <ul class="nav-list">
          <li v-for="(item,index) in navList" :key="index">
            <a :href="item.link||'javascript:void(0)'" :class="{br__primary:isCurrentRoute(item.link)}">{{item.title}}</a>
            <!-- <drop-down :list="item.list"></drop-down> -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>

import DropDown from "~/components/dropDown/index.vue";
export default {
  data: function () {
    return {
      navList: [
        {
          title: '关于彼瑞',
          link: '/about/',
        },
        {
          title: '解决方案',
          link: '/solution/',
        },
        {
          title: '产品',
          link: '/product/',
        },
        {
          title: '服务与支持',
          link: '/support/',
        },
        {
          title: '联系我们',
          link: '/connect/',
        },
      ]
    }
  },
  methods:{
    isCurrentRoute(link){
      const routeReg = new RegExp(link)
      return routeReg.test(this.$route.fullPath)
    }
  },
  components: {
    DropDown,
  }
}
</script>
<style scoped>
.header {
  /* position: sticky;
  top: 20px; */
  z-index: 1000;
  box-shadow: 0 1px 15px 3px #ccc;
}
.header .wrapper {
  margin: 0 auto;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-list {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.nav-list li {
  padding: 5px 10px;
  color: #333;
  font-size: 18px;
}
.nav-list li a {
  height: 80px;
  line-height: 80px;
}
.nav-list .br__dropdown__wrapper {
  display: none;
}
.nav-list li:hover .br__dropdown__wrapper {
  display: block;
}
</style>


