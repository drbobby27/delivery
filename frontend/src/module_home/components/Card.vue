<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useShoppingCartStore } from '../../stores/shoppingCart';

const  shopping_cart = useShoppingCartStore(); 

const products = ref([])
const qty = ref(0)
const ErrorQty = false
// const shopping_cart = ref([])

const getProducts = async()=> {
        const urlData = "http://localhost:7000/api/v1/product"
        await fetch(urlData)
        .then(resp => resp.json())
        .then(data => products.value= data)
        // console.log(products)
   };

onMounted(() => {
  getProducts(); 
})
const updateQty = (action) => {
    qty.value  = action === "add" ? qty.value + 1 : qty.value - 1; 
    console.log(qty) 
    return qty   
}
const validation = () => {
  
}
const addCart = (item, qty) => {
    // console.log("Hola...😊", qty)
  let product = {
        id: item.id,
        product_name: item.product_name,
        price: item.price,
        long_desc: item.long_desc,
        image_url: item.image_url,
        category_id: item.category_id,
        quantity: qty,
  }
  shopping_cart.create(product)
  console.log(shopping_cart)
  return shopping_cart
}
</script>

<template>
    <div class="row m-5">
            <h2 class="text-muted text-center my-5">Productos</h2>
            <div class="col products ">
                <div class="card" v-for="item in products" :key="item.id">
                    <img :src="item.image_url" class="img-fluid rounded-start" alt="...">
                    <div class="card-body">
                        <div class="card-header">
                            <h4>{{item.product_name}}</h4>
                            <h4>${{item.price}}</h4>
                        </div>
                        <div class="card-desc">
                            <p>{{item.long_desc}}</p>
                        </div>
                        <div class="card-quantity">
                            <button type="button" @click="updateQty('remove')">-</button>
                            <input id="medio" type="number" v-model="qty">
                            <span class="error" style="color: red" v-if="ErrorQty"></span>
                            <button type="button"  @click="updateQty('add')">+</button>
                        </div>
                        <div class="footer-cta">
                            <button type="button" class="btn" @click="addCart(item, qty)">
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

.card-body { 
    position: relative;
}

.products .card {
  height: 28rem;
  transition: all .5s ease-out;
  overflow: hidden;
}

/* .products .card:hover {
    transform: scale(1.056465);
} */
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