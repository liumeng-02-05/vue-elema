<template>
  <div id="app">
      <router-view></router-view>
    <Foot  v-show = 'footTrue'></Foot>

  </div>
</template>

<script>
import Foot from "./components/common/Foot"
 import {mapGetters} from 'vuex'
 import {FOOT_CHANGE,FOOT_CHANGE2} from "./store/type"
export default {
  name: 'App',
  
  components : {
    Foot
  },
  computed: {
      ...mapGetters(["footTrue"])
    },
  watch: {
      //路由的监听
      $route: {
        handler(){
          let path = this.$route.path ;
          let arr =["/hopcar","/login"]
          if(/login|hopcar|detail/.test(path)){
              this.$store.dispatch('FOOT_CHANGE',false)
          }
           if(/home|mine|find/.test(path)){
            this.$store.dispatch('FOOT_CHANGE',true)
          }
           
        },
        immediate: true //立刻开启当前数据监听和执行
      }
  }
}
</script>

<style>

#app {
 
}
</style>
