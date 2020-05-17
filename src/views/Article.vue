<template>
  <div>
    <Title :title="article.title" />
    <Caption class="mt-4" :author="prof.name" :created-at="article.created_at" />
    <Contents class="mt-4" :text="article.content" />
  </div>
</template>

<script>
import Title from "@/components/article/title";
import Caption from "@/components/article/headerCaption";
import Contents from "@/components/article/contents";

export default {
  props: {
    id: [String, Number]
  },
  components: {
    Title,
    Caption,
    Contents
  },
  data() {
    return {
      article: null,
      study: null,
      prof: null
    };
  },
  created() {
    const article = this.$db.notice.find(
      notice => +notice.id === +this.$props.id
    );
    const studyInfo = this.$db.study.find(
      study => study.title === article.class_name
    );

    const prof = studyInfo.teachers.find(teacher => teacher.roll === "교수");

    this.article = article;
    this.study = studyInfo;
    this.prof = prof;
  }
};
</script>

<style lang='scss' scoped>
</style>
