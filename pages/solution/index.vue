<template>
  <banner :list="list"/>
</template>

<script>
export default {
  components: {
    Banner: () => import('~/components/BaseThree/index.vue'),
  },
  data: function () {
    return {
      list: [
        'http://www.gcl-power.com/uploads/58171f35/01.jpg',
        'http://www.gcl-power.com/uploads/58171f4b/02.jpg',
        'http://www.gcl-power.com/uploads/58195f28/03.jpg'
      ]
    }
  }
}
</script>
