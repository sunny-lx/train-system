import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import("../components/Login.vue");
const Register = () => import("../components/Register.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
