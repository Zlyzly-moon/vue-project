<template>
  <div id="app">
    <div class="noshipei">没有适配</div>
    <div class="shipei">适配</div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus">   
#app
 .shipei
   width 10rem
   height 100px
   background-color yellow 
  .noshipei
    width 375px
    height 100px
    background-color blue
</style>
