<template>
  <!-- 产品操作手册 -->
  <section class="help-document">
    <h2 class="title br__primary">产品操作手册</h2>
    <embed
      class="pdf"
      src="http://wn90674.cn/%E6%99%BA%E8%83%BD%E4%BA%91%E5%B9%B3%E5%8F%B0%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.pdf"
      width="100%"
      height="720px"
      type="application/pdf"
    >
  </section>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.help-document {
  h2.title {
    margin: 20px 0 20px;
    padding: 15px 0;
    font-size: 20px;
    border-bottom: 1px solid;
  }
  .pdf {
    overflow-x: hidden;
  }
}
</style>
