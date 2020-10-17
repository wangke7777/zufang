import axios from 'axios';
//引入baseUrl
import {CURRENT_CITY} from '@/configs/config'
//封装
export default class HTTP {
  $httpGet(url, params = {}) {
    return axios({
      url: CURRENT_CITY + url,
      method: 'get',
      params: params
    })
  }
}
