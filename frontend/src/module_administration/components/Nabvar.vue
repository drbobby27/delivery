<script>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/Administración" class="navbar-brand " href="#"><span class="text-info">Administración</span><i class="fa-solid fa-gears"></i></router-link
            >
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
        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0"> 
          
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
            <router-link to="/Historial" class="nav-link active" href="#"
              >Cerrar Sesión</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>