<template>
    <div>
      <h1 class="title">trace</h1>
      <h2 class="subtitle">My unreal Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
</template>

<script>
export default {
  components: {
    Banner: ()=>import('~/components/Banner/index.vue'),
  }
}
</script>
<style lang="scss" scoped>
.title {
 color: aqua;
}
</style>
