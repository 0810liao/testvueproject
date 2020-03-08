<template>
<div class="swaper" ref="wrapper">
    <div class="contains">
        <slot></slot>
    </div>
</div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
            probe_Type: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                    click: true,
                    probeType: this.probe_Type,
                    pullUpLoad: this.pullUpLoad
                })
                // 2.监听滚动的位置
            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })

        },
        methods: {
            scrollToTop(x, y, time = 300) {
                this.scroll.scrollTo(x, y, time)

            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh() {
                console.log("delay")
                this.scroll && this.scroll.refresh && this.scroll.refresh()
            }
        }
    }
</script>
<style scoped>

</style>