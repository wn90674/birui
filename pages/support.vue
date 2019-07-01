<template>
  <!-- 服务与支持 -->
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
  // 产品操作手册
  ['/support/', '/img/about/about.jpg'],
  // 试用申请
  ['/support/apply', '/img/product/bigData.jpg'],
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
          title: '服务与支持',
          list: [
            {
              title: '产品操作手册',
              link: '/support/',
            },
            {
              title: '常见问题',
              link: '/support/question',
            }
          ]
        },
        {
          title: '产品试用',
          list: [
            {
              title: '试用申请',
              link: '/support/apply',
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
  justify-content: flex-start;
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
