<template>
  <ul class="container">
    <li v-for="(item,index) in list" :key="index">
      <a :href="item.link" title="点击进入案例详情">
        <img :src="item.url" width="100%" :alt="item.content">
        <p :class="`tiitle-${index}`">{{item.content}}</p>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      require: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  list-style: none;
  justify-content: space-around;
  padding-left: 0;
  li {
    position: relative;
    width: 100%;
    height: 248px;
    overflow: hidden;
    cursor: pointer;
    a {
      display: block;
      height: 100%;
      padding-top: 100px;
      box-sizing: border-box;
    }
    img {
      position: absolute;
      z-index: -10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: transform 1s;
    }
    p {
      text-align: center;
      color: #fff;
      letter-spacing: 10px;
      font-size: 24px;
      transform: translate(-190px, 80px);
      &.title-2 {
      }
      &.tiitle-3 {
      }
      &:hover {
        color: #0967b6;
      }
    }
    &:hover img {
      cursor: pointer;
      transform: scale(1.15);
    }
  }
}
</style>
