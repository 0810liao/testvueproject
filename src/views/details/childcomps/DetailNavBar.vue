<template>
    <div class="detals">
       
       <nav-bar class="detanavbar">
           <div slot="left" class="navbarleft">
               <img src="~assets/img/common/back.svg" />
           </div>
           <div slot="center" class="detailitems">
              
                <div v-for="item,index in navbardata" @click="changeitem(index)" class="detai-litem" :class="index==currentIndex ? 'active':''">{{item}}</div>
            </div>
       </nav-bar>
    </div>

</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "DetailNavBar",
        data() {
            return {
                currentIndex: 0
            }
        },
        props: {
            navbardata: {
                type: Array

            }
        },
        components: {
            NavBar
        },
        methods: {
            changeitem(index) {
                this.currentIndex = index
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .detals {
        background: #fff;
        text-align: center;
    }
    
    .detailitems {
        display: flex;
    }
    
    .active {
        color: var(--color-high-text);
    }
    
    .navbarleft {
        margin-top: 5px;
    }
    
    .detai-litem {
        flex: 1;
    }
</style>