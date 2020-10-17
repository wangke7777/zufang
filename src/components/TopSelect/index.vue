<template>
  <div class="selectCity">
    <span class="city" @click="changeCity">{{ currentCity | cityToChs }}</span>
    <span>
      <i class="iconfont" :class="[!isActive ? 'icon-triangle-bottom':'icon-sj-small-up']"></i>
    </span>
  </div>
</template>

<script>

import {CURRENT_CITY} from "@/configs/config";
import cityToChs from "@/filters/cityToChs";

export default {
  name: "TopSelect",
  data() {
    return {
      isActive: false,
      currentCity: CURRENT_CITY
    }
  },
  filters: cityToChs,
  methods: {
    changeCity() {
      this.isActive = true;
      this.$router.push('City')
    }
  }
}
</script>

<style scoped lang="scss">
.selectCity {
  position: absolute;
  top: .2rem;
  left: .1rem;
  color: #fff;
  
  .city {
    margin-right: .05rem;
  }
}
</style>