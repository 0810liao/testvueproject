<template>
  <div id="home">
      <nav-bar class="home-nav"><div  slot="center">购物车</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
  
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from 'views/home/childcomps/HomeSwiper'
    import HomeRecommendView from 'views/home/childcomps/HomeRecommendView'
    import {
        getHomeMultidata
    } from 'network/home.js'
    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            HomeRecommendView
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>s