<template>
  <div class="observer">
    <!--插槽是否显示-->
    <slot v-if="isLoading"></slot>
  </div>
</template>

<script>
export default {
  name: "observer",
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      observe: null
    }
  },
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersection')
      }
    }, options);
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
}
</script>

<style scoped lang="scss">
.observer {
  height: 30px;
}
</style>
