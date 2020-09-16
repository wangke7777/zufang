<template>
  <div class="downloadApp" v-if="showDownLoad">
    <span class="closeBtn" @touchstart="handleClosed">
      <img src="../../assets/images/colse-grey.png" alt="">
    </span>
    <span class="logo">
      <img src="../../assets/images/newlogo.png" alt="">
    </span>
    <div class="downLoad">
      <h3>租房就找巴乐兔</h3>
      <p>押1付1，0中介费，实拍房源</p>
    </div>
    <a href="https://m.baletu.com/app?from=homeh5" target="_blank">下载APP</a>
  </div>
</template>

<script>
export default {
  name: "DownAPP",
  data() {
    return {
      showDownLoad: true
    }
  },
  created() {
    if (window.sessionStorage.getItem('isShowDownLoadAPP') === '0') {
      this.showDownLoad = false;
    }
  },
  methods: {
    handleClosed() {
      this.showDownLoad = false;
      window.sessionStorage.setItem('isShowDownLoadAPP', '0')
    }
  }
}
</script>

<style scoped lang="scss">
.downloadApp {
  position: fixed;
  z-index: 998;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .62rem;
  padding: .1rem 0;
  display: flex;
  align-items: center;
  font-size: .12rem;
  background-color: #fff;
  border-top: 2px solid #f2f2f2;
  box-shadow: 0 0 12px #888;
  
  .closeBtn {
    width: .4rem;
    height: .4rem;
    padding: .1rem;
    
    img {
      width: .2rem;
      height: .2rem;
    }
  }
  
  .logo {
    width: .4rem;
    height: .4rem;
    border-right: 5px;
    margin-right: .1rem;
    
    img {
      width: 100%
    }
  }
  
  .downLoad {
    h3 {
      font-size: .14rem;
    }
  }
  
  a {
    width: .67rem;
    height: .24rem;
    margin-left: .5rem;
    text-align: center;
    line-height: .24rem;
    border-radius: 5px;
    color: #fff;
    background-color: red;
  }
}
</style>