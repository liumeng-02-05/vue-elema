<template>
    <div class="app-Foot">
        <ul>
            <li v-for = "v in arr " :key="v.id">
                <router-link
                    :to="{name:v.name}"
                >
                    <i  :class="['fa',v.class]"></i>
                    <span>{{v.conter}}</span>
                </router-link>
            </li>
        </ul>
      
    </div>
</template>
<script>

export default {
    name : "app-Foot",
    data (){
        return {
      
            arr : [
                {
                    id : 1 ,
                    conter : "首页",
                    class : "fa-home",
                    name : "home"
                },
                 {
                    id : 2,
                    conter : "发现",
                    class : "fa-search",
                    name : "find"
                },
                 {
                    id : 3 ,
                    conter : "订单",
                    class : "fa-calendar-minus-o",
                    name :　"shopcar"
                },
                 {
                    id :4,
                    conter : "我的",
                    class : "fa-user-o",
                    name :　"mine"
                }

            ]
        }
    }
}
</script>
<style scoped lang="scss"> 
    .app-Foot{
        width:100%;
        height:1.2rem;
        background:#fff;
        position:fixed;
        bottom:0;
        left:0;
        ul{
            display:flex;
            justify-content: space-between;
            margin-top:.25rem;
            li{
                width:1.75rem;
                height:.68rem;
                text-align:center;
                a{
                    display:block;
                    i{
                    display:block;
                    font-size:.45rem;
                    }
                    span{
                        font-size:.12rem;
                        display:block;
                        margin-top:.1rem;
                    }
                }
            }
        }
    }
</style>

