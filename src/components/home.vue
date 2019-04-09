<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lubotuList" :key="index"><img :src="item.img" alt=""></mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!--九宫格 到 六宫格的改造-->
    <ul class="">
      <li class=""><a href="#">
        <span class="iconfont icon-shouye"></span>
        <div class="mui-media-body">Home</div></a></li>
      <li class=""><a href="#">
        <span class="icon-E-mail"><span class="mui-badge">5</span></span>
        <div class="iconfont mui-media-body">Email</div></a></li>
      <li class=""><a href="#">
        <span class="iconfont icon-chat"></span>
        <div class="mui-media-body">Chat</div></a></li>
      <li class=""><a href="#">
        <span class="iconfont icon-ionc--"></span>
        <div class="mui-media-body">location</div></a></li>
      <li class=""><a href="#">
        <span class="iconfont icon-search"></span>
        <div class="mui-media-body">Search</div></a></li>
      <li class=""><a href="#">
        <span class="iconfont icon-phoneon"></span>
        <div class="mui-media-body">Phone</div></a></li>
    </ul>
  </div>
</template>

<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        name: "home",
        component:{
            Swipe,
            SwipeItem
        },
        created(){
          // this.getSwiper();
        },
        data(){
            return{
                lubotuList:[]
            }
        },
        methods:{
           /* getSwiper(){//获取轮播图数据
                this.$http.get("json/imgs.json").then((result)=>{
                    if (result.body.status===0){
                        this.lubotuList = result.body.message;
                    } else {
                        Toast("获取失败")
                    }
                })

            }*/
        }
    }
</script>

<style scoped lang="less">
  ul{
    list-style: none;
    li{
      display: inline-block;
      width: 100px;
      height: 100px;
      border: 1px solid aquamarine;
      text-align: center;
      span{
        font-size: 30px;
      }
    }
  }
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      &:nth-child(1){
        background: chartreuse;
      }&:nth-child(2){
        background: blanchedalmond;
      }&:nth-child(3){
        background: orangered;
      }
    }
  }
</style>