<script setup>
import { reactive } from "@vue/reactivity";

const products = [
        {
            name: "Manzana",
            price: "1.00",
            description: "Una manzana",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Pera",
            price: "2.00",
            description: "Una pera",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
    ];
</script>

<template>
        <div class="row m-5">
            <h2 class="text-muted text-center my-5">Productos</h2>
            <div class="col products ">
                <div class="card" :style="{ transform: animateCard === item.id ? 'rotateY(360deg)' :'' ,width: '18rem', border:'none'}" v-for="item in products" :key="item.id">
                    <img :src="item.image" class="img-fluid rounded-start" alt="...">
                    <div class="card-body">
                        <div class="card-header">
                            <h4>{{item.name}}</h4>
                            <h4>${{item.price}}</h4>
                        </div>
                        <div class="card-desc">
                            <p>{{item.description}}</p>
                        </div>
                        <div class="card-quantity">
                            <button type="button" @click="updateQtyBurgers('remove', item.id)">-</button>
                            <input id="medio" type="number">
                            <button type="button" @click="updateQtyBurgers('add', item.id )">+</button>
                        </div>
                        <div class="footer-cta">
                            <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal22">
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