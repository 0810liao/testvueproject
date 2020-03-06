<template>
  <div id="home">
      <nav-bar class="home-nav"><div  slot="center">购物车</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <div><img src="~assets/img/home/recommend_bg.jpg" width="100%"/></div>
      <tab-control  :titles="['流行', '新款', '精选']"  @tabcontrolclick="tabcontrolclick"/>
      <goods />
      <ul>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
      </ul>
  </div>
  
</template>

<script>
    //公共组件
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import Goods from 'components/content/goods/Goods'
    //子组件
    import HomeSwiper from 'views/home/childcomps/HomeSwiper'
    import HomeRecommendView from 'views/home/childcomps/HomeRecommendView'

    //网络请求组件
    import {
        getHomeMultidata
    } from 'network/home.js'

    export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            Goods,

            HomeSwiper,
            HomeRecommendView
        },
        data() {
            return {
                banners: [],
                recommends: [],
                currentIndex:0,
                goods:{
                    pop:{
                        page:1,
                        list:[]
                    },
                    new:{
                        page:1,
                        list:[]
                    },
                    sell:{
                        page:1,
                        list:[]
                    }
                }
            }
        },
        methods: {
            tabcontrolclick(index){
               console.log('aaa')
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            }),
            getHomeGoods().then(res=>{

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