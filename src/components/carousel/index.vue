<template>
  <div class="floorBanner">
    <div class="swiper-container"  ref="swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="img1 in list"
          :key="img1.id"
        >
          <img :src="img1.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min.js'
export default {
  name: 'carousel',
  props:['list'],
  watch: {
    bannerList: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.swiper, {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
      },
    },
  },
}
</script>

<style></style>
