<template>
    <div class="tab">
        <router-link to="/home">首页</router-link>
        <router-link to="/list">消息</router-link>
        <router-link to="/add">通讯录</router-link>
        <router-link to="/my">个人中心</router-link>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="less">
    .tab{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
       a{
           flex: 4;
           text-decoration: none;
           background: orange;
           color: black;
       }
    }
</style>