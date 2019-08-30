<template>
  <section class="container">
    <Banner :list="banners"/>
    <article class="parterns">
      <h2 class="title br__primary">合作伙伴</h2>
      <div class="school"></div>
      <!-- <img src="/img/parterns.jpg" width="100%" alt="合作学校"> -->
      <!-- <ul >
        <li></li>
      </ul> -->
    </article>
  </section>
</template>

<script>
export default {
  components: {
    Banner: () => import('~/components/Banner/index.vue'),
  },
  data: function () {
    return {
      banners: [
        { "title": "搭建院校应用型人才培养与产业人才需求的桥梁", "url": "/img/banner/1.jpg" },
        { "title": `提供富有时代特点和发展趋势的创新型商科课程平台\n实现培养管理会计人才转型`, "url": "/img/banner/2.jpg" },
        { "title": "致力于为社会输送高质量人才提供服务", "url": "/img/banner/3.jpg" },
        { "title": `致力于成为领先的“大数据+”课程产品服务提供商\n实现培养数字化人才转型`, "url": "/img/banner/4.jpg" },
        { "title": `校企合作开发课程，支持特色教学改革\n共建实验中心,积极助力“水课”变“金课`, "url": "/img/banner/5.jpg" }]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  .parterns {
    margin: 20px auto;
    width: 1000px;
    .school {
      width: 100%;
      height: 400px;
      background: url('/img/parterns.jpg') no-repeat;
      background-size: contain;
    }
  }
}

.title {
  margin: 20px 0;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 32px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
