import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/dashboard.vue";
import summary from "@/views/Summary.vue";
import signinVue from "@/views/signin.vue";
import Inputs from "@/views/inputs.vue";
import products from "@/views/products.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signIn",
      component: signinVue,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/summary",
      name: "summary",
      component: summary,
      children: [
        { path: "/summary", redirect: "/summary/inputs" },
        {
          path: "/summary/inputs",
          name: "inputs",
          component: Inputs,
        },
        {
          path: "/summary/products",
          name: "products",
          component: products,
        },
      ],
    },
  ],
});

export default router;
