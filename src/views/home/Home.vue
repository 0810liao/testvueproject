<template>
  <div id="home">
      <nav-bar class="home-nav"><div  slot="center">购物车</div></nav-bar>
      <tab-control class="tabcontrolTop" v-show="showTabControl" ref="tabcontrol1" :titles="['流行', '新款', '精选']"  @tabcontrolclick="tabcontrolclick"/>
      <scroll class="contains" :probe_Type="3" ref="scroll" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="pullingUp">
        <home-swiper :banners="banners" @swiperimgload.once="homeswiperimgload"></home-swiper>
         <home-recommend-view :recommends="recommends"></home-recommend-view>
         <div><img src="~assets/img/home/recommend_bg.jpg" width="100%"/></div>
         <tab-control v-show="!showTabControl" ref="tabcontrol2"   :titles="['流行', '新款', '精选']"  @tabcontrolclick="tabcontrolclick"/>

         <goods :currentItem="goods[currentType].list" />
      </scroll>
      <BackTop v-show="isShowBackTop" @click.native="clickbacktop" />
    
  </div>
  
</template>

<script>
    //公共组件
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import Goods from 'components/content/goods/Goods'
    import Scroll from 'components/common/scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'
    //子组件
    import HomeSwiper from 'views/home/childcomps/HomeSwiper'
    import HomeRecommendView from 'views/home/childcomps/HomeRecommendView'

    //常用方法
    import {
        debounce
    } from '@/common/util'
    //网络请求组件
    import {
        getHomeMultidata,
        getHomeGoods
    } from 'network/home.js'

    export default {
        name: "Home",
        components: {
            NavBar,
            TabControl,
            Goods,
            Scroll,
            BackTop,

            HomeSwiper,
            HomeRecommendView
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    pop: {
                        page: 1,
                        list: []
                    },
                    new: {
                        page: 1,
                        list: []
                    },
                    sell: {
                        page: 1,
                        list: []
                    }
                },
                currentType: 'pop',
                isShowBackTop: false,
                showTabControl: false,
                tabsetofftop: 0,
                scrollY: 0,

            }
        },

        created() {

            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
            this._getHomeGoods('pop');
            this._getHomeGoods('new');
            this._getHomeGoods('sell');


        },
        mounted() {
            const refreshscroll = debounce(this.$refs.scroll.refresh, 500)
            this.$bus.$on('imgLoad', () => {
                refreshscroll()
            })

        },
        methods: {
            homeswiperimgload() {

                this.tabsetofftop = this.$refs.tabcontrol2.$el.offsetTop

            },
            tabcontrolclick(index) {

                switch (index) {
                    case 0:
                        this.currentType = "pop";
                        break;
                    case 1:
                        this.currentType = "new";
                        break;
                    case 2:
                        this.currentType = "sell";
                        break;
                }
                this.$refs.tabcontrol1.currentIndex = index
                this.$refs.tabcontrol2.currentIndex = index
            },
            _getHomeGoods(type) {
                const page = this.goods[type].page;
                getHomeGoods(page, type).then(res => {
                    console.log(res)
                    const reslist = res.data.list;
                    this.goods[type].list.push(...reslist);
                    this.goods[type].page = page + 1;
                    this.$refs.scroll.finishPullUp();


                })
            },
            clickbacktop() {
                this.$refs.scroll.scrollToTop(0, 0, 400)
            },
            contentScroll(position) {

                this.isShowBackTop = (-position.y) > 1000
                this.showTabControl = this.tabsetofftop <= (-position.y)

            },

            pullingUp() {

                this._getHomeGoods(this.currentType)

            }

        },
        activated() {
            this.$refs.scroll.scrollToTop(0, this.scrollY, 0);
            this.$refs.scroll.refresh()
        },
        deactivated() {
            console.log(this.$refs.scroll)
            this.scrollY = this.$refs.scroll.scroll.y
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
    
    .contains {
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;
    }
    
    .tabcontrolTop {
        position: fixed;
        top: 44px;
        z-index: 9;
        left: 0;
        right: 0;
    }
</style>s