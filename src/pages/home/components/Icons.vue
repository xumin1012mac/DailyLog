<template>
    <div class="icons">
      <div class="icon">
        <div class="icon-img border-right">
          <img class="icon-img-content" src="@/assets/icons/icon1.png"/>
        </div>
        <p class="icon-desc">添加纪念日</p>
      </div>
      <div class="icon">
        <div class="icon-img">
          <img class="icon-img-content" src="@/assets/icons/icon1.png"/>
        </div>
        <p class="icon-desc">设置提醒</p>
      </div>
    </div>
</template>


<script>
  export default {
    name: 'HomeIcons'
  }
</script>

<style lang="stylus" scoped>
  .icons
    height: 0
    padding-bottom: 23%
    overflow: hidden
    .icon
      position: relative
      overflow: hidden
      float: left
      height :0
      width: 50%
      padding-bottom: 23%
      text-align: center
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: .8rem
        .icon-img-content
          height: 100%
          padding: .1rem
      .icon-desc
        position: absolute
        right:0
        left: 0
        bottom:0.3rem
</style>
