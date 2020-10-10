import HTTP from "@/utils/http";

export default class HomeModel extends HTTP {
  getHomeData() {
    return this.$httpGet(`/api/indexapi/index`)
  }
  
  getRecommendData(page) {
    return this.$httpGet(`/api/recomandapi/index`, {p: page})
  }
}