<template>
  <div class="container justify-content-center text-center shadow-lg p-3 mb-5 mt-5 bg-body rounded">
    
    <img class="image" src="https://i.ibb.co/XpJ809g/IMG.png" alt="IMG" border="0">
    <!-- <h1 class="display-1">404</h1> -->
    <h3 class="my-5"><strong>La página que ha solicitado no se encuentra disponible</strong></h3>
    <router-link to="/" href="#">
      <i class="fa-solid fa-house icon" title="Home"></i
    ></router-link>
   
  </div>
</template>
<style scoped >

.icon {
  font-size: 3rem;
  color: #b20837;
}

h1 {
  margin-top: -5vh;
  font-weight: 900;
}
.image {
  margin-top: 10vh;
  max-width: 40%;
 
}
</style>