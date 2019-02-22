<template>
    <div class="Shopcar">
        <div class="Shopcar-top">
            <img src="../../assets/right.png" alt="" 
                @click="goBack"
            >
            <p>确认订单</p>
        </div>
        <div class="Shopcar-usemsg">
            <p>订单配送至</p>
            <h3>
                <span>滁州学院(会峰校区)滁州市琅琊区丰乐大道1528号男生宿舍2#624</span>
            </h3>
            <span>
                <b>xxx(先生)</b>
                <b>183xxxx1234</b>
            </span>
        </div>
        <div class="Shopcar-time">
            <div class="Shopcar-time-msg">
                <div class="Shopcar-time-msg-left">
                    <span>送达时间</span>
                    <b>蜂鸟专送</b>
                </div>
                <div class="Shopcar-time-msg-right">
                    尽快送达(16:45送达)
                </div>
            </div>
            <p> 
                <b>支付方式</b>
                <span>在线支付</span>
            </p>
        </div>
        <div class="Shopcar-shopping-msg">
            <h3>
                <span>郑记南门口</span>
                <b>(山水人家店)</b>
            </h3>
            <ul>
                <li v-for="v in shopcarDate" :key="v.virtual_food_id">
                   <p>
                        <!-- <img src="http://placehold.it/72x72/0f0/ccc.png" alt=""> -->
                           <img :src="'//fuss10.elemecdn.com/'+ v.photos[0].substring(0,1)+'/'+v.photos[0].substring(1,3)+ '/' +v.photos[0].substring(3)+'.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/'" alt="">
                         <span>{{v.specfoods[0].name}}
                             <b>小份</b>
                         </span>
                         
                   </p>
                    <i> ×{{v.num}}</i>
                    <s>
                        <b>¥</b>{{v.specfoods[0].price}}</s>
                </li>
            </ul>
            <p>
                <span>包装</span>
                <b>餐盒</b>
                <i>¥<b>2</b></i>
            </p>
            <span>
                <span>蜂鸟</span>
                <b>配送费</b>
                <i><b>¥</b>5</i>
            </span>
            <b>
                <i>红包</i>
                <s>0元可用</s>
            </b>
            <s>
                <i>优惠说明</i>
                <b>
                    小计¥
                    <u>{{price}}</u>
                </b>
            </s>
        </div>
        <div class="Shopcar-phone">
            <p>
                <b>
                    <span>餐具份数</span>
                     <b>未选择</b>
                </b>
                <span>马上助力环保</span>
            </p>
            
            <b>
                <i>订单备注</i>
                <u>口味、偏好</u>
            </b>
            <i>
                <s>号码保护</s>
                <u>号码保护中，将对商家、骑手隐藏您的真实手机号</u>
            </i>
        </div>
        <div class="Shopcar-bottom">
            <span>¥{{price+can+pei}}</span>
            <button>去支付</button>
        </div>
    </div>
</template>


<script>
export default {
    name : "Shopcar",
    data(){
        return{
            shopcarDate : null,
            num : 0,
            price: 0,
            can : 2,
            pei : 5
        }
    },
    methods : {
        goBack(){
            this.$router.history.go(-1)
        }
    },
    created(){
        this.shopcarDate = JSON.parse(localStorage.getItem("cars"))
        // console.log(this.shopcarDate)
        this.shopcarDate.map(item=>{
            this.num += item.num;
            this.price += Math.floor(item.num * item.specfoods[0].price)
        })
    }
}
</script>


<style lang="scss" scoped>
    .Shopcar{
        background:#ccc;
        width:100%;
        .Shopcar-top{
            position:fixed;
            left:0;
            right:0;
            top:0;
            margin:auto;
            height:.88rem;
            background-image: linear-gradient(90deg,#0af,#0085ff);
            z-index:200;
            img{
                width:.24rem;
                height:.38rem;
                display:block;
                position:absolute;
                left:.2rem;
                top:.2rem;
                transform:rotate(180deg);
            }
            p{
                text-align:center;
                font-size:.32rem;
                color:#fff;
                line-height:.88rem;
                font-weight:900;
            }
        }
        .Shopcar-usemsg{
            background-image: linear-gradient(90deg,#0af,#078aa1);
            height:1.6rem;
            padding: .32rem 0 .22rem .2rem ;
            margin:0 auto;
            color:#fff;
            margin-top:.88rem;
            p{
                font-size:.28rem;
                line-height: .4rem;
            }
            
            h3{
                position: relative;
                span{
                    margin-top:.15rem;
                    width:6.64rem;
                    font-size:.42rem;
                    font-weight:900;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    position:relative;
                    display:block;
                }
            }
            h3:after{
                content: "";
                background:url(../../assets/right.png) no-repeat;
                position:absolute;
                display:block;
                width:.14rem;
                height:.24rem;
                background-size:cover;
                right:.34rem;
                top:.08rem; 
            }
            span{
                display:block;
                margin-top:.2rem;
                font-size:.3rem;
            }

        }
        .Shopcar-time{
            background-image: linear-gradient(90deg,#0af,#0085ff);
            height:2.5rem;
            display:flex;
            justify-content: flex-start;
            flex-direction: column;
            padding-bottom:.1rem;
            .Shopcar-time-msg{
                width:7.26rem;
                background:#fff;
                padding: .32rem .4rem;
                box-sizing: border-box;
                margin:0 auto;
                display:flex;
                height:1.34rem;
                justify-content: space-between;
                .Shopcar-time-msg-left{
                    span{
                        display:block;
                        font-size:.3rem;
                    }
                    b{
                        display:block;
                        width:1.23rem;
                        height:.27rem;
                        background:rgb(7, 152, 189);
                        color:#fff;
                        margin-top:.08rem;
                        text-align:center;
                    }
                }
                .Shopcar-time-msg-right{
                    font-size:.26rem;
                    color:rgb(7, 152, 189);
                    margin-top:.2rem;
                    position:relative;
                }
                .Shopcar-time-msg-right::after{
                    content: "";
                    background:url(../../assets/right.png) no-repeat 50%;
                    position:absolute;
                    display:block;
                    width:.24rem;
                    height:.24rem;
                    background-size:.12rem;
                    right:-.3rem;
                    top:.06rem;
                }

            }
            p{
                width:7.26rem;
                background:#fff;
                padding:.32rem .4rem;
                box-sizing: border-box;
                margin:-.03rem auto 0;
                display:flex;
                justify-content: space-between;
                line-height:.3rem;
                font-size:.28rem;
                b{
                    color:rgb(70, 68, 68);    
                }
                span{
                    color:#0085ff;
                }
            }
        }
        .Shopcar-shopping-msg{
            width:7.26rem;
            margin:-.2rem auto 0;
            box-sizing: border-box;
            padding:0 .4rem;
            position:relative;
            z-index:2; 
            background:#fff;
            h3{
                height:.39rem;
                padding:.32rem 0 ;
                border-bottom:.01rem solid #ccc;
                span{
                    font-size:.34rem;
                    font-weight:900;
                    float:left;
                }
                &>b{
                    line-height:.34rem;
                    font-size:.24rem;
                    display:block;
                    float:left;
                    margin: .05rem 0 0 .05rem;
                }
            }
            ul{
                li{
                    display:flex;
                    justify-content: space-between;
                    line-height: .72rem;
                    padding:.24rem 0;
                    p{  
                        display:flex;
                        justify-content: flex-start;
                        position:relative;
                        img{
                            display:block;
                            width:.72rem;
                            height:.72rem;
                        }
                       &>span{
                           margin-left:.2rem;
                           font-size:.28rem;
                           line-height:.5rem;
                           width:2.5rem;
                           white-space: nowrap;
                           overflow: hidden;
                           text-overflow: ellipsis;
                           height:100%;
                       }
                       b{
                           position:absolute;
                           font-size:.24rem;
                           top:.38rem;
                           left:1rem;
                       }
                    }
                     i{
                        font-size:.24rem;
                    }
                    s{
                        font-size:.38rem;
                        b{
                            font-size:.24rem;
                            margin-right:.03rem;
                        }

                    }
                }
            }
            &>p{
                height:.38rem;
                padding:.32rem 0 ;
                line-height:.38rem;
               &>span{
                    float:left;
                    width:.56rem;
                    height:.27rem;
                    line-height:.27rem;
                    background:#ccc;
                    color:#666;
                    text-align:center;
                    margin-top:.05rem;
                }
                &>b{
                    float:left;
                    margin-left:.2rem;
                    font-size:.28rem;
                }
                i{
                    float:right;
                    font-size:.24rem;
                    b{
                        font-size:.36rem;
                        margin-left:.05rem;
                    }
                }
            }
            &>span{
                display:block;
                height:.38rem;
                padding:.32rem 0 ;
                line-height:.38rem;
                &>span{
                    float:left;
                    width:.56rem;
                    height:.27rem;
                    color:#fff;
                    background:rgb(10, 177, 199);
                    text-align:center;
                    margin-top:.05rem;
                    line-height:.27rem;
                }
                &>b{
                    float:left;
                    margin-left:.2rem;
                    font-size:.28rem;
                }
                i{
                    float:right;
                    font-size:.32rem;
                    &>b{
                        font-size:.24rem;
                        margin-right:.05rem;
                    }
                }
            }
            &>b{
                display:flex;
                height:.36rem;
                padding:.32rem 0;
                line-height:.32rem;
                justify-content: space-between;
                i{
                    font-size:.28rem;
                }
                s{
                    display:block;
                    width:1.27rem;
                    height:.36rem;
                    color:#fff;
                    background:rgb(214, 61, 14);
                    text-align:center;
                    line-height:.36rem;
                    position: relative;
                    margin-right:.4rem;
                }
                s:after{
                    content: "";
                    position:absolute;
                    right:-.35rem;
                    top:.05rem;
                    background:url(../../assets/right.png)  50%  no-repeat ;
                    width:.24rem;
                    height:.24rem;
                    display:block;
                    background-size:.2rem;

                }
            }
            &>s{
                display:flex;
                justify-content: space-between;
                height: .52rem;
                padding: .3rem 0 .36rem 0 ;
                border-top:.01rem solid #ccc;
                line-height: .52rem;
                i{
                    font-size:.32rem;
                    color:#979696;
                }
                b{
                    font-size:.28rem;
                    u{
                        font-size:.38rem;
                        font-weight:900;
                    }
                }
            }
        }
        .Shopcar-phone{
            background:#fff;
            width:7.26rem;
            margin:.15rem auto 1rem;
            padding:0 .4rem ;
            box-sizing: border-box;
            height:4rem;
            p{
                padding:.32rem 0 ;
                height:.83rem;
                border-bottom:.01rem solid #ccc;
                &>b{
                    display:flex;
                    justify-content: space-between;
                    span{
                        font-size:.3rem;
                        margin-right:.4rem;
                    }
                    b:before{
                        content: "";
                        position:absolute;
                        right:-.35rem;
                        top:.04rem;
                        background:url(../../assets/right.png)  50%  no-repeat ;
                        width:.24rem;
                        height:.24rem;
                        display:block;
                        background-size:cover;
                    }
                    b{
                        font-size:.28rem;
                        color:#b6adad;
                        position: relative;
                        margin-right:.4rem; 
                        margin-top:.1rem;
                    }
                }
                &>span{
                    margin-top:.08rem;
                    color: #0bb473;
                    text-indent: .4rem;
                    background:url(../../../static/img/ssss.png) no-repeat;
                    background-size:.32rem; 
                    display:block;
                }
            }
            &>b{
                padding:.32rem 0;
                height:.33rem;
                display:block;
                line-height:.33rem;
                display:flex;
                justify-content: space-between;
                border-bottom:.01rem solid #ccc;
                &>i{
                    font-size:.3rem;
                    color:rgb(32, 31, 31);
                }
                u{
                    
                    font-size:.28rem;
                    color:#b6adad;
                    position: relative;
                    margin-right:.4rem; 
                }
                u:before{
                    content: "";
                    position:absolute;
                    right:-.35rem;
                    top:.04rem;
                    background:url(../../assets/right.png)  50%  no-repeat ;
                    width:.24rem;
                    height:.24rem;
                    display:block;
                    background-size:cover;
                }
                    
            }
            &>i{
                display:block;
                height:.65rem;
                padding:.32rem 0;
                s{
                    font-size:.32rem;
                    display:block;
                }
                u{
                    display:block;
                    margin-top:.15rem;
                    font-size:.26rem;
                }
            }
        }
        
        .Shopcar-bottom{
            height:.88rem;
            position:fixed;
            left:0;
            right:0;
            bottom:0;
            margin:auto;
            background:rgb(29, 28, 28);
            display:flex;
            justify-content: space-between;
            z-index:300;
            span{
                display:block;
                margin-left:.2rem;
                font-size:.4rem;
                line-height:.88rem;
                color:#fff;
                font-weight:900;
                letter-spacing: .02rem;
            }
            button{
                display:block;
                width:1.9rem;
                padding:0 .1rem;
                color:#fff;
                background:#0bb473;
                line-height:.88rem;
                border:none;
            }
        }
    }
</style>
