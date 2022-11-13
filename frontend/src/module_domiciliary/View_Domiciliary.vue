<script setup>
import {  useOrderStore } from '../stores/order';

const domiciliary_orders = useOrderStore(); 
 

function handleClick(i) {
    domiciliary_orders.clearDomiciliaryOrders(i)
}

</script>
<template>
 <div class="container mx-4">
    <h1 class="title mt-5 mb-3">Domiciliario</h1>
    <div class="row" id="tabla">
              <div class="container pe-3 ps-3">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table table-header">
                      <tr>
                        <th class="col-3">Número pedido</th>
                        <th class="col-3">Descripción</th>
                        <th class="col-3">Nombre usuario</th>
                        <th class="col-3">Teléfono</th>
                        <th class="col-3">Dirección</th>
                        <th class="col-3">Nombre domiciliario</th>
                        <th class="col-3">Opción</th>
                      </tr>
                    </thead>
                    <tbody v-if="domiciliary_orders.getDomiciliaryOrders.length">
                      <tr class="body" v-for="(item, i) in domiciliary_orders.getDomiciliaryOrders" :key="item.i">
                        <td>{{}}</td>
                        <td>{{item.description.join()}}</td>
                        <td>{{item.client_name}}</td>
                        <td>{{item.phone_number}}</td>
                        <td>{{item.address}}</td>
                        <td>{{}}</td>
                        <td><button class="btn" @click="handleClick(i)">Listo</button></td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5" class="text-center justify-content-center">Sin lista de Domicilios...</td>
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