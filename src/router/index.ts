import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "@/views/HomePage.vue"),
  },
  {
    path: "/search",
    name: "jobSearch",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "@/views/JobSearch.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
