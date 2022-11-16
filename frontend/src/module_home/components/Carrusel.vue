<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
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
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="{clickable: true, dynamicBullets: true}"
    :mousewheel="true"
    :keyboard="true"
    :slider-per-view="1"
    :space-between="50"
    grab-cursor :preload-images="false"
    :modules="[Navigation, Pagination, Mousewheel, Keyboard]"
    class="mySwiper"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <img :src="item.image_url" class="d-block w-100" alt="foto de productos">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{item.product_name}}</h5>
        <p>{{item.short_desc}}</p>
      </div>   
    </swiper-slide>
  </swiper>
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
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
