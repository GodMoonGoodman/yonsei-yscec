<template>
  <div class="header p-4" :style="bgStyle">
    <div>
      <button class="back" @click="$router.go(-1)"></button>
    </div>
    <h1 class="mt-9">
      {{ title }}
    </h1>
    <div class="mt-3">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="mr-1 font-color-light-200"
        >#{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tags: {
      type: Array,
    },
    bgImg: String,
  },
  computed: {
    bgStyle() {
      if (!this.bgImg) return {};
      return {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url('${this.bgImg}')`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  button.back {
    background-image: url("../../assets/back.svg");

    background-color: transparent;
    border: none;
    background-size: 24px;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
  }
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #343434;
  color: white;
}
</style>
