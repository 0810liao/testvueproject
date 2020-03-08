<template>
  <detail-nav-bar :navbardata="['商品','参数','评论','推荐']"></detail-nav-bar>
</template>

<script>
    import DetailNavBar from 'views/details/childcomps/DetailNavBar'
    export default {
        name: "Details",
        data() {
            return {
                iid: 0
            }
        },
        components: {
            DetailNavBar
        },
        created() {

        }
    }
</script>

<style scoped>

</style>