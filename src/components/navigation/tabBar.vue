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
  /* position: sticky; */
  /* top: 60px; */
  /* left: 0; */
  width: 100%;

  display: flex;
  justify-content: space-around;
  height: 51px;
  align-items: center;

  border-top: 1px solid #707070;
}
</style>
