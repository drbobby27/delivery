<script setup>
import Navbar from "./components/Navbar.vue";
import Carrusel from "./components/Carrusel.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import Products_copy from "../module_home/components/Products_copy.vue"
import Login from "../module_home/components/Login.vue"
</script>

<template>
 <div>
  <Navbar />
  <login />
  <Carrusel />
  <Products_copy/>
  <Footer/>
  <RouterView />
</div>
</template>

<style scoped>
</style>
