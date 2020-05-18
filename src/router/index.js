import Vue from "vue";
import VueRouter from "vue-router";
import HomeNav from "../views/HomeNav.vue";
import Home from "../views/Home.vue";
import Class from "../views/Class.vue";
import Article from "../views/Article.vue";

import Assignment from "../views/Assignment.vue";
import ClassList from "../views/ClassList.vue";
import Schedule from "../views/Schedule.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeNav,
    children: [
      {
        name: "Home",
        path: "/",
        component: Home,
      },
      {
        name: "Assignment",
        path: "/assignment",
        component: Assignment,
      },
      {
        name: "ClassList",
        path: "/class",
        component: ClassList,
      },
      {
        name: "Schedule",
        path: "/schedule",
        component: Schedule,
      },
    ],
  },
  {
    path: "/class/:id",
    name: "class-id",
    component: Class,
  },
  {
    name: "Article",
    path: "/article/:id",
    component: Article,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
