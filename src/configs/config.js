// const URL = {
//   BASE_URL: process.env.NODE_ENV === 'production'
//       ? '/'
//       : '/api'
// }
const CITY_LIST = [
  {
    address: "bj",
    city: "北京"
  },
  {
    address: "sh",
    city: "上海"
  },
  {
    address: "sz",
    city: "深圳"
  },
  {
    address: "hz",
    city: "杭州"
  },
  {
    address: "nj",
    city: "南京"
  },
  {
    address: "suzhou",
    city: "苏州"
  },
  {
    address: "gz",
    city: "广州"
  },
  {
    address: "cd",
    city: "成都"
  },
  {
    address: "dl",
    city: "大连"
  },
  {
    address: "tj",
    city: "天津"
  },
  {
    address: "cq",
    city: "重庆"
  },
  {
    address: "wh",
    city: "武汉"
  },
  {
    address: "xa",
    city: "西安"
  },
  {
    address: "zz",
    city: "郑州"
  },
]
const CURRENT_CITY = window.sessionStorage.getItem("city") || 'sh'
export {
  // URL,
  CURRENT_CITY,
  CITY_LIST
}