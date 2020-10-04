<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  name: "Scroll",
  data() {
    return {}
  },
  updated() {
    this.init()
  },
  methods: {
    init() {
      setTimeout(() => {
        console.log(document.getElementsByClassName('container')[0].clientHeight)
        let bs = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          click: true
        })
        bs.on('scroll', ({y}) => {
          console.log('scrolling-')
        })
        bs.on('scrollEnd', () => {
          console.log('scrollingEnd')
        })
      }, 1000)
    },
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
}
</style>