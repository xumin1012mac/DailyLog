<template>
    <div class="container">
      <img class="img" src="@/assets/6.jpeg"/>
      <div class="info">
        <!--<div class="title">纪念日</div>-->
        <div class="desc">We've together</div>
        <div class="number"> 90 </div>
        <div class="days"> Days ! </div>

      </div>
    </div>
</template>


<script>
  export default {
    name: 'Anniversary'
  }
</script>

<style lang="stylus" scoped>
  .container
    position: relative
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 98%
    border-radius: .2rem
    /*margin-top: 1.8rem*/
    opcity: 0.8
    /*background: url('~@/assets/33.jpeg')  no-repeat center*/
    .img
      width: 100%
      /*border-radius: .2rem*/
    .info
      display: flex
      justify-content: center
      position: absolute
      right: 0
      left: 0
      top: 0
      color: white
      /*.title
        position: absolute
        margin-top :.4rem
        font-size: .7rem
        opacity: 0.7*/
      .desc
        position: absolute
        margin-top :.8rem
        font-size: .6rem
        opacity: 0.9
      .number
        position: absolute
        margin-top :2.2rem
        font-size: 1rem
      /*  color: black*/
      .days
        position: absolute
        margin-top :3.4rem
        font-size: .6rem
        opacity: 0.9


</style>
