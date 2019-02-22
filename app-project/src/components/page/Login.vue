<template>
    <div class="Login">
        <img src="../../assets/logo.png" alt="">
        <div class="Login-input">
            <p>
                <input type="text" placeholder="手机号" v-model="usermsg">
                <span>获取验证码</span>
            </p>
            <p>
                <input type="text" placeholder="验证码">
            </p>
            <p>新用户登录即自动注册,并表示已同意<a href="">《用户服务协议》</a></p>
            <button
                @click="Login"
            >登录</button>
            <a href="javascript:;">关于我们 </a>
        </div>
    </div>
</template>

<script>
// import {mapActions} from "vuex"
import {ADD_USER} from "../../store/type.js"
export default {
    name : "Login",
    data(){
        return {
            usermsg : ""
        }
    },
    methods : {
        Login(){
            this.$store.dispatch(ADD_USER,this.usermsg);
            this.$router.push("/mine");
        }
    }
}
</script>

<style lang="scss" scoped>
    .Login{
        padding-top:.8rem;
        &>img{
            width:2.8rem;
            height:1.2rem;
            display:block;
            margin:0 auto .2rem;
        }
       .Login-input{
           width:6rem;
           height:4.8rem;
           margin:.2rem auto 0;
           font-size:#ccc;
           p:nth-child(1){
               display:flex;
               justify-content: space-between;
               border:.01rem solid #ccc;
               height:.8rem;
               input{
                   flex:1;
                   line-height:.8rem;
                   font-size:.28rem;
                   border:none;   
                   padding:0 .2rem;
                   box-sizing:border-box;
               }
             
               span{
                   width:1.4rem;
                   font-size:.1rem;
                   text-align:center;
                   line-height:.8rem;
                   height:.8rem;
                   
               }
           }
           p:nth-child(2){
                border:.01rem solid #ccc;
                 margin-top:.4rem;
                height:.8rem;
               input{
                   height:.8rem;
                   border:none;
                   width:100%;
                   line-height:.8rem;
                   font-size:.28rem;
                   padding:0 .2rem;
                   box-sizing:border-box;
               }
           }
           p:nth-child(3){
               height:.8rem;
               line-height:.4rem;
               margin:.4rem 0;
               font-size:.28rem;
               color:#666; 
               a{
                   color: #2395ff;
               }
           }
           button{
               width:100%;
               height:.8rem;
               margin-top:.1rem;
               color:#fff;
               text-align:center;
               font-size:.32rem;
                background: #4cd96f;
                border:none;    
           }
           &>a{
               display:block;
               margin-top:.6rem;
               font-size:.28rem;
               text-align:center;
           }
       }
      
    }
</style>
