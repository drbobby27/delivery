import { createRouter, createWebHistory } from "vue-router";
import Home from "../module_home/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    // {
    //   path: "/Administración",
    //   name: "Administración",
    //   component: () => import("../module_administration/layouts/AdministrationLayout.vue"),
    // },
    // {
    //   path: "/Administración",
    //   name: "Administración",
    //   component: () =>
    //     import("../module_administration/View_Administration.vue"),
    // },
    // {
    //   path: "/Empleados",
    //   name: "Empleados",
    //   component: () =>
    //     import("../module_administration/components/Create_Employees.vue"),
    // },
    // {
    //   path: "/Productos",
    //   name: "Productos",
    //   component: () =>
    //     import("../module_administration/components/Create_Products.vue"),
    // },
    // {
    //   path: "/Historial",
    //   name: "Historial",
    //   component: () =>
    //     import("../module_administration/components/Table_Ventas.vue"),
    // },
    // {
    //   path: "/Empleado",
    //   name: "empleado",
    //   component: () =>
    //     import("../module_waiter/View_Waiter.vue"),
    // },
    // {
    //   path: "/Domiciliarios",
    //   name: "empleado",
    //   component: () =>
    //     import("../module_domiciliary/View_Domiciliary.vue"),
    // },
    // {
    //   path: "/Chef",
    //   name: "chef",
    //   component: () =>
    //     import("../module_chef/View_Chef.vue"),
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/NotFoundView.vue"),
    },
  ],
});

export default router;
