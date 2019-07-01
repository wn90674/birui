<template>
  <!-- 智能可视化实践云平台 -->
  <div>
    <img :src="bgMap.get($route.fullPath)" width="100%" alt="智能云平台">
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
  ['/product/', '/img/product/platform.jpg'],
  // 大数据
  ['/product/finance', '/img/product/bigData.jpg'],
  ['/product/audit', '/img/product/bigData.jpg'],
  // 管理会计
  ['/product/teach', '/img/product/account.jpg'],
  ['/product/exam', '/img/product/exam/exam.jpg'],
  ['/product/exercise', '/img/product/exercise/exercise.jpg'],
  //excel
  ['/product/base', '/img/product/excel.png'],
  ['/product/finance_account', '/img/product/excel.png'],
  ['/product/manage_account', '/img/product/excel.png'],
])
export default {
  data: function () {
    return {
      bgMap:mapBg,
      navList: [
        {
          title: '智能可视化云平台',
          isLeaf: false,
          list: [{
            title: '产品简介',
            isLeaf: true,
            link: '/product/',
          },]
        },
        {
          title: '大数据',
          isLeaf: false,
          list: [
            {
              title: '财务分析',
              isLeaf: true,
              link: '/product/finance',
            },
            {
              title: '审计',
              isLeaf: true,
              link: '/product/audit',
            }
          ]
        },
        {
          title: '管理会计',
          isLeaf: false,
          list: [
            {
              title: '教学平台',
              isLeaf: true,
              link: '/product/teach',
            },
            {
              title: '竞赛平台',
              isLeaf: true,
              link: '/product/exam',
            },
            {
              title: '训练平台',
              isLeaf: true,
              link: '/product/exercise',
            },
          ]
        },
        {
          title: 'Excel课程',
          isLeaf: false,
          deep: 1,
          list: [
            {
              title: '基础',
              isLeaf: true,
              link: '/product/base',
            },
            {
              title: '财务会计',
              isLeaf: true,
              link: '/product/finance_account',
            },
            {
              title: '管理会计',
              isLeaf: true,
              link: '/product/manage_account',
            },
          ]
        },
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
    font-family:'Microsoft YaHei';
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
}
</style>
