<script setup>
import { reactive, ref, onMounted} from 'vue'
import {  useOrderStore } from '../stores/order';

const employee_orders = useOrderStore(); 

const domiciliarys = ref([])

const getDomiciliary = () => {
        const urlData = "https://delivery-production-8572.up.railway.app/api/v1/deliverman"
        fetch(urlData)
        .then(resp => resp.json())
        .then(data => domiciliarys.value= data)
        console.log(domiciliarys)
   };

onMounted(() => {
  getDomiciliary(); 
})

function handleClick(i) {
    employee_orders.clearChefsOrders(i)
}
</script>
<template>
  <div class="container mx-4">
    <h1 class="title mt-5 mb-3">Empleados</h1>
    <div class="row" id="tabla">
              <div class="container pe-3 ps-3">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table table-header">
                      <tr>
                        <th class="col-3 table99">Número pedido</th>
                        <th class="col-3 table99">Descripción</th>
                        <th class="col-3 table99">Domiciliario</th>
                          <th class="col-3 table99">Opción</th>
                      </tr>
                    </thead>
                    <tbody v-if="employee_orders.getEmployeeOrders.length">
                      <tr class="body" v-for="(item, i) in employee_orders.getEmployeeOrders" :key="item.id">
                        <td></td>
                        <td>{{item.description.join()}}</td>
                        <td> 
                            <select name="seleccionProducto" id="seleccionProducto" class="form-select text-center">
                                <option v-for="(item, index) in domiciliarys" v-text="item.full_name"></option>
                            </select>
                        </td>
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