<template>
  <div class="wrapper">
    <div class="content">
      content
    </div>
    <div class="footer border-top">
      <div class="iconfont footer-icon">&#xe65e;</div>
      <div class="iconfont footer-icon">&#xe602;</div>
      <div class="iconfont footer-icon">&#xe661;</div>
      <div class="iconfont footer-icon">&#xe62a;</div>
      <div class="iconfont footer-icon">&#xe650;</div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="stylus" scoped>
  .border-top
    &:before
      border-color: #ccc
  .content
    height: 50rem
  .footer
    z-index: 2
    position: fixed
    display: flex
    align-items: center
    text-align: center
    left: 0
    right: 0
    bottom: 0
    height: 1.2rem
    background: white
    opacity: 0.8
    color: gray
    .footer-icon
      flex: 1
      font-size: .7rem
</style>



