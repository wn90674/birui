<template>
  <!-- 导航下拉组件 -->
  <div class="br__dropdown__wrapper">
    <dl :class="`br__dropdown__${index}`" v-for="(item,index) in list" :key="index">
      <dt class="br__dropdown__header">{{item.title}}</dt>
      <dd class="br__dropdown__item"   v-for="(i,idx) in item.list" :key="`${index}-${idx}`">
        <a :href="i.link" v-if="i.isLeaf" class="br__primary">{{i.title}}</a>
        <a href="javascript:void(0)" v-else>{{i.title}}</a>
      </dd>
    </dl>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      required: true,
      type: Array,
    }
  },
  data: function () {
    return {
      data: 'aaaa'
    }
  }
}
</script>
<style lang="scss">
.br__dropdown__wrapper {
  position: absolute;
  z-index: 999;
  border-top: 3px solid #0967b6;
  margin: 5px 0 10px;
  padding-bottom: 5px;
  background-color: #f7f8f9;
  text-align: left;
}
.br__dropdown__wrapper  dt.br__dropdown__header {
  list-style: none;
  margin: 10px 10px 5px 10px;
  color:#999;
  font-size: 16px;
  font-weight: 700;
}
.br__dropdown__wrapper dd.br__dropdown__item {
  padding:0px 20px;
  font-size: 14px;
}
.br__dropdown__wrapper dd.br__dropdown__item a {
  padding: 5px 0;
  display: block;
}
.br__dropdown__wrapper dd.br__dropdown__item:hover{
  background-color: #ccc; 
  cursor: pointer;
}
</style>


