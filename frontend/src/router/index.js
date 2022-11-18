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
    {
      path: "/Administracion",
      name: "Administracion",
      component: () =>
        import("../module_administration/View_Administration.vue"),
      children:[
        {
          path: "/CrearEmpleados",
          name: "CrearEmpleados",
          component: () =>
            import("../module_administration/components/Create_Employees.vue"),
        },
        {
          path: "/CrearProductos",
          name: "Productos",
          component: () =>
            import("../module_administration/components/Create_Products.vue"),
        },
        {
          path: "/Historial",
          name: "Historial",
          component: () =>
            import("../module_administration/components/Table_Ventas.vue"),
        },
      ]
    },
   
    
    {
      path: "/Empleado",
      name: "Empleado",
      component: () =>
        import("../module_waiter/View_Waiter.vue"),
    },
    {
      path: "/Domiciliario",
      name: "Domiciliario",
      component: () =>
        import("../module_domiciliary/View_Domiciliary.vue"),
    },
    {
      path: "/Chef",
      name: "chef",
      component: () =>
        import("../module_chef/View_Chef.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../NotFoundView.vue"),
  },
  ],
});

export default router;
