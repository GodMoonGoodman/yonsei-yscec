<template>
  <div class="noti pl-4 pr-4">
    <div class="box p-3">💡 {{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    type: {
      type: String,
      default: "info"
    }
  }
};
</script>

<style lang='scss' scoped>
.noti {
  .box {
    background-color: rgba(235, 236, 237, 0.3);
    color: black;
    border-radius: 4px;
  }
}
</style>
