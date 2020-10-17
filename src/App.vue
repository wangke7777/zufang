<template>
  <div id="app">
    <router-view/>
    <DownApp></DownApp>
  </div>
</template>
<script>
import DownApp from '@/components/DownApp'

export default {
  components: {
    DownApp
  }
}
</script>
<style scoped>
#app {
  height: 100%;
}
</style>