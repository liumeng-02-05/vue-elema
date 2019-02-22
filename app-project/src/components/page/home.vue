<template>
    <div class="app-Home">
        <div class="app-Home-top clear">
            <div class="app-Home-top-site">

            </div>
            <div class="app-Home-top-search">
                <p>
                    <i></i>
                    <span>搜索饿了么商家、商品名称</span>
                </p>
            </div>
        </div>
        <div class="app-Home-list">
            <!-- 首页的分类列表  使用sweiper滑动  -->
            <div class="app-Home-list-one clear" >
                <a href="javascript:;" v-for="v in nav1" :key="v.id">
                   <img :src="'https://fuss10.elemecdn.com/'+ v.image_hash.substring(0,1)+'/'+v.image_hash.substring(1,3)+ '/' +v.image_hash.substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'"  alt="">
                    <span>{{v.name}}</span>
                </a>
            </div>
            <div class="app-Home-list-two claer"  style="display:none" >
                <a href="javascript:;" v-for="v in nav2" :key="v.id">
                    <img :src="'https://fuss10.elemecdn.com/'+ v.image_hash.substring(0,1)+'/'+v.image_hash.substring(1,3)+ '/' +v.image_hash.substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'"  alt="">
                    <span>{{v.name}}</span>
                </a>
            </div>       
        </div>
        <!--品质套餐  -->
        <div class="app-Home-quality">
            <div class="app-Home-quality-left">
                <h2>品质套餐</h2>
                <p>搭配齐全吃得好</p>
                <a href="javascript:;">立即抢购></a>
            </div>
            <div class="app-Home-quality-right">
                <img  src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" alt="" />
            </div>
        </div>
        <!--  资质证照  -->
        <div class="app-Home-license">
            <!-- <img src="http://temp.im/375x85/4CD964/fff"  alt=""  /> -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="v in ban " :key="v.id">
                        <img :src="'https://fuss10.elemecdn.com/'+ v.image_hash.substring(0,1)+'/'+v.image_hash.substring(1,3)+ '/' +v.image_hash.substring(3)+'.jpeg?imageMogr/format/webp/thumbnai/l568x'"  alt="">
                    </div>
                </div>
            </div>
            <span>资质证照</span>
        </div>
        <!--  推荐商家  -->
        <div class="app-Home-recommend">
            <h2>推荐商家</h2>
            <i></i>
        </div>
        <!--  排序  -->
        <div class="app-Home-sort">
            <div class="app-Home-sort-top">
                <a href="javascript:;">综合排序</a>
                <a href="javascript:;">距离最近</a>
                <a href="javascript:;">品质联盟</a>
                <a href="javascript:;">筛选</a>
            </div>
            <div class="app-Home-sort-bottom">
                <ul>
                    <li 
                        v-for = "v in arr" :key="v.restaurant.id"
                    >
                        <router-link
                         :to="{name:'detail',params:{'id':v.restaurant.id}}"
                        >
                        <div class="app-Home-sort-bottom-left">
                            <img :src="'https://fuss10.elemecdn.com/'+ v.restaurant.image_path.substring(0,1)+'/'+v.restaurant.image_path.substring(1,3)+ '/' +v.restaurant.image_path.substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'"  alt="">
                        </div>
                        <div class="app-Home-sort-bottom-right">
                            <p>
                                <i v-if = "v.restaurant.is_premium ">{{v.restaurant.is_premium ? "品牌" : ''}}</i>
                                <span>{{v.restaurant.name}}</span>
                                <b>···</b>
                            </p>
                            <p>
                                <img src="http://temp.im/112x20/4CD964/fff"  alt="" />
                                <span>{{v.restaurant.rating}}</span>
                                <span>月售{{v.restaurant.recent_order_num}}单</span>
                                <i v-if="v.restaurant.delivery_mode"> {{v.restaurant.delivery_mode ? v.restaurant.delivery_mode.text  : "" }}</i>
                            </p>
                            <p>
                                <s>
                                    <span>¥{{v.restaurant.float_minimum_order_amount}}起送</span>
                                    <b>|</b>
                                    <span>{{v.restaurant.piecewise_agent_fee.description ? v.restaurant.piecewise_agent_fee.description : v.restaurant.piecewise_agent_fee }}</span>
                                </s>
                                <s>
                                    <span>{{v.restaurant.distance}}m</span>
                                    <b>|</b>
                                    <span>{{v.restaurant.order_lead_time}}分钟</span>
                                </s>
                            </p>
                            <p>
                                <i >{{v.restaurant.support_tags[0].text}}</i>
                                <span>
                                    <img  v-if = 'v.restaurant.recommend.reason' src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="" />
                                    <b>{{v.restaurant.recommend.reason}}</b>
                                </span>
                            </p>
                            <p></p>
                            <p>
                                <span>首</span>
                                <b>新用户下单立减20元</b>
                                <u>14个活动</u>
                                <img src="http://temp.im/13x6/4CD964/fff" alt="" />
                            </p>
                            <p>
                                <i>特</i>
                                <span>满9减8，满20减14，满57减29，满91减35</span>
                            </p>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <a class="Home-right" href="javascript:;" @click="gotop" > </a>
    </div>
</template>
<script>
import axios from "axios";
import Swiper from "swiper";
// console.log(Swiper)
import Vue from 'vue'
export default {
    name : "app-Home",
    data(){
        return{
            arr : [],
            nav1 : [],
            nav2 : [],
            ban : []
        }
    },
    methods:{
        gotop(){
            const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop();
        }
    },
    created(){
        // 获取数据
        // axios.get("/ele/restapi/shopping/v3/restaurants",{
        //     params : {
        //         latitude: 32.303627,
        //         longitude: 118.316264,
        //         offset: 0,
        //         limit: 8,
        //         'extras[]': 'activities',
        //         'extras[]': 'tags',
        //         extra_filters: 'home',
        //         rank_id: null,
        //         terminal: 'h5'
        //     }
        // })
        // .then((res) => {
        //     // console.log(res.data)
        //    this.arr = res.data.items;
        // })
        // .catch(err => console.log(err))
        // 商品信息
        axios.get("../../../static/data/home.json")
        .then((res) => {
            // console.log(res);
            this.arr = res.data.items;
        })
        .catch(err => console.log(err))
        // 导航信息
        axios.get("../../../static/data/home-nav.json")
        .then((res) => {
            // console.log(res.data[0].entries);
            this.nav1 = res.data[0].entries.slice(0,10)
            this.nav2 = res.data[0].entries.slice(10);
        })
        .catch(err => console.log(err))
        // 轮播信息
        axios.get("../../../static/data/home-ban.json")
        .then((res) => {
            // console.log(res.data);
            this.ban = res.data;
        })
        .catch(err => console.log(err))
        // swiper实例化
        // this.nextTick(()=>{
        //     this.swiper = new Swiper('.swiper-container',{
        //         autoplay: true,
        //         loop: true
        //     })
        // })
        setTimeout(function(){
            new Swiper('.swiper-container',{
                autoplay : true,
                loop: true
            })
        },0) 
    }
}
</script>

<style  scoped lang="scss">
    *{font-size:.12rem;}
    a,s,u{color:#333;text-decoration: none;}
  .app-Home{
    .app-Home-top{
        padding-bottom:.16rem;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        .app-Home-top-site{
            width:6.94rem;
            height:.69rem;
            margin:.14rem auto;
        }
        .app-Home-top-search{
            width:6.94rem;
            height:.72rem;
            margin: 0 auto;
            p{
                background:#fff;
                text-align:center;
                height:100%;
                position: relative;
                i{
                    width:.32rem;
                    height:.32rem;
                    background:yellow;
                    display:block;
                    position: absolute;
                    top:.2rem;
                    left:1.5rem;
                }
                span{
                    font-size:.16rem;
                    color:#999;
                    line-height:.72rem;
                    border-radius:.05rem;
                    
                }
            }
        }
    }
    .app-Home-list{
        height:1.77rem;
        div{
            // width:100%;
            height:3.54rem;
            float:left;
            a{
                display:block;
                margin-top:.2rem;
                width:1.5rem;
                height:1.27rem;
                float:left;
                img{
                    display:block;
                    width:.9rem;
                    height:.9rem;
                    margin:0 auto;
                }
                span{
                    margin-top:.08rem;
                    text-align:center;
                    height:.28rem;
                    line-height:.28rem;
                    color:#333;
                    display:block;
                    font-size:.12rem;
                }
            }
        }
    }
    .app-Home-quality{
        background:rgb(248,248,248);
        width:7.1rem;
        height:2.2rem;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
        .app-Home-quality-left{
            padding-left:.2rem;
            h2{
                font-size:.18rem;
                font-weight:900;
                color:#333;
                margin-bottom:.15rem;
                margin-top:.15rem;
            }
            p{
                font-size:.14rem;
                color:#666;
                margin-bottom:.2rem;
            }
            a{
                display:block;
                font-size:.14rem;
                color:#af8260;
                font-weight:900;
            }
        }
        .app-Home-quality-right{
            img{
                display:block;
                width:2.82rem;
                height:1.88rem;
                margin:.18rem .1rem 0 0 ;
            }
        }
    }
    .app-Home-license{
        margin:.1rem auto;
        width:7.1rem;
        height:1.77rem;
        position: relative;
        img{
            display:block;
            width:100%;
            height:100%;
        }
        span{
            position: absolute;
            background:rgba(0, 0, 0, .5);
            color:#fff;
            width:1.1rem;
            height:.38rem;
            text-align:center;
            line-height:.38rem;
            font-size:.14rem;
            border-radius: .15rem;
            right:.05rem;
            bottom:.08rem;
            z-index:100;
        }
    }
    .app-Home-recommend{
        height:.72rem;
        position: relative;
        h2{
            text-align:center;
            line-height:.72rem;
            font-size:.16rem;
            width:1.5rem;
            background:#fff;
            margin:0 auto;
            position: relative;
            z-index:11;
        }
        i{
            position: absolute;
            width:2.5rem;
            left:2.4rem;
            height:.01rem;
            background:#000;
            top:.36rem;
            z-index:10;
            display:block;
        }
    }
    .app-Home-sort{
        .app-Home-sort-top{
            height:.8rem;
            display:flex;
            justify-content: space-around;
            position: relative;
            border-bottom:.01rem solid #ccc;
            a{
                display:block;
                width:1.96rem;
                line-height:.8rem;
                font-size:.16rem;
                text-align:center;
            }
        }
        .app-Home-sort-bottom{
            padding-bottom:1.1rem;
            ul{
                li{
                    padding:.3rem .2rem;
                    border-bottom:.01rem solid #ccc;
                    a{
                        display: flex;
                        justify-content: center;
                        .app-Home-sort-bottom-left{
                            img{
                                display:block;
                                width:1.3rem;
                                height:1.3rem;
                            }
                        }
                        .app-Home-sort-bottom-right{
                            margin-left:.2rem;
                            width:5.8rem;
                            p:nth-of-type(1){
                                height:.4rem;
                                i{
                                    display:block;
                                    float: left;
                                    width:.53rem;
                                    height:.33rem;
                                    background-image: linear-gradient(-139deg,#fff100,#ffe339);
                                    color:#000;
                                    font-size:.1rem;
                                    transform: scale(.8);
                                    text-align:center;
                                    line-height:.33rem;
                                    font-weight: 900;
                                    margin-top:.04rem;
                                }
                                span{
                                    float: left;
                                    margin-left:.08rem;
                                    font-size:.18rem;
                                    font-weight: 900;
                                    line-height:.4rem;
                                    color:#000;
                                }
                                b{
                                    float: right;
                                    height:.27rem;
                                    display:block;
                                }
                            }
                            p:nth-of-type(2){
                                margin-top:.15rem;
                                height:.29rem;
                                img{
                                    display:block;
                                    float: left;
                                    width:1.12rem;
                                    height:.2rem;
                                    margin-top:.04rem;
                                }
                                span{
                                    float: left;
                                    margin-left:.08rem;
                                    font-size:.1rem;
                                    color:#666;
                                    line-height:.29rem;
                                }
                                i{
                                    float: right;
                                    display:block;
                                    width:.88rem;
                                    height:.24rem;
                                    background-image: linear-gradient(45deg,#0085ff,#0af);
                                    color:#fff;
                                    font-size:.08rem;
                                    text-align:center;
                                    line-height:.20rem;
                                }
                            }
                            p:nth-of-type(3){
                                height:.29rem;
                                margin-top:.15rem;
                                display:flex;
                                justify-content: space-between;
                                s{
                                    display:block;
                                    height:.29rem;
                                    span{
                                        font-size:.1rem;
                                        line-height:.29rem;
                                    }
                                    b{
                                        margin:0 .08rem;
                                        line-height:.29rem;
                                    }

                                }
                            }
                            p:nth-of-type(4){
                                margin-top:.15rem;
                                height:.38rem;
                                line-height: .38rem;
                                i{
                                    font-size:.1rem;
                                    color:#666;
                                    float: left;
                                }
                                span{
                                    float: left;
                                    margin-left:.2rem;
                                    img{
                                        float: left;
                                        display:block;
                                        width:.2rem;
                                        height:.2rem;
                                        margin-top:.09rem;
                                        margin-right:.05rem;
                                    }
                                    b{
                                        float: left;
                                        color: #e8470b;
                                        font-size:.1rem;
                                    }
                                }
                            }
                            p:nth-of-type(5){
                                height:.27rem;
                            }
                            p:nth-of-type(6){
                                height:.36rem;
                                span{
                                    width:.28rem;
                                    height:.28rem;
                                    display:block;
                                    float: left;
                                    color:#fff;
                                    background-color: rgb(112, 188, 70);
                                    font-size:.1rem;
                                    line-height:.28rem;
                                    text-align:center;
                                }
                                b{
                                    float: left;
                                    margin-left:.15rem;
                                    display:block;
                                    width:4rem;
                                    
                                }
                                u{
                                    float: left;
                                    display:block;
                                }
                                img{
                                    float: left;
                                    width:.13rem;
                                    height:.06rem;
                                    display:block;
                                    margin-top:.08rem;
                                    margin-left:.02rem;
                                }
                                img:after{
                                    content: "";
                                    clear:both;
                                }
                            }
                            p:nth-of-type(7){
                                height:.36rem;
                                margin-top:.08rem;
                                line-height:.36rem;
                                padding-bottom:.1rem;
                                i{
                                    width:.28rem;
                                    height:.28rem;
                                    display:block;
                                    float: left;
                                    color:#fff;
                                    background-color: rgb(241, 136, 79);
                                    font-size:.1rem;
                                    line-height:.28rem;
                                    text-align:center;
                                    margin-top:.04rem;
                                    margin-right:.15rem;

                                }
                                span{
                                    width:4.4rem;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    display:block;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .Home-right{
        display:block;
        position:fixed;
        right:.3rem;
        bottom:2rem;
        width:.85rem;
        height:.85rem;
        border-radius: 50%;
        background:#fff url(../../../static/img/ssss.png) no-repeat;
        z-index:1001;
        border:.01rem solid #ccc;
        background-size:cover;
       
        
    }
}
</style>
