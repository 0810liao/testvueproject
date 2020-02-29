<template>
        <div class="TabBarItem" @click="itemClick">
                <div class="item-icon" v-if="!isactive"><slot  name="item-icon"></slot></div> 
                <div class="item-activeicon" v-else><slot  name="item-activeicon"></slot></div> 
                <div class="item-text" :style="activestyle"><slot  name="item-text"></slot></div> 
            </div>
    </template>

<script>
    export default {
        name: "TabBarItem",

        props: {
            link: {
                type: String,
                required: true
            },
            activecolor: {
                type: String,
                default: 'red'
            }
        },
        computed: {
            isactive() {
                return this.$route.path.indexOf(this.link) !== -1
            },
            activestyle() {
                return this.isactive ? {
                    'color': this.activecolor
                } : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.link)
            }
        }
    }
</script>

<style scoped>
    .TabBarItem {
        flex: 1;
    }
    
    .item-icon img,
    .item-activeicon img {
        width: 24px;
        height: 24px;
        margin-top: 5px;
        vertical-align: middle;
    }
    
    .item-text {
        font-size: 12px;
        margin-top: 3px;
        color: #333;
    }
</style>