<template>
  <div class="header p-4">
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
  },
};
</script>

<style lang="scss" scoped>
.header {
  button.back {
    background-image: url("../../assets/back.svg");
    background-color: #343434;
    border: none;
    background-size: 24px;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
  }
  background-color: #343434;
  color: white;
}
</style>
