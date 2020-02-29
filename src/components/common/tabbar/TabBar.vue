<template>
    <div class="Tabbar">
           <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    .Tabbar {
        height: 49px;
        background: #f6f6f6;
        display: flex;
        text-align: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 14px;
    }
</style>