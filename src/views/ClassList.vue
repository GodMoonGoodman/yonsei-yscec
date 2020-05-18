<template>
  <div>
    <div v-for="(study, idx) in studies" :key="idx">
      <CardHeader :text="study.semester" />
      <div class="card-group">
        <router-link
          class="card pl-4 pr-4 pt-3 pb-3"
          v-for="(study, index) in study.classes"
          :key="index"
          :to="{ name: 'class-id', params: { id: study.id } }"
        >
          <Card
            :title="study.title"
            :sub-title="study.teachers[0].name"
            :img="study.img"
          />
        </router-link>
      </div>
    </div>
    <div ref="trigger"></div>
  </div>
</template>

<script>
import CardHeader from "@/components/common/cardHeader";
import Card from "@/components/common/card";

const promise1 = () => {
  return new Promise(function(resolve) {
    // 비동기를 표현하기 위해 setTimeout 함수를 사용
    window.setTimeout(function() {
      // 해결됨
      resolve();
    }, 500);
  });
};

export default {
  components: {
    Card,
    CardHeader,
  },
  data() {
    return {
      studies: [],
      lastSemester: {
        year: 2019,
        hakgi: 2,
      },
      sortedStudies: [
        {
          semester: "2020년 1학기",
          classes: (this.sortedStudies = this.$db.study),
        },
      ],
      observer: null,
      loading: false,
    };
  },
  created() {
    this.sortedStudies = this.$db.study;
    this.sortedStudies.sort((a, b) => {
      return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
  },

  mounted() {
    this.pushSemester(this.lastSemester);

    this.observer = new IntersectionObserver((entries) => {
      if (this.loading) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.getBeforeSemester();
          this.pushSemester(this.lastSemester);
        }
      });
    });

    this.observer.observe(this.$refs.trigger);
  },
  methods: {
    async pushSemester(semester) {
      this.loading = true;
      await promise1();
      this.studies.push({
        semester: `${semester.year}년 ${semester.hakgi}학기`,
        classes: this.sortedStudies,
      });

      this.loading = false;
    },
    getBeforeSemester() {
      const { lastSemester } = this.$data;
      if (lastSemester.hakgi === 2) {
        lastSemester.hakgi = 1;
      } else {
        lastSemester.year = lastSemester.year - 1;
        lastSemester.hakgi = 2;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-group {
  .card {
    &:focus {
      background-color: #f5f5f5;
    }
    display: block;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>
