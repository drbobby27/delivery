<script setup>
import BaseButton from '../../components/BaseButton.vue'


 const emits = defineEmits(['handleClic'])
//  const props = defineProps(['qty']);
  defineProps({
       dataProducts: {
        type: Array,
        required: true,
     }
})
const handleClick = (data) => {
    return emits('handleClic',data);
}

function thousandSeparator(number = 0, decimalsQuantity = 0) {
  return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>
<template>
    <div class="row">
        <div class="products">
            <div class="card-container" v-for="item in dataProducts" :key="item.id">
              <div class="card-header bg-transparent">
                    <img :src="item.image_url" class="img-fluid rounded-start" :alt="item.name"> 
                </div>
                <div class="card-body">
                    <div class="card-header header my-2">
                        <h4>{{item.product_name}}</h4>
                        <h4>${{thousandSeparator(item.price)}}</h4>
                    </div>
                    <div class="card-desc">
                        <p>{{item.long_desc}}</p>
                    </div>
                    <BaseButton />   
                </div>
                <div class="card-footer bg-transparent">
                    <button type="button" class="btn" @click="emits('handleClic',item)">
                    Agregar
                    </button>
                </div>  
            </div>
        </div>
    </div>  
</template>
<style scoped>

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 0.2fr));
  padding: 1rem 13px;
  gap: 36px;
  border: none !important;
  perspective: 800px; 
}

.card-footer {
  padding:0;
}

.card-body { 
    position: relative;
}
.card-container {
    width: 90%;
    /* background: red; */
}
.products .card {
  height: 28rem;
  transition: all .5s ease-out;
  overflow: hidden;
}
.input {
    width: 90%;
    text-align: center;
}

.btn {
    background: #b20837;
    color: #f0e9cb;
    width: 100%;
}
.products .card:hover img {
    width: 100%;
    transform: scale(1.09) rotateY(0);
}

.products .card img {
    width: 180%;
    height: 20rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
}
.img-fluid {
    max-width: 100%;
    height: 12rem;
}
.card-desc {
    height: 11rem;
}
.card-header {
    display: flex;
    justify-content: space-between;
    padding: 0;
   
}
.header {
    border-style: 1px solid #cacbce;
    background-color: #e9eaeb;
}
.card-quantity{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2px;
}

.card-quantity button {
    border: none !important;
    background: transparent !important;
    font-size: 2rem;
}

.footer-cta {
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 1.4rem;
    left: 0;
    right: 0;
}
.footer-cta button {
    border: none !important;
}
@media (min-width: 384px) {
   .products {
       grid-template-columns: repeat(auto-fit, minmax(340px, 0.2fr));
    }
}
@media (min-width: 481px) {
    .products {
        grid-template-columns: repeat(auto-fit, minmax(295px, 9fr));
    }
    .card-container {
        width: 100%;
    }
    .card-desc {
        height: 9rem;
    }
}
@media (min-width: 496px) {
   .img-fluid {
    height: 15rem;
}
}
@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 36px;
 }
 .card-container {
    width: 100%;
}
.card-desc {
    height: 9rem;
} 
   .img-fluid {
    height: 14rem;
}
}
@media (min-width: 1023px) {
    .products {
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.3fr));
        gap: 28px;
    }
    .card-container {
        width: 18rem;
        padding: 1px 1rem;
    }
    .card-desc {
        height: 10rem;
    }
      .img-fluid {
    height: 11rem;
}
} 
@media (min-width: 1200px) {
    .products {
        grid-template-columns: repeat(auto-fit, minmax(250px, 0.1fr));
        gap: 29px;
        padding: 1rem 12px;
    }
  
    .card-container{
        padding: 1px 1.8rem;
        width: 20rem;
        
    }

     .card-desc {
        height: 12rem;
    }
}
</style>


