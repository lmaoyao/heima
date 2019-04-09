<template>
  <div id="app" class="app-container">
    <Header fixed title="老毛家的二小子"></Header>
    <transition>
      <router-view></router-view>
    </transition>
    <Tabbar></Tabbar>
  </div>
</template>

<script>

import { Header } from 'mint-ui';
import Tabbar from "./components/tab.vue"

export default {

  name: 'app',
  components: {
      Header,
      Tabbar,

  }
}
</script>

<style>
.app-container{
  padding-top: 40px;
  overflow-x: hidden;

}
  .v-enter{
  opacity: 0;
transform: translateX(100%);
}
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>
