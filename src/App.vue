<template>
  <div id="app" class="app-container">
    <Header fixed title="我的商城"></Header>
    <div>
      123
    </div>
    <tab></tab>
  </div>
</template>

<script>
//按需导入mint-ui组建
import { Header } from 'mint-ui';
import  Tab from "./components/tab"

export default {

  name: 'app',
  components: {
      Header,
      Tab
  }
}
</script>

<style>
.app-container{
  padding-top: 40px;
}
</style>
