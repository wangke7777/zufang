<template>
  <div class="house-card">
    <!--左侧图片区-->
    <div class="base-info" :style="{backgroundImage: 'url(' + houseInfo.house_main_image + ')'}">
      <div class="house-logo" v-if="">
        <img class="logo-img" :src="houseInfo.brand_tag_img_url" alt="">
      </div>
      <div class="live-photo" v-if="houseInfo.house_photo_num>0">
        {{ houseInfo.house_img_source }}·{{ houseInfo.house_photo_num }}
      </div>
    </div>
    <!--右侧详情区-->
    <div class="detail">
      <p class="title ellipsis">{{ houseInfo.house_title }}</p>
      <!--房屋描述-->
      <p :class="['room-info',houseInfo.activity_type === 1 ? 'red':'']">{{ houseInfo.house_desc }}</p>
      <!--交通-->
      <div class="traffic">
        <i class="iconfont icon-dingwei"></i>
        <span>{{ houseInfo.house_address_desc }}</span>
      </div>
      <!--房屋标签-->
      <div class="labels">
        <span class="label" v-for="(item,index) in houseInfo.house_tags" :key="index">{{ item }}</span>
      </div>
      <!--价格-->
      <p class="price">{{ houseInfo.month_rent }}元</p>
      <ul class="activity-info" v-if="isActivityInfo">
        <li v-for="(item,index) in houseInfo.house_activities" :key="index">
          <img class="img" :src="item.tag_img_url" alt="">
          <span>{{ item.desc }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "HouseCard",
  props: {
    houseInfo: Object
  },
  computed: {
    isActivityInfo() {
      return this.houseInfo.house_activities.length !== 0
    }
  }
}

</script>

<style scoped lang="scss">
.house-card {
  margin: 0 .15rem;
  display: flex;
}

.base-info {
  position: relative;
  width: 1.05rem;
  height: 1.05rem;
  margin-right: .15rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: .05rem;
}

.house-logo {
  position: absolute;
  top: .02rem;
  left: .04rem;
  
  .logo-img {
    width: .36rem;
    margin-top: .05rem;
    margin-left: .05rem;
  }
}

.live-photo {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .17rem;
  line-height: .17rem;
  font-size: .1rem;
  text-align: center;
  color: #fff;
  background-color: rgba(28, 28, 28, .4);
  border-bottom-left-radius: .04rem;
  border-bottom-right-radius: .04rem;
}

.detail {
  width: 2.1rem;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: .16rem;
  font-weight: 700;
}

.room-info {
  margin-top: .08rem;
  font-size: .12rem;
}

.red {
  color: red;
}

.traffic {
  margin-top: .08rem;
  font-size: .12rem;
  color: #666666;
  
  .iconfont {
    font-size: .12rem;
  }
}

.labels {
  display: flex;
  margin-top: .08rem;
  
  .label {
    margin-right: .05rem;
    padding: 0 .02rem;
    font-size: .12rem;
    color: #7f8c9c;
    background-color: #f2f2f2;
    border-radius: .01rem;
    white-space: nowrap;
  }
}

.price {
  margin-top: .08rem;
  font-size: .16rem;
  color: #ea3943;
}

.activity-info {
  vertical-align: middle;
  margin-top: .08rem;
  font-size: .12rem;
  line-height: .12rem;
  
  .img {
    width: .16rem;
    vertical-align: middle;
    margin-right: .05rem;
  }
}
</style>