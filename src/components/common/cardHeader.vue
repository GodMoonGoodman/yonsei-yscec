<template>
  <div class="card-header pl-4 pr-4">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  height: 40px;
  font-size: 14px;
}
</style>
