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
   <div class="row burger text-center my-5 mx-5">
        <div class="col-12 col-sm-8 col-lg-3" v-for="item in products" :key="item.name">
          <div class="card">
            <img :src="item.image" class="img-fluid rounded-start" alt="..." />
            <div class="card-body">
              <div class="row">
                <h4>{{item.name}}</h4>
              </div>
              <div class="row">
                <h6>{{item.description}}</h6>
              </div>
            </div>
            <div class="row mb-3" id="price">
              <h4 >${{item.price}}</h4>
            </div>
            <div class="row">
              <div class="col-3">
                <button id="menos" :disabled="item.qty <= 1" type="button"
                  ><i class="fa-solid fa-minus"></i></button>
              </div>
              <div class="col-6">
                <input id="medio" type="number" v-model.number="item.qty">
              </div>
              <div class="col-3">
                <button id="mas" type="button" ><i
                    class="fa-solid fa-plus"></i></button>
              </div>
            </div>
            <button v-if="item.qty >= 1"  type="button" class="btn  mt-3"
              data-bs-toggle="modal" data-bs-target="#exampleModal22">
              Agregar
            </button>
            <button v-if="item.qty < 1"  type="button" class="btn  mt-3"
              >
              Agregar
            </button>

          </div>
        </div>
      </div>
</template>

<style scoped>

.burger #medio{
    width: 100%;
}
.burger  #mas, #menos{
    width: 60%;
    border: none;
}
.burger  #mas{
    background-color: green;
}
.burger  #menos{
    background-color: red;
}
.burger .btn{
    border-color: black;
    color: black;
}
.burger .btn:hover{
    background-color: orange;
    color: white;
    border-style: none;
}
 .burger .card{
    margin-bottom: 40px;
    
}
 .burger .card .card-body{
    height:8rem;
   
}
 .burger .card img{
    height:12rem;
   
}

 #price{
    margin-top: 18%!important;
 }

</style>