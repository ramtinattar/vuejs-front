import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Entreprise1 from "../views/Entreprise-1.vue";
import Entreprise2 from "../views/Entreprise-2.vue";
import Profile1 from "../views/Profile-1.vue";
import Profile2 from "../views/Profile-2.vue";
import Profile3 from "../views/Profile-3.vue";
import LoadingPage from "../views/Loading-page.vue";
import Connexion from "../views/Connexion.vue";

const routes = [
  {
    path: "/",
    name: "Connexion",
    component: Connexion,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Connexion.vue"),
  },
  {
    path: "/Entreprise1",
    name: "Entreprise1",
    component: Entreprise1,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Entreprise-1.vue"),
  },
  {
    path: "/Entreprise2",
    name: "Entreprise2",
    component: Entreprise2,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Entreprise-2.vue"),
  },
  {
    path: "/Profile1",
    name: "Profile1",
    component: Profile1,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Profile-1.vue"),
  },
  {
    path: "/Profile2",
    name: "Profile2",
    component: Profile2,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Profile-2.vue"),
  },
  {
    path: "/Profile3",
    name: "Profile3",
    component: Profile3,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Profile-3.vue"),
  },
  {
    path: "/LoadingPage",
    name: "LoadingPage",
    component: LoadingPage,
    component: () =>
      import(/* webpackChunkName: "ramtin" */ "../views/Loading-page.vue"),
  },
  {
    path: "/About",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/Connexion",
  //   name: "Connexion",
  //   component: Connexion,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Connexion.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
