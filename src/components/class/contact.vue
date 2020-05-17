<template>
  <div class="contact d-flex justify-content-between align-items-center">
    <div class="l d-flex align-items-center">
      <div class="thumbnail mr-2" :style="thumbStyle"></div>
      <div class="info">
        <div class>{{ name }}</div>
        <div class="font-color-light-200 f5">{{ mail }}</div>
      </div>
    </div>
    <div class="r">
      <button>메일쓰기</button>
    </div>
  </div>
</template>

<script>
import default_thumbnail from "@/assets/default_thumbnail.png";
export default {
  props: {
    thumbnailUrl: {
      type: String,
      default: default_thumbnail,
    },
    name: String,
    mail: String,
  },
  computed: {
    thumbStyle() {
      return {
        backgroundImage: `url('${this.thumbnailUrl}')`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$size: 48px;
.thumbnail {
  width: $size;
  height: $size;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

button {
  border: none;
  border-radius: 4px;
  background-color: #343434;
  color: white;
  min-width: 80px;
  height: 28px;
}
</style>
