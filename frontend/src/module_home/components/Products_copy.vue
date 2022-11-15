<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useShoppingCartStore } from '../../stores/shoppingCart';
import Card from '../components/Card.vue'

const shopping_cart = useShoppingCartStore(); 

const productsBurger = ref([])
const productsHotDog = ref([])
let qty = 1

const handleInput = ref(1)
const ErrorQty = false

const getProductsBurger = () => {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => productsBurger.value= data.filter((prod)=> prod.category.type === "Hamburguesa").map((prod, i)=> prod[i] = { ...prod,qty}))
        console.log(productsBurger)    
};

const getProductsHotDog = () => {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => productsHotDog.value= data.filter((prod)=> prod.category.type === "Perro Caliente").map((prod, i)=> prod[i] = { ...prod,qty}))
        console.log(productsHotDog)   
};

onMounted(() => {
  getProductsBurger();
  getProductsHotDog(); 
})

console.log(handleInput);

const updateQty = (action) => {
    handleInput.value  = action === "add" ? handleInput.value + 1 : handleInput.value - 1; 
    console.log(handleInput) 
    return handleInput   
}
const validation = () => {
  
}
const addProductCart = (item, qty) => {
  let product = {
        id: item.id,
        product_name: item.product_name,
        price: item.price,
        long_desc: item.long_desc,
        short_desc: item.short_desc,
        image_url: item.image_url,
        category_id: item.category_id,
        quantity: handleInput.value,
        subTotal: handleInput.value * item.price,
  }
  shopping_cart.addCart(product) 
  shopping_cart.totalToPay();
  shopping_cart.descriptionOrden()
}

</script>
<template>
<div>
 <h2 class="text-muted text-center my-5">Hamburguesa</h2>
 <Card @handleClic="addProductCart" :dataProducts="productsBurger" /> 
 <h2 class="text-muted text-center my-5">Perro Caliente</h2> 
 <Card @handleClic="addProductCart" :dataProducts="productsHotDog" />  
</div>
 </template>