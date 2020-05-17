<template>
  <div class="caption pl-4 pr-4">
    <div class="left">
      <span class>{{author}}</span>
      ・
      <span>{{ createdAtText }}</span>
    </div>
    <div class="right">
      <div>라이크</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    createdAt: [String, Date],
    like: Boolean
  },
  computed: {
    createdAtText() {
      // if (typeof this.createdAt === "date") {
      return `${this.createdAt.getFullYear()}년 ${this.createdAt.getMonth() +
        1}월 ${this.createdAt.getDate()}일`;
      // } else {
      // return this.createdAt;
      // }
    }
  }
};
</script>

<style lang='scss' scoped>
.caption {
  display: flex;
  justify-content: space-between;
  .left {
  }

  .right {
  }
}
</style>
