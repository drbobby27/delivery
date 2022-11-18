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
 
 
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>
