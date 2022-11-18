<script setup>
import { useOrderStore } from "../stores/order";
import NavbarG from "../components/NavbarG.vue";
import { ref, onMounted } from "vue";
import ErrorLogin from "../components/ErrorLogin.vue";


let stateLocal = ref(false);
const domiciliary_orders = useOrderStore();
const loginData = ref([]);

const data = () => {
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  console.log(loginData.value);
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
</script>
<template>
  <div v-if="stateLocal">
    <NavbarG
      title="Domiciliario"
      :name="`${loginData.name}`"
      @some-event="deleteUser"
    />
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
                <tr
                  class="body"
                  v-for="(item, i) in domiciliary_orders.getDomiciliaryOrders"
                  :key="item.i"
                >
                  <td>{{}}</td>
                  <td>{{ item.description.join() }}</td>
                  <td>{{ item.client_name }}</td>
                  <td>{{ item.phone_number }}</td>
                  <td>{{ item.address }}</td>
                  <td>{{ item.domiciliary }}</td>
                  <td>
                    <button class="btn" @click="handleClick(i)">Listo</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="5" class="text-center justify-content-center">
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
.table-header,
.btn {
  background: #b20837;
  font-size: 1.5rem;
  color: #f0e9cb;
}
.title {
  color: #b20837;
}
</style>