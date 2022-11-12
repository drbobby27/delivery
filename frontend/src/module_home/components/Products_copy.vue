<script setup>
import { reactive, ref, unref, onMounted, toRefs} from 'vue'
import { useShoppingCartStore } from '../../stores/shoppingCart';
import Card from '../components/Card.vue'

const shopping_cart = useShoppingCartStore(); 

const dataProducts = ref([]);
// const dataProducts = [];
const products = ref([])
const handleInput = ref(1)
const ErrorQty = false
const getProducts = () => {
        const urlData = "http://localhost:7000/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => dataProducts.value= data)
        console.log("😎...", unref(dataProducts))
   };


onMounted(() => {
  getProducts(); 
})
const {product_name,price, long_desc, short_desc, image_url, category_id, category} = toRefs(dataProducts)
console.log("🧔🏿...", product_name,price, long_desc, short_desc, image_url, category_id, category)
console.log(handleInput);
const updateQty = (action) => {
    handleInput.value  = action === "add" ? handleInput.value + 1 : handleInput.value - 1; 
    console.log(handleInput) 
    return handleInput   
}
// const category = () => {
 
// }

const addProductCart = (item, qty) => {
  let product = {
        id: item.id,
        product_name: item.product_name,
        price: item.price,
        long_desc: item.long_desc,
        image_url: item.image_url,
        category_id: item.category_id,
        quantity: handleInput.value,
        subTotal: handleInput.value * item.price,
  }
  shopping_cart.create(dataProducts)
  shopping_cart.totalToPay();
}
</script>
<template>
<div>
    {{dataProducts}}
 <Card :dataProducts="dataProducts" />  
 <!-- <Card :dataProducts="dataProducts" v-if="dataProducts.category.type === 'Hamburguesa'"/>   -->

</div>
 </template>