<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useShoppingCartStore } from '../../stores/shoppingCart';
import Card from '../components/Card.vue'

const shopping_cart = useShoppingCartStore(); 
const quantity_products = useShoppingCartStore();

const productsBurger = ref([])
const productsHotDog = ref([])

const getProductsBurger = () => {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => productsBurger.value= data.filter((prod)=> prod.category.type === "Hamburguesa")) 
};

const getProductsHotDog = () => {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => productsHotDog.value= data.filter((prod)=> prod.category.type === "Perro Caliente")) 
};

onMounted(() => {
  getProductsBurger();
  getProductsHotDog(); 
})


const addProductCart = (item) => {
  let product = {
    id: item.id,
    product_name: item.product_name,
    price: item.price,
    long_desc: item.long_desc,
    short_desc: item.short_desc,
    image_url: item.image_url,
    category_id: item.category_id,
    quantity: quantity_products.getQuantity,
    subTotal:quantity_products.getQuantity * item.price,
  }
  shopping_cart.addCart(product); 
  shopping_cart.totalToPay();
  shopping_cart.descriptionOrden();
  shopping_cart.clearsQuantity();
}

</script>
<template>
  <div class="container">
    <section id="burger" class="mt-5">
      <h2 class="text-muted text-center my-5">Hamburguesa</h2>
      <Card @handleClic="addProductCart" :dataProducts="productsBurger" class="contents"/> 
    </section>
    <section id="hotdog" class="mt-5">
      <h2 class="text-muted text-center my-5">Perro Caliente</h2> 
      <Card @handleClic="addProductCart" :dataProducts="productsHotDog" class="contents"/>
    </section>  
  </div>
 </template>
 <style scoped>

.contents {
    margin: 0 25px;
}
@media (min-width: 481px) {
  .contents {
    margin: 0 65px;
}
}
@media (min-width: 576px) {
 .contents {
    margin: 0 95px;
}
}

@media (min-width: 768px) {
  .contents {
    margin: 0 15px;
}
}
@media (min-width: 1023px) {
.contents {
    margin: 0 15px;
}
} 
@media (min-width: 1200px) {
.contents {
    margin: 0;
}
} 
</style>
