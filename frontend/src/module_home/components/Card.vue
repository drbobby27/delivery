<script setup>
import BaseInput from '../../components/BaseInput.vue'

//  const emits = defineEmits({
//         handleClic: String,
//         handleUpdateQty: String
//     })
 const emits = defineEmits(['handleClic', 'handleUpdateQty'])
  defineProps({
       dataProducts: {
        type: Array,
        required: true,
     }
})
const handleClick = (data, item) => {
    return emits('handleClic',data);
}

const handleClickUpdate = (data, item) => {
    return emits('handleUpdateQty',data);
}
// const updateQty = (action, id) => {
//     const product = dataProducts.value.find(product => product.id === id) 
//     console.log("👩🏻‍🦰...",product)
//     console.log(action, id)
//       if(product.qty >=0){
//         const qty = product.qty;
//         product.qty = action === "add" ? qty + 1 : qty - 1;
//       }else{
//         const qty = product.qty;
//         product.qty = action === "remove" ? qty + 1 : qty - 0;
//       }
// }
const saveValue = value => {
    console.log(value)
}
</script>
<template>
    <div class="row px-5">
        <!-- <h2 class="text-muted text-center my-5">Productos</h2> -->
        <div class="products">
            <div v-for="item in dataProducts" :key="item.id">
              <div class="card-header bg-transparent">
                    <img :src="item.image_url" class="img-fluid rounded-start" :alt="item.name"> 
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
                        <button type="button" :disabled="item.qty <= 1" @click="handleClick('remove', item.id)">-</button>
                        <!-- <input id="medio" type="number" :value="handleInput" @change="(e) =>$emit('update:handleInput',e.target.value)"> -->
                        <!-- <input class="input" :id="item.id" type="number" v-model="item.qty" > -->
                        <BaseInput type="number" @update="saveValue" :value="item.qty"/> 
                        <button type="button" @click="handleClick('add', item.id)">+</button>
                        <!-- <button type="button" :disabled="item.qty <= 1" @click="emits('handleClic',item)">-</button> -->
                        <!-- <input id="medio" type="number" :value="handleInput" @change="(e) =>$emit('update:handleInput',e.target.value)"> -->
                        <!-- <input class="input" :id="item.id" type="number" v-model="item.qty" >
                        <button type="button" @click="emits('handleClic',item)">+</button>  -->
                    </div>
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


