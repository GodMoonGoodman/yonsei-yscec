<template>
  <button class="tab d-flex justify-content-center align-item-center" :class="computedClass">
    <div class="tab-icon">icon</div>
    <div class="tab-label">{{ label }}</div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    label: String,
    routeName: String
  },
  computed: {
    computedClass() {
      return {
        active: this.$route.name === this.routeName
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  border: none;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.active {
    font-weight: bold;
  }
  &-icon,
  &-label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
