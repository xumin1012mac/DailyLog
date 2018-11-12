<template>
  <div class="wapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="@/assets/1.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/2.jpg"/>
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="@/assets/4.jpg"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay:true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wapper
    overflow : hidden
    width: 100%
    height: 0
    padding-bottom : 56.2%
    background : #eee
    .swiper-img
      width: 100%
</style>
