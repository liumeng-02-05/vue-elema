import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/page/home";
import Find from "../components/page/Find"
import Login from "../components/page/Login"
import Mine from "../components/page/Mine"
import Error from "../components/page/Error"
import Shopcar from "../components/page/Shopcar"
import Detail from "../components/page/Detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/",
      redirect : "/home"
    },
    {
      name : 'home',
      component : home,
      path : "/home"
    },
    {
      name : 'login',
      component : Login,
      path : "/login"
    },
    {
      name : 'mine',
      component : Mine,
      path : "/mine"
    },
    {
      name : 'find',
      component : Find,
      path : "/find"
    },
    {
      name : 'detail',
      component : Detail,
      path : "/detail/id"
    },
    {
      name : 'shopcar',
      component : Shopcar,
      path : "/shopcar"
    },
    {
      path : "/error",
      component :Error,
      name : "error"
    },
    
    {
      path : "**",
      redirect: "/error"
    }
  ],
  mode : 'history'
})
