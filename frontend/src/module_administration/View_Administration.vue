<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import Navbar from '../module_administration/components/Nabvar.vue';




</script>

<template>

<nav class="navbar navbar-expand-lg navbar-light p-2" >
    
    <a  class="navbar-brand" href="#"
      ><span class="icon">Administración</span
      ><i class="fa-solid fa-gears"></i
    ></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <!-- separarlo -->
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/Empleados" class="nav-link active" href="#"
            >Crear Empleados</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/Productos" class="nav-link active" href="#"
            >Crear Productos</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/Historial" class="nav-link active" href="#"
            >Historial Ventas</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/"  class="nav-link active" href="#"
            >Cerrar Sesión <i class="fa-solid fa-right-from-bracket"></i
          ></router-link>
        </li>
      </ul>
    </div>
  
</nav>
<RouterView />
    

</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");

.navbar {
  font-size: 130%;
  background-color: rgb(169, 173, 173);
}
.router-link-exact-active {
  color: rgb(255, 115, 0) !important;
}

* {
  font-family: "Montserrat", sans-serif;
}

.navbar-nav {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
}
.navbar-light .navbar-brand {
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
}
.navbar-light .navbar-brand:focus,
.navbar-light .navbar-brand:hover {
  color: #000;
}
</style>