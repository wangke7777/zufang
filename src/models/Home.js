import HTTP from "@/utils/http";

export default class HomeModel extends HTTP {
  getHomeData() {
    return this.$httpGet(`/indexapi/index`)
  }
  
  getRecommendData(page) {
    return this.$httpGet(`/recomandapi/index`, {p: page})
  }
}