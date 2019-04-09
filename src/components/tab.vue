<template>
    <div class="tab_box">
        <router-link to="/home">
            <div class="iconfont icon-shouye"></div>
            首页
        </router-link>
        <router-link to="/list">
            <div class="iconfont icon-liebiaoye"></div>
            列表页
        </router-link>
        <router-link to="/add">
            <div class="iconfont icon-add"></div>
            详情页
        </router-link>
        <router-link to="/my">
            <div class="iconfont icon-shoucang-copy"></div>
            个人中新
        </router-link>
    </div>
</template>
<script>
    export default {
        name: "tab",
        data:function () {
            return{
                selected:""
            }
        },
    }
</script>

<style scoped lang="less">
   @color:red;
    .tab_box{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        border: 1px solid yellowgreen;
        background: blanchedalmond;
        a{
            flex: 4;
            color: blue;
            font-size: 14px;
            margin-left: 10px;
            text-decoration: none;
            div{
                font-size: 30px;
            }
            &.current{
                color: chartreuse;
            }
        }
    }
</style>