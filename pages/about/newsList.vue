<template>
  <!-- 行业动态-新闻<服务端异步获取> -->
    <ul class="news">
      <li v-for="item in news" :key="item.date">
        <div class="left">
          <a class="news-link" :href="item.url" target="_blank">{{item.title}}</a>
          <span class="news-date">{{item.date}}</span>
        </div>
      </li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
  data:function() {
    return {
      news:[]
    }
  },
  created() {
  debugger
  },
  async asyncData({ params }) {
    let { data } = await axios.get(`/v1/news`)
    debugger
    console.log(data)
    return { news: data.data }
  },
}
</script>
<style lang="scss" scoped>
  .news {
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #ccc;
      .left {
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .news-link {
          font-size: 14px;
          line-height: 24px;
        }
        .news-date {
          line-height: 22px;
          font-size: 12px;
        }
      }
    }
  }
</style>
