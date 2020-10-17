<template>
  <!--可以做一个动画-->
  <div class="pullup-tips">
    <div v-if="!isLoading" class="before-trigger">
      <span class="pullup-txt">加载中...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    isLoading: Boolean
  }
}
</script>

<style scoped lang="scss">

</style>