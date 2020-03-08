<template>
<div class="goods">
    <div v-for="item,index in currentItem" :key="index" class="goods-item" @click="intodetal(item)">
        <img :src="item.show.img" alt="" @load="imgLoad">
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'Goods',
        props: {
            currentItem: {
                type: Array,

            }
        },
        methods: {
            imgLoad() {
                this.$bus.$emit('imgLoad')
            },
            intodetal(item) {
                this.$router.push('./details/' + item.iid)
            }
        }
    }
</script>
<style scoped>
    .goods {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
    
    .goods-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    
    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }
    
    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }
    
    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    
    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }
    
    .goods-info .collect {
        position: relative;
    }
    
    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
</style>