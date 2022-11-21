<script setup>
import Navbar from "./components/Navbar.vue";
import Carrusel from "./components/Carrusel.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import Products from "../module_home/components/Products.vue"
import Login from "../module_home/components/Login.vue"
</script>

<template>
 <div>
  <Navbar />
  <login />
  <Carrusel />
  <Products/>
  <Footer/>
  <RouterView />
</div>
</template>

<style scoped>
</style>
