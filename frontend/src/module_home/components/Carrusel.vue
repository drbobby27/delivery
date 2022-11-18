<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Mousewheel,Autoplay, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

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
  <section id="home">
    <swiper
      :cssMode="true"
      :navigation="true"
      :pagination="{clickable: true, dynamicBullets: true}"
      :mousewheel="true"
      :keyboard="true"
      :slider-per-view="1"
      :space-between="50"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      grab-cursor :preload-images="false"
      :modules="[Navigation, Pagination, Mousewheel, Autoplay, Keyboard]"
      class="mySwiper"
    >
      <swiper-slide class="carousel-item" v-for="item in products" :key="item.id">
        <img :src="item.image_url" class="d-block w-100" alt="foto de productos">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="title">{{item.product_name}}</h5>
          <p class="text">{{item.short_desc}}</p>
        </div>   
      </swiper-slide>
    </swiper>
  </section>
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  /* width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,11px));
  height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,11px)); */
}
.swiper-slide {
  text-align: center;
  font-size: 28px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.title, .text{
  color: white;
  font-size: 2.5rem;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);
}
.text {
  font-size: 2rem;
}
@media (min-width: 1023px) {
  .carousel-item.active img {
      height: 28rem;
      object-fit: cover;
  }
  .carousel-item img {
      height: 28rem;
      object-fit: cover;
  }
} 
</style>
