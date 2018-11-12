<template>

    <div class="footer border-top">
      <router-link to="/" tag="div"class="iconfont footer-icon">
        &#xe65e;
      </router-link>
      <router-link to="/message" tag="div"class="iconfont footer-icon">
        &#xe602;
      </router-link>

      <div class="iconfont footer-icon">&#xe661;</div>

      <router-link to="/wish" tag="div"class="iconfont footer-icon">
        &#xe62a;
      </router-link>
      <router-link to="/pictures" tag="div"class="iconfont footer-icon">
        &#xe650;
      </router-link>
    </div>

</template>


<script>
  export default {
    name: 'Footers'
  }
</script>

<style lang="stylus" scoped>
  .border-top
    &:before
      border-color: #ccc
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



