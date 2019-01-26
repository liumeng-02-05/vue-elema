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
// import "./instrument"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
