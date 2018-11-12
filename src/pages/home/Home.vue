<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <anniversary></anniversary>
      <footers></footers>
    </div>
</template>


<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import Footers from './components/Footers'
  import Anniversary from './components/Anniversary'
 /* import Footer from '@/common/footer/Footer'*/
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      Anniversary,
      Footers

    }
  }
</script>
