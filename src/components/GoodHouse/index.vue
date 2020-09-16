<template>
  <div class="good-house">
    <h3 class="good-title">猜你喜欢</h3>
    <ul class="good-list">
      <li class="good-item" v-for="(item,index) in goodHouseList" :key="index">
        <HouseCard :houseInfo="item"></HouseCard>
      </li>
    </ul>
  </div>
</template>

<script>
import HomeModel from "@/models/Home";

const homeModel = new HomeModel();
import HouseCard from '@/components/HouseCard'

export default {
  name: "GoodHouse",
  data() {
    return {
      page: 1,
      goodHouseList: []
    }
  },
  components: {
    HouseCard
  },
  created() {
    this.getRecommendList()
  },
  methods: {
    async getRecommendList() {
      const {data: res} = await homeModel.getRecommendData(this.page)
      if (res.code === 0) {
        this.goodHouseList = res.result;
        // console.log(res.result)
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