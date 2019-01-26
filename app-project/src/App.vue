<template>
  <div id="app">
    <Mine/>
 
  </div>
</template>

<script>
import home from "./components/page/home";
import Foot from "./components/common/Foot";
import Find from "./components/page/Find"
import Login from "./components/page/Login"
import Mine from "./components/page/Mine"
export default {
  name: 'App',
  components : {
    home,Foot,Find,Login,Mine
  }
}
</script>

<style>

#app {
 
}
</style>
