<template>
  <!-- 智能可视化实践云平台 -->
  <div>
    <img :src="bgMap.get($route.fullPath)" width="100%" alt="关于彼瑞">
    <section class="br__container content">
      <aside class="nav">
        <dl v-for="(item,index) in navList" :key="index">
          <dt>{{item.title}}</dt>
          <dd v-for="(i,idx) in item.list" :key="`${index}-${idx}`">
            <a :href="i.link" :class="{br__primary:$route.fullPath===i.link}">{{i.title}}</a>
          </dd>
        </dl>
      </aside>
      <!-- 分类 -->
      <section class="details">
        <nuxt-child></nuxt-child>
      </section>
    </section>
  </div>
</template>

<script>
// 背景图片映射
const mapBg = new Map([
  // 企业介绍
  ['/about/', '/img/about/about.jpg'],
  // 企业足迹
  ['/about/trace', '/img/about/trace2.jpg'],
  // 企业动态
  ['/about/dynamic', '/img/about/dynamic.jpg'],
  // 行业动态
  ['/about/news', '/img/product/account.jpg'],
])
export default {
  data: function () {
    return {
      bgMap: mapBg,
      navList: [
        {
          title: '企业介绍',
          list: [
            {
              title: '公司概况',
              link: '/about/',
            },
            {
              title: '彼瑞足迹',
              link: '/about/trace',
            }
          ]
        },
        {
          title: '新闻动态',
          list: [
            {
              title: '企业动态',
              link: '/about/dynamic',
            },
            {
              title: '行业动态',
              link: '/about/news',
            }
          ]
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  aside.nav {
    margin-right: 25px;
    padding: 25px;
    font-family: 'Microsoft YaHei';
    flex: 0 0 200px;
    background-color: #f7f8f9;
    dt,
    dd {
      padding: 5px 0;
    }
    dt {
      font-weight: bold;
    }
    dd {
      padding-left: 20px;
    }
    a:hover {
      color: #0967b6;
    }
  }
  .details {
    flex: auto;
  }
}
</style>
