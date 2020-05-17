<template>
  <div class="p-4 content">{{text }}</div>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style lang='scss' scoped>
.content {
  line-height: 1.7;
  letter-spacing: -0.2px;
  word-break: keep-all;
  overflow-wrap: break-word;
}
</style>
