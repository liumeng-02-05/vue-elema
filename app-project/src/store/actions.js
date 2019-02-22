import{ADD_USER,FOOT_CHANGE,DETAIL_DATA,SHOPPCAR,SUBTRACT}  from "./type"
import axios from "axios"
const actions = {
    ADD_USER : ({commit,state},payload)=>{
        // console.log(state);
        // console.log(payload)
        commit(ADD_USER,payload)
    },
    FOOT_CHANGE : ({commit,state},payload) => {
        commit(FOOT_CHANGE,payload)
    },
    DETAIL_DATA : ({commit,state},payload)=>{
        axios.get("../../static/data/detail.json")
        .then((res) => {
            // console.log(res)
            payload = res.data;
            commit(DETAIL_DATA,payload)
        })
        .catch(err => console.log(err))
    },
    SHOPPCAR : ({commit,state},payload)=>{
        let cars = getCars();
        let isHash  = cars.some(item=>{
            if(item.virtual_food_id === payload.virtual_food_id){
                item.num++ 
                return true
            }
        })
        if(!isHash){
            payload.num = 1;
            cars.push(payload)
        }
        // console.log(cars,111)
        localStorage.cars = JSON.stringify(cars);
        commit(SHOPPCAR,cars)
    },
    SUBTRACT : ({commit,state},payload)=>{
        let cars = getCars();
        cars.forEach((item,index)=>{
            if(item.virtual_food_id == payload.virtual_food_id){
                item.num--
                if(item.num <= 0 ){
                    cars.splice(item.id,1)
                    return true
                }
                
            }
        })
        localStorage.cars = JSON.stringify(cars);
        commit(SUBTRACT,cars)
        // console.log(cars,222)
    }

}
// 获取本地存储的数据
function getCars(){
    return JSON.parse(localStorage.cars ? localStorage.cars : "[]");
}
export default actions;