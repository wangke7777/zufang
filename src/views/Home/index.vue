<template>
  <!--  <scroller>-->
  <div class="wrapper" ref="wrapper">
    <div class="container">
      <Banner :bannerUrl="homeData.banners_image_url"></Banner>
      <div class="quick-search">
        <ul>
          <li>
            <img src="../../assets/images/zhengtaoIcon.png"/>
            <h3>整租</h3>
          </li>
          <li>
            <img src="../../assets/images/danjianIcon.png"/>
            <h3>合租</h3>
          </li>
          <li>
            <img src="../../assets/images/gongyuIcon.png"/>
            <h3>品牌公寓</h3>
          </li>
          <li>
            <img src="../../assets/images/shiyouIcon.png"/>
            <h3>找室友</h3>
          </li>
        </ul>
      </div>
      <!--页面闪烁 因为没数据之前不渲染li 数据来了之后导致重排-->
      <div class="study">
        <ul>
          <li v-for="(item,index) in homeData.theme_list" :key="index">
            <div class="wrapper">
              <img :src="item.apt_img_url"/>
            </div>
          </li>
        </ul>
      </div>
      <GoodHouse></GoodHouse>
    </div>
  </div>
</template>

<script>
import HomeModel from "@/models/Home"
import Banner from '@/components/Banner'
import GoodHouse from '@/components/GoodHouse'
const homeModel = new HomeModel()
export default {
  name: "Home",
  components: {
    Banner,
    GoodHouse,
  },
  data() {
    return {
      homeData: {}
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const {data: res} = await homeModel.getHomeData('bj')
      if (res.code === 0) {
        console.log(res.result)
        this.homeData = res.result
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
}

.container {
  background-color: #f0f0f0;
  
  .quick-search {
    width: 100%;
    padding: .2rem 0;
    background-color: #fff;
    
    ul {
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      
      li {
        align-items: center;
        
        img {
          width: .45rem;
        }
        
        h3 {
          margin-top: .07rem;
          font-size: .14rem;
          font-weight: 700;
          color: #5a5c5d;
        }
      }
    }
  }
  
  .study {
    width: 100%;
    height: 2.5rem;
    background: #fff;
    margin-top: .15rem;
    padding-top: .15rem;
  
    ul {
      padding: .15rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      
      li {
        width: 47.5%;
        border-bottom: 1px solid #f0f0f0;
        margin-bottom: .16rem;
        
        .wrapper {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>