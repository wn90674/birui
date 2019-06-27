<!-- You can custom the "mySwiper" name used to find the swiper instance in current component -->
<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner,index) in list"
        :key="index"
        :style="computeUrl(banner.url)"
      >
        <p class="text">{{banner.title}}</p>
        <!-- <img :src="banner.url" width="100%"> -->
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
 
<script>
export default {
  props: {
    list: {
      type: Array,
      require: true,
      default: () => ['https://cn.azul.com/files/homepage-banner-may-18.jpg', 'https://cn.azul.com/files/homepage-banner-may-18.jpg', 'https://cn.azul.com/files/homepage-banner-may-18.jpg'],
    }
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // some swiper options...
      }
    }
  },
  methods: {
    computeUrl(url) {
      return {
        background: `url(${url}) no-repeat`
      }
    }
  },
  mounted() {
    setTimeout(() => {
      //this.banners.push('/4.jpg')
      console.log('banners update')
    }, 3000)
    console.log(
      'This is current swiper instance object', this.mySwiper,
      'It will slideTo banners 3')
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>
.text {
  height: 600px;
  line-height: 500px;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
}
</style>


