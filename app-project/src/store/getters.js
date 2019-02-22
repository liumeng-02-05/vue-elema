import {ADD_USER,FOOT_CHANGE,DETAIL_DATA,SUBTRAC,SHOPPCART} from "./type"
const getters = {
    ADD_USER : ((state) => {
        return state;
    }),
    footTrue : ((state) => {
        return state.footTrue;
    }),
    DETAIL_DATA : ((state)=>{
        // console.log(state,22222)
        return state.detailDate;
    }),
    SHOPPCAR : ((state) => {
        return state.shopcarData
    }),
    SUBTRACT : ((state) => {
        return state.shopcarData
    })

    

}

export default getters;