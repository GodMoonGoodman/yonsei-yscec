<template>
  <div class="list">
    <div class="l">
      <slot></slot>
    </div>
    <div class="r">icon</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  .l {
  }
  .r {
    width: 64px;
  }
}
</style>
