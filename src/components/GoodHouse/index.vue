<template>
  <div class="good-house">
    <h3 class="good-title">猜你喜欢</h3>
    <ul class="good-list">
      <li class="good-item" v-for="(item,index) in goodHouseList" :key="index">
        <HouseCard :houseInfo="item"></HouseCard>
      </li>
    </ul>
    <Observe @intersection="getRecommendList" :isLoading="isLoading">
      <p style="text-align: center">加载中。。。</p>
    </Observe>
  </div>
</template>

<script>
import HomeModel from "@/models/Home";

const homeModel = new HomeModel();
import HouseCard from '@/components/HouseCard'
import Loading from "@/components/GoodHouse/Loading";
import Observe from '@/components/Observe'
export default {
  name: "GoodHouse",
  data() {
    return {
      page: 1,
      goodHouseList: [],
      //提示上拉加载更多
      isLoading: false
    }
  },
  components: {
    HouseCard,
    Loading,
    Observe
  },
  methods: {
    async getRecommendList() {
      this.isLoading = true
      const {data: res} = await homeModel.getRecommendData(this.page)
      if (res.code === 0) {
        this.goodHouseList.push(...res.result);
        this.page += 1
        //数据加载完成了
        // this.showTips = false;
        console.log(res.result)
        this.isLoading = false
      }
    },
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
