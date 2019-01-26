<template>
    <div class="Find">
        <div class="Find-recommend">
            <div class="Find-recommend-left">
                <a href="">
                    <p>
                        <span>金币商城</span>
                        <b>0元好物在这里</b>
                    </p>
                    <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
                </a>
            </div>
            <div class="Find-recommend-right">
                <div class="Find-recommend-right-top">
                    <a href="">
                        <p>
                            <span>推荐有奖</span>
                            <b>10元现金拿不停</b>
                        </p>
                        <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
                    </a>
                </div>
                <div class="Find-recommend-right-bottom">
                    <a href="">
                        <p>
                            <span>周边优惠</span>
                            <b>领取口碑好劵</b>
                        </p>
                        <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
                    </a>
                </div>
            </div>
        </div>
        <!-- 限时好礼 -->
        <div class="Find-deseno">
            <div class="Find-deseno-top">
                <h3>
                    <i class="fa fa-clock-o"></i>
                    <span>限时好礼</span>
                   
                </h3>
                 <p>金币换豪礼</p>
            </div>
            <ul>
                <li>
                   <a href="">
                        <b>限时优惠</b>
                        <img src="https://fuss10.elemecdn.com/d/e8/e9079650047f1cc00c16474a1e8bdjpeg.jpeg?imageMogr/format/webp/" alt="">
                        <p>3元饿了吗鲜果优惠券</p>
                        <span>
                            <b>90金币</b>
                            <s>¥3</s>
                        </span>
                   </a>
                </li>
            </ul>
            <a href="">查看更多</a>
        </div>
    </div>
</template>


<script>
export default {
    name : "Find"
}
</script>

<style lang="scss" scoped>
    .Find{
         background:rgb(245,245,245);
         height:100%;
        .Find-recommend{
            height:3.21rem;
            background:#fff;
            display:flex;
            justify-content: space-between;
            div{
                p{
                    margin-top:.2rem;
                    span{
                        display:block;
                        color: rgb(255, 153, 0);
                        font-size:.3rem;
                        font-weight:900;
                        margin-bottom:.1rem;
                    }
                    b{
                        display:block;
                        font-size:.2rem;
                        font-weight:900;
                        color:#b8b1b1;
                    }
                }
                
            }
            .Find-recommend-left{
                padding:.4rem .22rem .12rem .32rem;
                border-right:.01rem solid #ccc;
                width:3.75rem;
                box-sizing: border-box;
                position: relative;
                img{
                    width:1.5rem;
                    height:1.5rem;
                    display:block;
                    position:absolute;
                    right:.2rem;;
                    bottom:.1rem;
                }
                
            }
            .Find-recommend-right{
                flex:1;
                div{
                    padding:.35rem .3rem;
                    position: relative;
                    img{
                        width:.9rem;
                        height:.9rem;
                        display:block;
                        position:absolute;
                        top:.4rem;
                        right:.3rem;
                    }
                }
                .Find-recommend-right-top{
                    span{    
                        color: rgb(27, 169, 225);
                    }
                }
                .Find-recommend-right-bottom{
                    span{        
                        color: rgb(237, 102, 96);
                    }
                }
            }
        }
        .Find-deseno{
            margin-top:.2rem;
            background:#fff;
            .Find-deseno-top{
                height:.82rem;
                h3{
                    width:2rem;
                    position:relative;
                    margin:.2rem auto 0 ;
                    display: flex;
                    justify-content:content;
                    i{
                       color: rgb(255, 153, 0); 
                       line-height:.82rem;
                       margin-right:.2rem;
                       font-size:.3rem;
                      
                    }
                    span{
                        letter-spacing:.05rem;
                        font-size:.3rem;
                        font-weight:900;
                        color:#000;
                        line-height:.82rem;
                    }
                }
                h3:after{
                    content: "";
                    width:.3rem;
                    height:.02rem;
                    background:#000;
                    position: absolute;
                    top:.4rem;
                    left:-.4rem;
                }
                  h3:before{
                    content: "";
                    width:.3rem;
                    height:.02rem;
                    background:#000;
                    position: absolute;
                    top:.4rem;
                    right:-.3rem;
                }
                p{
                    text-align:center;
                    margin-top:-.2rem;
                }
            }
            ul{
                padding:.2rem .3rem;
                display:flex;
                justify-content: space-between;
                li{
                    width:2.22rem;
                    height:3.33rem;
                    margin-right:.12rem;
                    a{
                        display:block;
                        position: relative;
                        &>b{
                            width:.97rem;
                            height:.36rem;
                            background:rgba(0,0,0,.5);
                            color:#fff;
                            font-size:.2rem;
                            line-height:.36rem;
                            text-align:center;
                            position:absolute;
                            left:0;
                            top:0;
                        }
                        img{
                            display:block;
                            width:2.22rem;
                            height:2.2rem;
                            margin-bottom:.1rem;
                        }
                        p{
                            width:2.22rem;
                            white-space:nowrap;
                            overflow:hidden;
                            text-overflow:ellipsis;
                            line-height:.31rem;
                            font-size:.2rem;
                            margin-bottom:.1rem;
                            color:#333;
                        }
                        span{
                            display:block;
                            font-size:.24rem;
                            b{
                                color: #ff5339;
                                margin-right:.08rem;
                            }
                            s{
                                text-decoration:line-through;
                                margin-left:-.1rem;
                                font-size:.2rem;
                            }
                        }
                    }
                }
            }
            &>a{
                display:block;
                height:.67rem;
                line-height:.67rem;
                text-align:Center;
                font-size:.28rem;           }
        }
    }
</style>

