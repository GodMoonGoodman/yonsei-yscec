<template>
  <div>
    <h1>강의</h1>
    <div
      v-for="(study, index) in studies"
      :key="index"
      @click="$router.push({ name: 'class-id', params: { id: study.id } })"
    >
      {{ study.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studies: [],
    };
  },
  created() {
    this.studies = this.$db.study;
  },
};
</script>

<style lang="scss" scoped></style>
