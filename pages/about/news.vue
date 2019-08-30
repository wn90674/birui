<template>
  <!-- 行业动态 -->
  <div class="news-container">
    <h2 class="title br__primary">行业新闻</h2>
    <ul class="news">
      <li v-for="item in news" :key="item.date">
        <div class="left">
          <a class="news-link" :href="item.url" target="_blank">{{item.title}}</a>
          <span class="news-date">{{item.date}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";
export default {
  async asyncData({ params }) {
    const {data} = await axios.get("/v1/news");
    return { news:data};
  }
};
</script>
<style lang="scss" scoped>
.news-container {
  h2.title {
    padding: 15px 0;
    border-bottom: 1px solid;
  }
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
}
</style>
