<template>
  <div class="selectCity">
    <span class="city">北京</span>
    <span>
      <i class="iconfont icon-triangle-bottom"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TopSelect"
}
</script>

<style scoped lang="scss">
.selectCity {
  position: absolute;
  top: .2rem;
  left: .1rem;
  color: #fff;
  
  .city {
    margin-right: .05rem;
  }
}
</style>