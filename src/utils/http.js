import axios from 'axios';
//引入baseUrl
import {URL} from '@/configs/config'
//封装
export default class HTTP {
  $httpGet(url, params = {}) {
    return axios({
      url: URL.BASE_URL + '/bj' + url,
      method: 'get',
      params: params
    })
  }
}
