import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

// TODO: Uncomment baris kode dibawah ini untuk meng-import Halaman Hello ke dalam router
import HelloView from "../views/HelloView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // TODO: Uncomment baris kode dibawah ini untuk menambahkan routing baru ke Halaman Hello
  {
    path: "/hello",
    name: "hello",
    component: HelloView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
