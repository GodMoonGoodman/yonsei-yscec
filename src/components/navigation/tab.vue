<template>
  <button
    class="tab d-flex justify-content-center align-item-center"
    :class="computedClass"
  >
    <div class="tab-label">{{ label }}</div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    label: String,
    routeName: String,
  },
  computed: {
    computedClass() {
      return {
        active: this.$route.name === this.routeName,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  border: none;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  outline: none;
  background-color: #363a3c;
  color: rgba(255, 255, 255, 0.4);
  &.active {
    font-weight: bold;
    color: #fff;
  }
  &-label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }
}
</style>
