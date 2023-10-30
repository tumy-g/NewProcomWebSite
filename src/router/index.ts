import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Home from "../views/Introduce.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
