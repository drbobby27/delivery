<script setup>
import { reactive, ref, onMounted} from 'vue'

const products = ref([])

 const getProducts= async()=> {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/product"
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => products.value= data)
        console.log(products)
   };

onMounted(() => {
  getProducts(); 
})
</script>
<template>
  <div>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" v-for="item in products" :key="item.id">
      <div class="carousel-item active">
        <img :src="item.image_url" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{item.product_name}}</h5>
          <p>{{item.short_desc}}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</template>
<style scoped>
.carousel-item.active img {
    height: 25rem;
    object-fit: cover;
}
.carousel-item img {
    height: 25rem;
    object-fit: cover;
}

</style>