<script setup>
import { reactive, ref, onMounted} from 'vue'
import {  useOrderStore } from '../stores/order';
import { useShoppingCartStore } from '../stores/shoppingCart';
import NavbarG from '../components/NavbarG.vue';
import ErrorLogin from "../components/ErrorLogin.vue";
import {computed} from 'vue'

// const shopping_cart = useShoppingCartStore(); 

// const orders =  useOrderStore(); 
// const dataOrder =  useOrderStore(); 
// const shopping_cart = useShoppingCartStore(); 
// const chefs_orders = useOrderStore(); 
// const getDBdataOrder = computed(() => dataOrder.getDataOrder);
// const getDBOrden = computed(() => orders.getOrders);

// const  getDBdataOrderChef = computed(() => chefs_orders.getChefsOrders);

let domiciliary = "";
const loginData = ref([]);
let stateLocal = ref(false)
let dbOrdersChef = ref([]) 
let dbOrderServe = ref([])
let dataStorageEmployee = ref("")
//  dataChef: {}
 


const data = () => {  
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  dbOrdersChef.value = JSON.parse(localStorage.getItem("dbOrderChef"));
  console.log(dbOrdersChef.value)
  // console.log(loginData.value);
}

// function handleClick(i) {
//      chefs_orders.clearChefsOrders(i,domiciliary)
// }

function clever(index){
  console.log(index)
    if(index>=0) {
        let [serve] = dbOrdersChef.value.splice(index,1)
        serve.domiciliary = ""
        dbOrderServe.value.push(serve)
        console.log(dbOrderServe)
        console.log(dbOrdersChef)
    }
    updateLocalStorage()
    message(
      "center",
      "Actividad completada",
      "Se ha enviado correctamente su solicitud",
      1500
    );
}
function updateLocalStorage(){ 
    localStorage.setItem("dbOrderChef", JSON.stringify(dbOrdersChef.value))
    localStorage.setItem("dbOrderEmployee", JSON.stringify(dbOrderServe.value))
}
const deleteUser =()  =>{
  localStorage.removeItem('dataUser');
}

onMounted(() => {
  data()
  stateLocal.value = JSON.parse(localStorage.getItem("stateLocal"));
});
const message = (position, title, text, time) => {
  Swal.fire({
    position: position,
    icon: "success",
    title: title,
    text: text,
    showConfirmButton: false,
    timer: time,
  });
};
</script>
<template>
  <div v-if="stateLocal">
  <NavbarG title="Chef"  :name="`${loginData.name}`" @some-event="deleteUser" />

   <div class="container my-5">
    <div class="row" id="tabla">
              <div class="">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table table-header">
                      <tr>
                        <th class="col-3">Número pedido</th>
                        <th class="col-3">Descripción</th>
                        <th class="col-3">Opción</th>
                      </tr>
                    </thead>
                    <tbody v-if="dbOrdersChef.length">
                      <tr class="body" v-for="(item,i) in dbOrdersChef" :key="item.i">
                        <td>{{item.purchase_id}}</td>
                        <td>{{item.description.join()}}</td>
                        <td><button class="btn bg-success text-white" @click="clever(i)">Listo</button></td> 
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
  </div>

  <div v-else class="wrapper" >
    <ErrorLogin/>
 </div>
</template>
<style scoped>

.table-header{
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
.title {
    color: #b20837;
}
</style>