<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>{{ title }}</h2>
      <button class="font-color-dark-200">더보기</button>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background-color: white;
  font-size: 14px;
}
</style>
