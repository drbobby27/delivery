<script setup>
import BaseInput from '../components/BaseInput.vue'
import {ref} from 'vue'
import { useShoppingCartStore } from '../stores/shoppingCart';


const shopping_cart = useShoppingCartStore(); 
  
let qty = ref(1);

const updateQty = (action) => {
  if(qty.value >=0){
    qty.value = action === "add" ? qty.value + 1 : qty.value - 1;
    shopping_cart.addQuantity(qty.value)
  }
  setTimeout(() => {
     qty.value = 1;
    }, 5000);
  
}

const getQty = (evt)=> {
    qty.value = evt.target.value;
    shopping_cart.addQuantity(qty.value)
    setTimeout(() => {
     qty.value = 1;
    }, 5000);
}
</script>
<template>
     <div class="card-quantity" :qyt="qty">
        <button type="button" class="button" :disabled="qty <= 1" @click="updateQty('remove')">-</button>
        <input type="number" class="input"  @input="getQty($event)" v-model="qty"/> 
        <button type="button" class="button" @click="updateQty('add')">+</button>                  
    </div>
</template>
<style scoped>
.input {
    width: 90%;
    text-align: center;
    padding: 3px 0;
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
    font-size: 1.9rem;
}

</style>