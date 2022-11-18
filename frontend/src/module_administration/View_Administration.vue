<script setup>
import Navbar from "../module_administration/components/Nabvar.vue";
import Contents from "../module_administration/components/Contents.vue"
</script>

<template>
  <Navbar />
  <!-- <Contents/> -->

  
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");

.navbar {
  font-size: 130%;
  background-color: rgb(169, 173, 173);
}
.text{
  color: #b20837 ;
}
.router-link-exact-active {
  color: #b20837 !important;
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