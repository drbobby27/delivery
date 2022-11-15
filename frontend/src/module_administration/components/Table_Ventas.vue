<script setup>
import { reactive, ref, onMounted, computed } from "vue";

const totalVentas = ref([]);
const dataVentas = ref([]);
const totalVentasLocal = ref([]);
const dataVentasLocal = ref([]);

const data = async () => {
  const urlData = "https://delivery-production-8572.up.railway.app/api/v1/purchase"; 
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (totalVentas.value = data));
};
const data1 = async () => {
  const urlData = "https://delivery-production-8572.up.railway.app/api/v1/detail-purchase"; 
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (dataVentas.value = data));
};


  const localStorage1 = () => {
  
  localStorage.setItem("totalVentas",JSON.stringify(totalVentas.value));
  totalVentasLocal.value = JSON.parse(localStorage.getItem("totalVentas"));
  
  localStorage.setItem("dataVentas",JSON.stringify(dataVentas.value));
  dataVentasLocal.value = JSON.parse(localStorage.getItem("dataVentas"));
}

onMounted(() => {
  data();
  data1();
});

</script>

<template>
    <div class="row">
                <div class="row title mt-3 text-center">
                    <h3>Historial de ventas</h3>
                </div>
                <div class="col m-3">
                    <!-- tabla-->
                    <div class="row" id="tabla">
                        <div class="container pe-4 ps-4">
                            <div class="table-responsive">
                                <table class="table table-bordered border-dark border-5 ">
                                    <thead class="table-header">
                                        <tr class="text-center">
                                            <th class="col-3">Número pedido</th>
                                            <th class="col-3">Descripción</th>
                                            <th class="col-3">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="body" v-for="item in  dataVentasLocal" :key="item.name">
                                            <td v-text="item.id"></td>
                                            <td >{{item.amount}}-{{item.product.product_name}}</td>
                                            <td v-text="item.total"></td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th id="bordeTable"></th>
                                            <th class="bordeB">Cantidad Total</th>

                                            <th class="bordeB" v-text="totalVentasLocal.total_value"></th>
                                        </tr>
                                    </tfoot>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>
<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
#bordeTable{
  border-bottom:1px solid rgb(255, 255, 255);
  border-left:1px solid rgb(255, 255, 255);
}
/* .title2{
    color: #b20837;
} */

.table-header, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
.title {
    color: #b20837;
}

</style>