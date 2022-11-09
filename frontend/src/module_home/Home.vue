<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Carrusel from "./components/Carrusel.vue";
import Card from "./components/Card.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
</script>

<template>
  <Navbar />
  <login />
  <Carrusel /> -->
  <Card />

  <Footer />
  <RouterView />
</template>

<style scoped>
</style>
