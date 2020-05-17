<template>
  <div class="header pt-2 pb-2 pl-4 pr-4">
    <router-link to="/">
      <div class="brand_icon">
        <div class="logo"></div>
      </div>
    </router-link>

    <div>
      <img :src="me.photo" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      me: this.$db.me
    };
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  $size: 40px;
  .brand_icon {
    display: flex;
    align-items: center;
    .logo {
      width: 113px;
      height: 25px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("../../assets/images/de.png");
    }
    .yscec {
      position: relative;
      top: 2px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  img {
    width: $size;
    height: $size;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
