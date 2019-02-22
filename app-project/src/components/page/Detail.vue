<template>
    <div class="Detail">
        <div class="Detail-top"
        @click="goBack"
        >
            <img src="//fuss10.elemecdn.com/6/57/7fa965dfdc547c0d345b33a3b80bajpeg.jpeg?imageMogr/format/webp/thumbnail/150x/" alt="">
        </div>
        <div class="Detail-msg">
            <h3>
                <span>华莱士炸鸡汉堡（滁州中都大道店）</span>
                <i></i>
            </h3>
            <p>
                <span>评价4.9</span>
                <span>月售124单</span>
                <span>蜂鸟专送约29分钟</span>
            </p>
            <p class="first">
                <i>首单</i>
                <span>新用户下单立减8元(不与其它活动同享)</span>
                <u>1个优惠</u>
            </p>
            <p class="notice">公告：珍珠10:30提供   咖啡21:30后不提供</p>
        </div>
        <div class="Detail-nav">
            <ul>
                <li>
                    <a href="" > 点餐</a>
                    <div class="Detail-nav-bottom"></div>
                </li>
                    <li>
                    <a href=""> 评价</a>
                   <div class="Detail-nav-bottom"></div>
                </li>
                    <li>   
                    <a href=""> 商家</a>
                   <div class="Detail-nav-bottom"></div>
                </li>
            </ul>
        </div>
        <div class="Detail-recommend">
            <h3>商家推荐</h3>
            <ul>
                <li v-for = "v in recommend[0].items" :key="v.item_id">
                    <a href="javascript:;">
                        <!-- <img src="http://temp.im/240x240/4CD964/fff" alt=""> -->
                        <img :src="'//fuss10.elemecdn.com/'+ v.photos[0].substring(0,1)+'/'+v.photos[0].substring(1,3)+ '/' +v.photos[0].substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" alt="">
                        <p>{{v.name}}</p>
                        <span>
                            <i>{{v.tips.substring(4)}}</i>
                            <i>好评率0%</i>
                        </span>
                        <b>
                            <s>¥{{v.specfoods[0].price | float }}</s>
                            <span>
                                <u class="reduce"  
                                v-show="showFlag"
                                @click="subtract(v)"
                                >-</u>
                                <i
                                v-show="showFlag"
                                >1</i>
                                <u
                                @click="addcar(v)"
                                >+</u>
                            </span>
                        </b>
                    </a>
                </li>
            </ul>
        </div>
        <div class="Detail-shopping">
            <div class="Detail-shopping-left">
                <ul>
                    <li v-for="v in shopcar" :key="v.id">   
                        <a :href="'#'+v.id">{{v.name}}</a>
                    </li>
                </ul>
            </div>
            <div class="Detail-shopping-right">
                <!-- 热销 -->
                <div class="Detail-shopping-right-hot" v-for = "v in shopcar" :key="v.id">
                    <h3 :id="v.id">
                        <p>{{v.name}}</p>
                        <span>{{v.description}}</span>
                    </h3>
                    <ul > 
                        <li v-for="vv in v.foods" :key="vv.virtual_food_id">
                            <img :src="'//fuss10.elemecdn.com/'+ vv.photos[0].substring(0,1)+'/'+vv.photos[0].substring(1,3)+ '/' +vv.photos[0].substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" alt="">
                           <div class="Deatil-shopping-right-ul">
                                <p>{{vv.name}}</p>
                                <p class="te">{{vv.description}}</p>
                                <span>
                                    <i>{{vv.tips.substring(4)}}</i>
                                    <i>好评率100%</i>
                                </span>
                                <b>
                                    <s>
                                        <i>¥</i> 
                                        <span>{{vv.specfoods[0].price}}元</span>
                                        <i>起</i>
                                        <b >¥{{vv.specfoods[0].original_price}}</b>
                                    </s>
                                    <span >
                                        <u class="reduce"
                                        @click="subtract(vv)"
                                        v-show="showFlag"
                                        >-</u>
                                        <i
                                       v-show="showFlag"
                                        >1</i>
                                        <u 
                                        @click="addcar(vv)"
                                        >+</u>
                                    </span>
                                </b>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="Detail-bottom">
            <p>满20减8元，满30减12元</p>
            <div class="Detail-bottom-shopcar">
                <u v-if="shoopflag">
                    <img src="../../public/img/ss.svg" />
                </u>
                <u v-if="!shoopflag" class="shopcarflagte">
                    <img src="../../public/img/shopcar.svg" />
                </u>
                <i v-show="numflag">1</i>
                <p>
                    <span>未选购商品</span>
                    <span>另需配送费2元</span>
                </p>
                <b>¥15起送</b>
            </div>
        </div>
    </div>
</template>
<script>
// import img from "./"
import axios from "axios";
import {DETAIL_DATA, SHOPPCAR,SUBTRACT} from "../../store/type.js";
import {mapActions,mapGetters,mapState} from "vuex";   
export default {
    name : 'Detail',
    data(){
        return {
          showFlag : false,
          sum : 0,
          numflag : false,
          price : 0,
          priceflag : false,
          shoopflag : true
        }  
    },
    computed : {
          ...mapGetters(["DETAIL_DATA"]),
          shopcar (){
              return this.$store.state.detailDate.menu;
          },
         recommend(){
            // var items;
            // setTimeout(()=>{
            //     items = this.$store.state.detailDate.recommend[0].items
            // },300)
            // return items
            // console.log(items,222222222)
             return this.$store.state.detailDate.recommend
         }
    },
    methods : {
        // ...mapActions([SHOPPCAR,SUBTRACT])
        goBack(){
            this.$router.history.go(-1);
        },
        // add(){
        //     this.showFlag = true;
        //     let arr = this.shoppingmsg;
        // },
        getDate(){
            this.$store.dispatch('DETAIL_DATA');
        },
        addcar(data){
            this.$store.dispatch("SHOPPCAR",data);
            //  this.getDate();  
            this.showFlag = true
        },
        subtract(data){
            this.$store.dispatch("SUBTRACT",data);
            //  this.getDate();    
        },
       

    },
    filters : {
        float(val){
            return Math.round(val)
        }
    },  
    mounted(){  
       
        this.$store.dispatch('DETAIL_DATA')       
        // let arr = this.$store.state.shopcarDate;
        // if(arr){
        //     arr.map((item) => {
        //         this.sum += item.num
        //         this.price += item.num * item.price
        //     })
        //     if(this.price>=15){
        //         this.priceflag = true;
        //     }else{
        //         this.price = 15 - this.price
        //     }
        // }else{
        //     this.shoopflag = true
        // }
        
       
    },
    
}
</script>

<style lang="scss" scoped>
    .Detail{
        .Detail-top{
            height:2rem;
            background:rgb(207, 99, 10);
            position: relative;
            img{
                width:1.5rem;
                height:1.5rem;
                display:block;
                position:absolute;
                top:40%;
                left:50%;
                margin-left:-.75rem;
            }
        }
        .Detail-top:after{
            content:  "";
            display: inline-block;
            width: .33rem;
            height: .33rem;
            position: absolute;
            transform:rotate(180deg);
            background: url(../../assets/right.png) no-repeat 50%;
            background-size: contain;
            top:.2rem;
            left:.2rem;
        }
        .Detail-msg{
            height:1.89rem;
            padding-top:.6rem;
            h3{
                position:relative;
                span{
                    font-size:.38rem;
                    font-weight:900;
                    line-height:.49rem;
                    width:4.9rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display:block;
                    letter-spacing: .03rem;
                    margin-left:1rem;
                }
                i{
                    display: inline-block;
                    width: .13rem;
                    height: .22rem;
                    position: absolute;
                    background: url(../../assets/right.png) no-repeat 50%;
                    background-size: contain;
                    right:1.5rem;
                    top:.1rem;
                }
            }
            p{
                text-align:center;
                line-height:.5rem;
                span{
                    font-size:.24rem;
                    margin-left:.15rem;
                    color:rgb(151, 144, 144);
                }
            }
            p.first{
                line-height:.36rem;
                i{
                    width:.26rem;
                    color:#fff;
                    background:rgb(92, 223, 80);
                }
                span{
                    margin-left:0;
                }
                u{
                    margin-left:.2rem;
                }
            }
            p.notice{
                text-align:left;
                margin-left:.7rem;
                line-height:.4rem;
                color:rgb(151, 144, 144);
            }
        }
        .Detail-nav{
            height:.8rem;
            ul{
                display:flex;
                justify-content: space-around;
                border-bottom:.01rem solid #ccc;
                li{
                    width:2.5rem;
                    position:relative;
                    a{
                        display:block;
                        line-height:.8rem;
                        text-align:center;
                    }
                   .Detail-nav-bottom{
                        width:.6rem;
                        height:.04rem;
                        position:absolute;
                        background-color: rgb(35, 149, 255);
                        bottom:.02rem;
                        left:1rem;
                        display:none;
                    }
                }
            }
            
        }
        .Detail-recommend{
            padding-top:.32rem;
            width:100%;
            h3{
                font-size:.32rem;
                margin: 0 0 .2rem .32rem;
                font-weight:900;
            }
            ul{
                display:flex;
                justify-content: space-between;
                overflow-x: auto;
                li{
                    margin-right:.2rem;
                    width:2.4rem;
                    box-sizing: border-box;
                    margin-bottom:.32rem;
                    a{
                        display:block;
                        img{
                        display:block;
                        width:2.4rem;
                        height:2.4rem;
                        }
                        p{
                            margin-top:.14rem;
                            font-size:.26rem;
                            font-weight:900;
                            line-height:.33rem;
                            width:2.4rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        span{
                            display:block;
                            height:.24rem;
                            line-height:.24rem;
                            margin-bottom:.14rem;
                            i{
                                font-size:.2rem;
                            }
                        }
                        b{
                            margin-top:.2rem;
                            line-height:.3rem;
                            display:block;
                            height:.5rem;
                            s{
                                font-size:.43rem;
                                color: rgb(255, 83, 57);
                                float:left;
                            }
                            &>span{
                                float:right;
                                u{
                                    float: left;
                                    display:block;
                                    width:.44rem;
                                    height:.44rem;
                                    border-radius:50%;
                                    color:#fff;
                                    background:rgb(15, 202, 187);
                                    text-align:center;
                                    line-height:.44rem;
                                    font-weight:900;
                                }
                                u.reduce{
                                    margin-right:.1rem;
                                    color:rgb(11, 139, 139);
                                    background:#fff;
                                    border:.01rem solid rgb(11, 139, 139);
                                    margin-right:.1rem;
                                }
                                i{
                                    float:left;
                                    font-size:.3rem;
                                    line-height:.44rem;
                                    margin-right:.1rem;
                                }
                            }
                        }
                    }
                   
                }
                li:last-of-type{
                    margin-right:.32rem;
                }
                li:nth-of-type(1){
                    margin-left:.32rem;
                }
               
            }
        }
        .Detail-shopping{
            width:100%;
            display:flex;
            justify-content: space-between;
            padding-bottom:1.2rem;
            .Detail-shopping-left{
               overflow-x: auto;
                ul{
                    height:11.77rem;
                    overflow-x: auto;
                    li{
                        padding:.35rem .15rem;
                        box-sizing: border-box;
                        width:1.54rem;
                        background:rgb(230, 224, 224);
                        a{
                            display:flex;
                            justify-content: flex-start;
                            // img{
                            //     width:.52rem;
                            //     height:.52rem;
                            //     display:block;
                            //     margin-right:.15rem;
                            // }
                            span{
                                font-size:.26rem;
                                display:block;
                                line-height:.52rem;
                            }
                        }
                    }
                    li:nth-of-type(1){
                        text-indent: .42rem;
                        background:url(../../../static/img/05b.png) 10% no-repeat;
                        background-size:.32rem;
                    }
                    li:nth-of-type(2){
                        text-indent: .42rem;
                        background:#ccc url(../../../static/img/dec.png) 10% no-repeat;
                        background-size:.32rem;

                    }
                }
                .bg{
                    background:#fff;
                }
            }
            .Detail-shopping-right{
                flex:1;
                height:11.77rem;
                overflow-x: auto;
                margin-left:.2rem;
                div{
                    h3{
                        height:.28rem;
                        padding:.15rem  0 .15rem .2rem; 
                        display:flex;
                        justify-content: flex-start;
                        p{
                            font-size:.28rem;
                            margin-right:.1rem;
                            font-weight:900;
                        }
                        span{
                            font-size:.24rem;
                            color:rgb(173, 168, 168);
                        }
                    }
                    ul{
                        li{
                            height:1.9rem;
                            margin:.2rem 0 ;
                            display: flex;
                            justify-content: flex-start;
                            img{
                                width:1.9rem;
                                height:1.9rem;
                                display:block;
                                margin-right:.2rem;
                            }
                            .Deatil-shopping-right-ul{
                                position:relative;
                                flex:1;
                                p{
                                    font-size:.32rem;
                                    font-weight:900;
                                    line-height:.4rem;
                                    width:3.2rem;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                                p.te{
                                    color:#333;
                                    font-size:.24rem;
                                   
                                }
                                &>span{
                                    display:block;
                                    margin:.13rem 0; 
                                    i{
                                        font-size:.2rem;
                                        color:rgb(139, 135, 135);
                                    }
                                }
                                &>b{
                                  position:absolute;
                                  left:0;
                                  bottom:0; 
                                  display:block;
                                  right:0;
                                  margin:auto;
                                    s{
                                        display:block;
                                        float:left;
                                        color: rgb(255, 83, 57);
                                        i{
                                            font-size: .28rem;
                                            float:left;
                                            margin-top:.1rem;
                                        }
                                        span{
                                            font-size:.36rem;
                                            float:left;
                                        }
                                        b{
                                            float:left;
                                            margin-lefT:.1rem;
                                            color:rgb(131, 126, 126);
                                            margin-top:.15rem;
                                            text-decoration: line-through;
                                        }
                                    }
                                    &>span{
                                        float:right;
                                        u{
                                            float: left;
                                            display:block;
                                            width:.44rem;
                                            height:.44rem;
                                            border-radius:50%;
                                            color:#fff;
                                            background:rgb(15, 202, 187);
                                            text-align:center;
                                            line-height:.44rem;
                                            margin-right:.3rem;
                                            font-weight:900;
                                        }
                                        u.reduce{
                                              margin-right:.2rem;
                                              color:rgb(11, 139, 139);
                                              background:#fff;
                                              border:.01rem solid rgb(11, 139, 139);
                                        }
                                        i{
                                            float:left;
                                            font-size:.3rem;
                                            line-height:.44rem;
                                            margin-right:.15rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .Detail-bottom{
           position:fixed;
           left:0;
           right:0;
           bottom:0 ;
           margin:auto;
           height:1.2rem;
           background:rgb(58, 57, 57);
           &>p{
               height:.4rem;
               text-align:center;
               line-height:.4rem;
               font-size:.24rem;
               background:#f9e8a3;
               color:rgb(78, 76, 76);
           }
           .Detail-bottom-shopcar{
                display:flex;
                justify-content: flex-start;
                height:.96rem;
                position:relative;
                u{
                    display:block;
                    width:.8rem;
                    height:.8rem;
                    border-radius: 50%;
                    // url(../../public/img/ss.svg) 50% no-repeat;
                    margin-top:-.26rem;
                    // background-size:.5rem;
                     background:rgb(34, 33, 33);
                    box-shadow: 0 0 .1rem rgb(99, 97, 97);
                    margin-left:.34rem;
                    img{
                        display:block;
                        width:.6rem;
                        height:.6rem;
                        margin:.1rem auto;
                    }
                }
                u.shopcarflagte{
                    background:rgb(95, 205, 233);
                }
                i{
                    position:absolute;
                    top:-.35rem;
                    left:.9rem;
                    color:#fff;
                    height:.31rem;
                    width:.27rem;
                    display:block;
                    background:rgb(236, 54, 54);
                    font-size:.14rem;
                    border-radius: 50%;
                    text-align:center;
                    line-height:.31rem;
                }
                p{
                    padding-top:.1rem;
                    span{
                         display:block;
                        margin-left:.5rem;
                        font-size:.22rem;
                        color:rgb(184, 180, 180);
                    }
                    span:nth-of-type(2){
                        font-size:.18rem;
                    }
                }
                b{
                    position:absolute;
                    color:#fff;
                    right:.34rem;
                    font-size:.28rem;
                    top:.2rem;
                }
           }
        }
    }
</style>

