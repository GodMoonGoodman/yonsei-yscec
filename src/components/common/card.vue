<template>
  <div class="d-flex justify-content-between align-items-center">
    <div>
      <h3 class="mb-1">
        {{ title }}
      </h3>
      <div>
        {{ subTitle }}
      </div>
    </div>
    <div class="right" v-if="img"><img :src="img" alt="" /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    height: 48px;
    width: 96px;
    object-fit: cover;
  }
}
</style>
