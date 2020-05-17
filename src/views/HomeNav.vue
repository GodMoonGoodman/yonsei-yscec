<template>
  <div class="home-nav">
    <router-view />
    <TabBar>
      <Tab
        v-for="(tab, index) in tabs"
        :key="index"
        icon=""
        :label="tab.label"
        :route-name="tab.routeName"
        @click.native="$router.push({ name: tab.routeName })"
      />
    </TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/navigation/tabBar";
import Tab from "@/components/navigation/tab";

export default {
  components: { TabBar, Tab },
  data() {
    return {
      tabs: [
        {
          label: "홈",
          icon: "",
          routeName: "Home",
        },
        {
          label: "과제",
          icon: "",
          routeName: "Assignment",
        },
        {
          label: "강의",
          icon: "",
          routeName: "ClassList",
        },
        {
          label: "내정보",
          icon: "",
          routeName: "My",
        },
      ],
    };
  },
};
</script>
