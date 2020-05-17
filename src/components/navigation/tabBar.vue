<template>
  <nav class="tabbar">
    <slot></slot>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-around;
  height: 48px;
  align-items: center;

  border-top: 1px solid #707070;
}
</style>
