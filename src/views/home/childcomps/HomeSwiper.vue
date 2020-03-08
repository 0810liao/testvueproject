<template>
        <swiper>
            <swiper-item v-for="item,index in banners" :id="index">
                    <a :href="item.link">
                            <img :src="item.image" alt="" @load="swiperimgload">
                          </a>
            </swiper-item>
        </swiper>
</template>
<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'
    export default {
        name: 'HomeSwiper',
        props: {
            banners: {
                type: Array,
                default () {
                    return []
                }
            },

        },
        methods: {
            swiperimgload() {
                this.$emit('swiperimgload')
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>
<style scoped>

</style>