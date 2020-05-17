<template>
  <div class="d-flex align-items-center">
    <div class="l">
      <h4 class="mb-1">{{ title }}</h4>
      <div class="f5 ellipsis2 mb-1">{{ subTitle }}</div>
      <div class="f6 font-color-light-200">{{ caption }}</div>
    </div>
    <div v-if="showFavorite" class="r ml-3">
      <button class="star" :class="{ on: favorite }" @click="$emit('click-favorite')"></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    caption: String,
    showFavorite: Boolean,
    favorite: Boolean
  }
};
</script>

<style lang="scss" scoped>
.ellipsis2 {
  /* line-height: 14px; */
  /* height: 27px; */
  word-break: break-all;
}

.star {
  $size: 28px;
  background-image: url("../../assets/Symbol-1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: white;
  border: none;
  width: $size;
  min-width: $size;
  height: $size;
  &.on {
    background-image: url("../../assets/Symbol.png");
  }
}
</style>
