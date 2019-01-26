<template>
    <div class="Mine">
        <div class="Mine-top">
          <a href="">
                <img src="../../assets/ddd.png" alt="">
                <p>
                    <span>登录/注册</span>
                    <b><i class="fa fa-mobile"></i>登录后享取更多特权</b>
                </p>
          </a>
        </div>
        <div class="Mine-gold">
           <a href="">
                <p>
                    <i class="fa fa-building"></i>
                    <span>红包</span>
                </p>
                <p>
                    <i class="fa fa-calendar"></i>
                    <span>金币</span>
                </p>
           </a>
        </div>
        <div class="Mine-bottom">
            <p>
              <a href="">
                    <i class="fa fa-send "></i>
                    <span>我的地址</span>
              </a>
            </p>
             <p>
              <a href="">
                    <i class="fa fa-shopping-bag"></i>
                    <span>金币商城</span>
              </a>
            </p>
             <p>
               <a href="">
                    <i class="fa fa-gift"></i>
                    <span>分享拿10元现金</span>
               </a>
            </p>
             <p>
               <a href="">
                    <i class="fa fa-refresh"></i>
                    <span>我的客服</span>
               </a>
            </p>
             <p>
                <a href="">
                    <i class="fa fa-upload"></i>
                    <span>下载饿了吗APP</span>
                </a>
            </p>
             <p>
                <a href="">
                    <i class="fa fa-envelope-open-o"></i>
                    <span>规则中心</span>
                </a>
            </p>
            <a href="">隐私政策</a>
        </div>
    </div>
</template>


<script>
export default {
    name : "Mine"
}
</script>


<style lang="scss" scoped>
    .Mine{
        background:#ccc;
        height:100%;
        .Mine-top{
            height:2.2rem;
            background:#0af;
            padding:.5rem .3rem;
            box-sizing:border-box;
            position:relative;          
            a{
                display:block;
                width:100%;
                img{
                    width:1.2rem;
                    height:1.2rem;
                    display:block;
                    float: left;
                    border-radius: 50%;
                    margin-right:.4rem;
                }
                p{
                    float:left;
                    color:#fff;
                    span{
                        display:block;
                        font-size:.4rem;
                        line-height:.8rem;
                        font-weight:900;
                    }
                    b{
                        display:block;
                        font-size:.28rem;
                    }
                }
            }
        }
        .Mine-top:after{
            content: "";
            display: inline-block;
            width: .2rem;
            height: .42rem;
            position: absolute;
            right: .6rem;
            top: 50%;
            transform: translateY(-50%);
            background: url(../../assets/right.png) no-repeat 50%;
            background-size: contain;
        }
        .Mine-gold{
            height:1.66rem;
            background:#fff;
            a{
                display:flex;
                justify-content: space-between;
                p{
                    width:50%;
                    text-align:center;
                    i{
                        display:block;
                        background:rgb(243, 37, 37);
                        color:#fff;
                        width:.51rem;
                        height:.51rem;
                        text-align:center;
                        line-height: .51rem;
                        margin: .3rem auto 0;
                    }
                    span{
                        display:block;
                        font-size:.2rem;
                        margin-top:.1rem;
                    }
                }
                p:nth-of-type(2){
                    border-left:.01rem solid #ccc;
                    i{
                        background:rgb(26, 224, 125);
                        color:#fff;
                    }
                }
            }
        }
        .Mine-bottom{
            p{
                height:.88rem;
                background:#fff;
                padding-left:.5rem;
                border-bottom:.01rem solid rgb(231, 227, 227);
                line-height:.88rem;
                position: relative;
                a{
                    display:block;
                    i{
                        margin-right:.1rem;
                        font-size:.36rem;
                    }
                    span{
                        font-size:.36rem;
                        color:#333;
                    }
                }
            }
            p:before{
                 content: "";
                display: inline-block;
                width: .2rem;
                height: .33rem;
                position: absolute;
                right: .2rem;
                top: 50%;
                transform: translateY(-50%);
                background: url(../../assets/right.png) no-repeat 50%;
                background-size: contain;
            }
            p:nth-child(1){
                margin-top:.2rem;
                border:none;
                i{
                    color:rgb(10, 194, 240);
                }
            }
            p:nth-child(2){
                margin-top:.2rem;
                i{
                    color:rgb(75, 240, 10);
                }
            }
             p:nth-child(3){
                border:none;
                i{
                    color:rgb(199, 37, 15);
                }
            }
             p:nth-child(4), p:nth-child(5), p:nth-child(6),p:nth-of-type(7){
                i{
                    color:rgb(10, 194, 240);
                }
            }
            p:nth-of-type(4){
                margin-top:.2rem;
            }
            &>a{
                display:block;
                color:rgb(17, 195, 240);
                text-align:center;
                margin:.46rem 0 ;
                font-size:.28rem;
            }
        }
    }
</style>


