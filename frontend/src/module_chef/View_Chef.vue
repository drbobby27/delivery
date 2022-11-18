<script setup>
import { reactive, ref, onMounted} from 'vue'
import {  useOrderStore } from '../stores/order';
import NavbarG from '../components/NavbarG.vue';

const chefs_orders = useOrderStore(); 
let domiciliary = "";
const loginData = ref([]);

const data = () => {
  
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  console.log(loginData.value);
}

function handleClick(i) {
    chefs_orders.clearChefsOrders(i,domiciliary)
}

const deleteUser =()  =>{
  localStorage.removeItem('dataUser');
}

onMounted(() => {
data()
});
</script>
<template>
  <NavbarG title="Chef"  :name="`${loginData.name}`" @some-event="deleteUser" />

   <div class="container mx-4">
    <h1 class="title mt-5 mb-3">Chef</h1>
    <div class="row" id="tabla">
              <div class="container pe-3 ps-3">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table table-header">
                      <tr>
                        <th class="col-3">Número pedido</th>
                        <th class="col-3">Descripción</th>
                        <th class="col-3">Opción</th>
                      </tr>
                    </thead>
                    <tbody v-if="chefs_orders.getChefsOrders.length">
                      <tr class="body" v-for="(item,i) in chefs_orders.getChefsOrders" :key="item.i">
                        <td></td>
                        <td>{{item.description.join()}}</td>
                        <td><button class="btn" @click="handleClick(i)">Listo</button></td> 
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5" class="text-center justify-content-center">Sin lista de ordenes...</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
   </div>
</template>
<style scoped>
.table-header, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
.title {
    color: #b20837;
}
</style>