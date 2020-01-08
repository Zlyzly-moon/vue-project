<template>
  <div id="app">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="btn1">测试按钮1</button>
    <button class="btn2">测试按钮2</button>
    <ul>
      <li @click="handleClick(item)" :class="{active: navIndex === item}" v-for="item in 10" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      navIndex:1
    }
  },
  methods: {
    handleClick(item){
       this.navIndex = item
       console.log(item);
    }
  },
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
@import "./common/stylus/mixins.styl"
$color = pink
btnStyle(w, h, bg)
    width w
    height h
    background bg
    border none
add(a,b)
   a+b
 #app 
  color $color
  .btn1
    btnStyle(100px, 100px, red)
    padding add(10px,20)
    box-sizing content-box
  .btn2
    btnStyle(100px, 100px, green)
    margin-left 10px
  ul
    li
      font-size 20px
      line-height 40px
      bottom-border-1px($color)
      &.active
          color $yellow 
    
  
   
  

</style>
