<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useShoppingCartStore } from '../../stores/shoppingCart';

const shopping_cart = useShoppingCartStore(); 

const products = ref([])
const handleInput = ref(1)
const ErrorQty = false
const getProducts = () => {
        const urlData = "http://localhost:7000/api/v1/product"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => products.value= data)
        // console.log(products)
   };

onMounted(() => {
  getProducts(); 
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
        image_url: item.image_url,
        category_id: item.category_id,
        quantity: handleInput.value,
        subTotal: handleInput.value * item.price,
  }
  shopping_cart.addCart(product) 
  shopping_cart.totalToPay();
}

</script>
<template>
    <div class="row px-5">
        <h2 class="text-muted text-center my-5">Hamburguesa</h2>
        <div class="products">
            <div v-for="item in products" :key="item.id">
                <div class="card mb-3" style="max-width: 18rem;" v-if="item.category.type === 'Hamburguesa'">
                <div class="card-header bg-transparent">
                    <img :src="item.image_url" class="img-fluid rounded-start" alt="..."> 
                </div>
                <div class="card-body">
                    <div class="card-header">
                        <h4>{{item.product_name}}</h4>
                        <h4>${{item.price}}</h4>
                    </div>
                    <div class="card-desc">
                        <p>{{item.long_desc}}</p>
                    </div>
                    <div class="card-quantity">
                        <button type="button" :disabled="handleInput <= 1" @click="updateQty('remove', item.id)">-</button>
                        <!-- <input id="medio" type="number" :value="handleInput" @change="(e) =>$emit('update:handleInput',e.target.value)"> -->
                        <input class="input" :id="item.id" type="number" v-model="handleInput" >
                        <button type="button" @click="updateQty('add', item.id)">+</button>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <button type="button" class="btn" @click="addProductCart(item, qty)">
                    Agregar
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>  
</template>
<style scoped>

.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
    height: 11rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
}

.card-header {
    display: flex;
    justify-content: space-between;
    padding: 0;
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

</style>


