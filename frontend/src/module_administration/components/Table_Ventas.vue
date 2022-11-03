<script setup>
import { onMounted, ref } from "vue";

let total = ref("1000");

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
    <div class="row">
                <div class="row  title2 my-3 text-center">
                    <h3>Historial de ventas</h3>
                </div>
                <div class="col m-5">
                    <!-- tabla-->
                    <div class="row" id="tabla">
                        <div class="container pe-4 ps-4">
                            <div class="table-responsive">
                                <table class="table table-bordered border-dark border-5 ">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="col-3">Número pedido</th>
                                            <th class="col-3">Descripción</th>
                                            <th class="col-3">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="body" v-for="item in  products" :key="item.name">
                                            <td v-text="item.name"></td>
                                            <td v-text="item.description"></td>
                                            <td v-text="item.price"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th id="bordeTable"></th>
                                            <th class="bordeB">Cantidad Total</th>

                                            <th class="bordeB" v-text="total"></th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>