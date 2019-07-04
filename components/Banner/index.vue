<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(banner,index) in list"
        :key="index"
        :style="computeUrl(banner.url)"
      >
        <pre :class="['text',`text-${index}`]">{{banner.title}}</pre>
      </div>
    </div>
    <!-- 前进/后退 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 分页器 -->
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
        height: 720,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    }
  },
  methods: {
    computeUrl(url) {
      return {
        'background': `url(${url}) no-repeat`,
        'background-size': 'cover',
      }
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     //this.banners.push('/4.jpg')
  //     console.log('banners update')
  //   }, 3000)
  //   this.mySwiper.slideTo(3, 1000, false)
  // }
}
</script>
<style lang="scss" scoped>
.swiper-slide {
  height: 640px;
}
.text {
  margin: 240px 0 0 200px;
  text-align: left;
  font-family: 'Microsoft YaHei';
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  color: #fff;
  &.text-1 {
    width: 580px;
  }
  &.text-0,&.text-2 {
    margin-top: 270px;
  }
  &.text-3 {
    width: 540px;
  }
  &.text-4{
    width: 430px;
  }
}
</style>

