<template>
  <div id="app">
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
  
  
 <mian-tab-bar></mian-tab-bar>
  </div>
</template>

<script>
    import MianTabBar from "components/content/mianTabBar/MianTabBar"

    export default {
        name: 'app',
        components: {
            MianTabBar
        }
    }
</script>

<style>
    @import "assets/css/base.css";
</style>