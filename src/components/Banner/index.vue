<template>
  <div class="banner">
    <TopSelect></TopSelect>
    <span class="user iconfont icon-yonghu"></span>
    <div class="searchBox">
      <span class="iconfont icon-sousuo"></span>
      <span>输入区域，小区搜索房源</span>
    </div>
    <img :src="bannerUrl" alt="">
  </div>
</template>

<script>
import TopSelect from '@/components/TopSelect'

export default {
  name: "Banner",
  props: {
    bannerUrl: String,
    require: true
  },
  components: {
    TopSelect,
  }
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  width: 100%;
  height: 2.57rem;
  
  .user {
    position: absolute;
    top: .2rem;
    right: .1rem;
    color: #fff;
    font-size: .2rem;
    font-weight: bold;
  }
  
  .searchBox {
    position: absolute;
    top: 1.8rem;
    left: 9%;
    width: 82%;
    height: .41rem;
    background-color: #fff;
    border-radius: 2px;
    line-height: .41rem;
    text-align: center;
    color: #999;
    cursor: pointer;
    
    .iconfont {
      margin-right: .05rem;
    }
  }
  
  img {
    width: 100%;
  }
}
</style>