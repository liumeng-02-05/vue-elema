import {ADD_USER,FOOT_CHANGE,DETAIL_DATA,SUBTRACT} from "./type"
import store from "./state";
export default {
    ADD_USER : ((stote,payload) => {
        stote.usermsg = payload;
        store.userTrue = true;
        localStorage.setItem("user", stote.usermsg);
    }),
    FOOT_CHANGE : ((stote,payload) => {
        stote.footTrue = payload;
    }),
    DETAIL_DATA :((store,payload)=>{
        store.detailDate = payload;
    }) ,
    SHOPPCAR : (store,payload)=>{
        store.shopcarData = payload;
    },
    SUBTRACT:(store,payload)=>{
        store.shopcarData = payload
    }
}

