<template>
  <div class="container justify-content-center text-center shadow-lg p-3 mb-5 mt-4 bg-body rounded">
    <img
      class="image"
      src="https://github.com/isai-ismael/error-404/blob/master/img/img1.svg"
      alt=""
    />
    <h1 class="display-1">404</h1>
    <h3><strong>La página que ha solicitado no se encuentra disponible</strong></h3>
    <router-link to="/" href="#">
      <i class="fa-solid fa-house icon" title="Home"></i
    ></router-link>
   
  </div>
</template>
<style scoped >
.icon {
  font-size: 5rem;
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