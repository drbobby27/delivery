<script setup>
import Navbar from "../module_administration/components/Nabvar.vue";
import Contents from "../module_administration/components/Contents.vue"
import { onMounted, ref } from "vue";



const loginData = ref([]);

const data = () => {
  
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  console.log(loginData.value);
}
const deleteUser =()  =>{
  localStorage.removeItem('dataUser');
}


onMounted(() => {
data()
});
</script>

<template>
  <Navbar :name="`${loginData.name}`" @some-event="deleteUser" />
 
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