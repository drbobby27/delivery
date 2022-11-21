<script setup>
import { useOrderStore } from "../stores/order";
import NavbarG from "../components/NavbarG.vue";
import { ref, onMounted } from "vue";
import ErrorLogin from "../components/ErrorLogin.vue";


let stateLocal = ref(false);
const domiciliary_orders = useOrderStore();
const loginData = ref([]);
let dbOrdersDomic = ref([])
let garbage = ref([]);
 

const data = () => {
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  dbOrdersDomic.value = JSON.parse(localStorage.getItem("dbOrderDomiciliary")) 
};

function handleClick(i) {
  domiciliary_orders.clearDomiciliaryOrders(i);
}
const deleteUser = () => {
  localStorage.removeItem("dataUser");
};

onMounted(() => {
  data();
  stateLocal.value = JSON.parse(localStorage.getItem("stateLocal"));
});
function clever(index){
    if(index>=0) {
        dbOrdersDomic.value.splice(index, 1)
       
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
  localStorage.setItem("dbOrderDomiciliary", JSON.stringify(garbage))
}
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
    <NavbarG
      title="Domiciliario"
      :name="`${loginData.name}`"
      @some-event="deleteUser"
    />
    <div class="container my-5">
      <div class="row" id="tabla">
        <div class="">
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
              <tbody v-if="dbOrdersDomic.length">
                <tr
                  class="body"
                  v-for="(item, i) in dbOrdersDomic"
                  :key="item.i"
                >
                  <td>{{ item.purchase_id }}</td>
                  <td>{{ item.description.join() }}</td>
                  <td>{{ item.client_name }}</td>
                  <td>{{ item.phone_number }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.domiciliary }}</td>
                  <td>
                    <button class="btn bg-success text-white" @click="clever(i)">Listo</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="8" class="text-center justify-content-center">
                    Sin lista de Domicilios...
                  </td>
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
.inicio{
  text-decoration-line: none;
  color: #918e8e;
}
.wrapper{
  margin-top: 15%;
  font-size: 2rem;
  text-align: center;
  
}
.table-header {
  background: #b20837;
  font-size: 1.5rem;
  color: #f0e9cb;
}
.title {
  color: #b20837;
}
</style>