import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/a",
    name: "test",
    component: () => import("../views/TestAnimation.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/introduce",
    name: "introduce",
    component: () => import("../views/Introduce.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/study",
    name: "study",
    component: () => import("../views/Study.vue")
  },
  {
    path: "/notes",
    name: "notes",
    component: () => import("../views/Notes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
