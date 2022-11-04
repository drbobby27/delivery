import { createRouter, createWebHistory } from 'vue-router'
 import View_Administration from '../module_administration/View_Administration.vue'
import Home from '../module_home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
        path: '/Administración',
        name: 'Administración',
        component: View_Administration
      },
      {
        path: '/Empleados',
        name: 'Empleados',
        component: () => import('../module_administration/components/Create_Employees.vue')
      },
      {
          path: '/Productos',
          name: 'Productos',
          component: () => import('../module_administration/components/Create_Products.vue')
        },
      {
        path: '/Historial',
        name: 'Historial',
        component: () => import('../module_administration/components/Table_Ventas.vue')
        },
  ]
})

export default router
