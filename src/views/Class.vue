<template>
  <div>
    <Header :title="title" :tags="tags" />
    <Notification v-if="oh" class="mt-4" text="지금은 오피스 아워입니다." />
    <div class="p-4">
      <Contact
        v-for="(contact, index) in contacts"
        :key="index"
        :name="`${contact.name}  ${contact.roll}`"
        :mail="contact.contact"
        class="contact mb-3"
      />
    </div>
    <div class="p-4">
      <List title="공지사항 💡" class="notice-list">
        <ListItem
          v-for="(notice, index) in notices"
          :key="index"
          :title="notice.title"
          :sub-title="notice.content"
          :caption="$dateFormat(notice.created_at)"
          :favorite="notice.favorite"
          class="mb-5 notice"
          show-favorite
          @click-favorite="notice.favorite = !notice.favorite"
        />
      </List>
    </div>

    <div class="p-4">
      <List title="과제 📚" class="notice-list">
        <ListItem
          v-for="(assignment) in assignments"
          :key="assignment.id"
          :title="assignment.title"
          :sub-title="assignment.content"
          :caption="$dateFormat(assignment.due)"
          :favorite="assignment.favorite"
          class="mb-5 notice"
        />
      </List>
    </div>
  </div>
</template>

<script>
import Header from "@/components/class/header";
import Contact from "@/components/class/contact";
import List from "@/components/common/list";
import ListItem from "@/components/common/listItem";
import Notification from "@/components/common/notification";

export default {
  components: {
    Header,
    Contact,
    List,
    ListItem,
    Notification
  },
  data() {
    return {
      title: "",
      contacts: [],
      tags: [],
      notices: [],
      assignments: [],
      oh: false
    };
  },
  created() {
    const study_id = this.$route.params.id;
    const study = this.$db.study.find(study => study.id === +study_id);
    this.title = study.title;
    this.contacts = study.teachers;
    this.tags = study.tags;
    this.oh = study.oh;
    this.notices = this.$db.notice
      .filter(notice => notice.class_name === study.title)
      .map(notice => {
        notice.content = notice.content.replace("/\\n/gi", "");
        return notice;
      })
      .splice(0, 3);

    this.assignments = this.$db.assignment
      .filter(assignment => assignment.class_name === study.title)
      .splice(0, 3);
  }
};
</script>

<style lang="scss" scoped>
.contact:last-child {
  margin-bottom: 0;
}
.notice-list {
  .notice:last-child {
    margin-bottom: 0;
  }
}
</style>
