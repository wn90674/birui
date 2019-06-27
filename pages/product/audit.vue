<template>
  <!-- 大数据+审计 -->
  <div>
    <h2 class="title br__primary">大数据+审计实战教学云平台</h2>
    <p
      class="br__text"
    >大数据+审计实战教学平台，配套多年企业海量数据，以先进的大数据平台作为辅助审计工具，培养学生数据清洗、数据表关联、数据建模、数据分析到数据可视化的综合大数据分析平台应用能力，实现传统审计和大数据审计的互补，提高审计效率和审计效果。</p>
    <!-- <img src="/img/bigData_audit.jpg" width="100%" alt="大数据+审计1"> -->
    <img src="/img/bigData_audit2.jpg" width="100%" alt="大数据+审计2">
  </div>
</template>

<script>
export default {
  components: {
    Banner: () => import('~/components/Banner/index.vue'),
  }
}
</script>

<style scoped>
h2.title {
  margin-bottom: 20px;
  padding: 15px 0;
  border-bottom: 1px solid;
}
p {
  margin-bottom: 20px;
}
</style>
