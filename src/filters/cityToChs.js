import {CITY_LIST} from "@/configs/config";

export default {
  cityToChs(city) {
    for (let item of CITY_LIST) {
      if (city === item.address) {
        return item.city
      }
    }
  }
}