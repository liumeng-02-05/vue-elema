import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
import actions from "./actions";
import getters from "./getters";
import state from "./state"
import mutations from "./mutation"
const store  = new vuex.Store({
    actions,getters,state,mutations
})
export  default store;
