<script setup>
</script>
<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="https://i.ibb.co/0KZGdBv/hot-spicy-burger-ys.jpg"
          class="d-block w-100"
          alt="..."
          width="980"
          height="630"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://i.ibb.co/P6mm7xq/hotd.png"
          class="d-block w-100"
          alt="..."
          width="980"
          height="630"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://i.ibb.co/4Smfrsd/pexels-photo-1639562.jpg"
          class="d-block w-100"
          alt="..."
          width="980"
          height="630"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
.carousel-item  img{
    max-height: 89vh;
}
.carousel{
    margin-top: 70px;
    min-height: 50vh;
}
#carousel {
    position: relative;
    filter: grayscale(30%);
}
</style>