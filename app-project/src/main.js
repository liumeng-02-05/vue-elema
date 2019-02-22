// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./instrument/rem"
import "./stylesheet/main.scss"
Vue.config.productionTip = false
//引入全局的工具库
import "../node_modules/font-awesome/css/font-awesome.css"
// 引入axios
import axios from  "axios"
// Vue.prototype.$http = axios;
// axios.defaults.withCredentials=true;
// import "./instrument"
/* eslint-disable no-new */
//引入swiper库
import Swiper from "../node_modules/swiper/dist/css/swiper.css";
// 引入vuex
import store from './store';
import {mapActions,mapGetters,mapMutations} from "vuex"
// console.log(swiper)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
