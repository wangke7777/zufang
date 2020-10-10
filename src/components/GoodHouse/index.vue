<template>
  <div class="good-house">
    <h3 class="good-title">猜你喜欢</h3>
    <ul class="good-list">
      <li class="good-item" v-for="(item,index) in goodHouseList" :key="index">
        <HouseCard :houseInfo="item"></HouseCard>
      </li>
    </ul>
    <!--    <div class="pullup-tips">-->
    <!--      <div v-show="!isPullUpLoad" class="before-trigger">-->
    <!--        <span class="pullup-txt">上拉加载更多</span>-->
    <!--      </div>-->
    <!--      <div v-show="isPullUpLoad" class="after-trigger">-->
    <!--        <span class="pullup-txt">加载中</span>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import HomeModel from "@/models/Home";

const homeModel = new HomeModel();
import HouseCard from '@/components/HouseCard'
// import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'

// BScroll.use(Pullup)
export default {
  name: "GoodHouse",
  data() {
    return {
      page: 1,
      goodHouseList: [],
      isPullUpLoad: false
    }
  },
  components: {
    HouseCard
  },
  mounted() {
    this.getRecommendList();
    // this.init()
    window.addEventListener("touchmove", this.onScroll)
  },
  methods: {
    async getRecommendList() {
      const {data: res} = await homeModel.getRecommendData(this.page)
      if (res.code === 0) {
        this.goodHouseList.push(...res.result);
        this.page++;
        console.log(res.result)
      }
    },
    onScroll() {
      console.log("监听滚动")
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      console.log(scrollTop, "距离顶部");     // 动态变化
      console.log(clientHeight, "可视区域高度");  // 667
      console.log(scrollHeight, "页面总高度");  // 2180
      // console.log(Math.ceil(scrollTop + clientHeight))
      // console.log(Math.ceil(scrollTop + clientHeight) >= scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight * 0.9) {
        console.log("滚动条到底了");
        // this.page++;
        this.getRecommendList()
      }
    }
    // init() {
    //   this.bscroll = new BScroll(document.getElementsByClassName('wrapper')[0], {
    //     scrollY: true,//垂直方向滚动
    //     click: false,//默认会阻止浏览器的原生click事件，如果需要点击，这里要设为true
    //     pullUpLoad: true,//上拉加载更多
    //     pullDownRefresh: {
    //       threshold: 50,//触发pullingDown事件的位置
    //       stop: 0//下拉回弹后停留的位置
    //     }
    //   })
    //
    //   this.bscroll.on('pullingUp', this.pullingUpHandler)
    // },
    // async pullingUpHandler() {
    //   this.isPullUpLoad = true
    //   this.page++;
    //   this.bscroll.finishPullUp()
    //   this.bscroll.refresh()
    //   await this.getRecommendList()
    //   this.isPullUpLoad = false
    // }
  }
}
</script>

<style scoped lang="scss">
.good-house {
  width: 100%;
  background-color: #fff;
  
  .good-title {
    padding: 0 .15rem;
    height: .6rem;
    font-size: .17rem;
    font-weight: 700;
    line-height: .6rem;
  }
  
  .good-item {
    margin-top: .08rem;
  }
}
</style>