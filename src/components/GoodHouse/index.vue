<template>
  <div class="good-house">
    <h3 class="good-title">猜你喜欢</h3>
    <ul class="good-list">
      <li class="good-item" v-for="(item,index) in goodHouseList" :key="index">
        <HouseCard :houseInfo="item"></HouseCard>
      </li>
    </ul>
    <Loading v-show="showTips"></Loading>
  </div>
</template>

<script>
import HomeModel from "@/models/Home";

const homeModel = new HomeModel();
import HouseCard from '@/components/HouseCard'
import _ from 'lodash'
import Loading from "@/components/GoodHouse/Loading";

export default {
  name: "GoodHouse",
  data() {
    return {
      page: 1,
      goodHouseList: [],
      //提示上拉加载更多
      showTips: true,
    }
  },
  components: {
    HouseCard,
    Loading
  },
  mounted() {
    this.getRecommendList();
    // this.init()
    window.addEventListener("scroll", _.throttle(this.onScroll, 1000))
  },
  methods: {
    async getRecommendList() {
      const {data: res} = await homeModel.getRecommendData(this.page)
      if (res.code === 0) {
        this.goodHouseList.push(...res.result);
        //数据加载完成了
        this.showTips = false;
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
        //显示加载更多
        this.showTips = true;
        this.page++;
        this.getRecommendList()
      }
    }
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