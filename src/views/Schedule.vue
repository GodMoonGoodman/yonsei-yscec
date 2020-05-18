<template>
  <div>
    <table>
      <tr>
        <th></th>
        <th>월</th>
        <th>화</th>
        <th>수</th>
        <th>목</th>
        <th>금</th>
      </tr>
      <tr>
        <td>1</td>
        <td class="c1" rowspan="2" @click="routeTo('현대사회와심리학')">현대사회와심리학</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td class="c4" rowspan="2" @click="routeTo('음악사')">음악사</td>
        <td class="c1" @click="routeTo('현대사회와심리학')">현대사회와심리학</td>
        <td class="c4" rowspan="2" @click="routeTo('음악사')">음악사</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td class="c2" rowspan="2" @click="routeTo('현대사회와사회학')">현대사회와사회학</td>
        <td class="c5" @click="routeTo('UT세미나(스포츠멘탈트레이닝)')">UT세미나(스포츠멘탈트레이닝)</td>
        <td class="c3" rowspan="2" @click="routeTo('MACHINE LEARNING')">MACHINE LEARNING</td>
      </tr>
      <tr>
        <td>4</td>
        <td></td>
        <td class="c2" @click="routeTo('현대사회와사회학')">현대사회와사회학</td>
        <td></td>
      </tr>

      <tr>
        <td>5</td>
        <td class="c3" @click="routeTo('MACHINE LEARNING')">MACHINE LEARNING</td>
        <td class></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studies: this.$db.study
    };
  },
  methods: {
    routeTo(title) {
      console.log(title);
      const study_id = this.studies.find(study => study.title === title).id;
      console.log(study_id);
      this.$router.push({
        name: "class-id",
        params: {
          id: study_id
        }
      });
    }
  },
  computed: {
    tableData() {
      const results = [];
      this.studies.forEach(study => {
        study.time.forEach(t => {
          const day = t[0];
          const period = +t.slice(1, t.length);
          const data = {
            study,
            day
          };
          if (period in results) {
            results[period].push(data);
          } else {
            results[period] = [data];
          }
        });
      });
      for (let i = 0; i < results.length; i++) {
        if (results[i] === undefined) {
          results[i] = [];
        }
      }
      return results.slice(1, results.length);
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  table-layout: fixed;
}

th,
td {
  box-sizing: border-box;
}

th {
  height: 40px;
  vertical-align: middle;
  text-align: center;

  border: 1px solid #e3e3e3;
  background-color: #f2f2f2;
  color: #a6a6a6;
  font-size: 12px;

  &:first-child {
    width: 48px;
  }
}

td:first-child {
  border: 1px solid #e3e3e3;
  background-color: #f2f2f2;
  color: #a6a6a6;
  font-size: 12px;
}

td {
  height: 64px;
  text-align: center;

  border: 1px solid #e3e3e3;
  vertical-align: middle;

  &:first-child {
    width: 48px;
  }
  &.c1 {
    background-color: #f8dae2;
  }
  &.c2 {
    background-color: #fff8cc;
  }
  &.c3 {
    background-color: #faf0f4;
  }
  &.c4 {
    background-color: #e1f1e7;
  }
  &.c5 {
    background-color: #eff9cc;
  }

  &.c1,
  &.c2,
  &.c3,
  &.c4,
  &.c5 {
    font-size: 12px;
    vertical-align: baseline;
    text-align: left;
    padding: 8px 4px;
  }

  width: 100%;
}
</style>
