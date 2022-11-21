<script setup>
import { reactive, ref, onMounted } from "vue";
import { useOrderStore } from "../stores/order";
import NavbarG from "../components/NavbarG.vue";
import ErrorLogin from "../components/ErrorLogin.vue";


const employee_orders = useOrderStore();
// const domiciliary = useOrderStore();
let optionDomiciliary = ref("");
const domiciliarys = ref([]);
const loginData = ref([]);
let stateLocal = ref(false);


let dbOrdersEmployee = ref([])
let dbOrderServe = ref([])
let dataStorageDomiciliary = ref([])

const data = () => {
  loginData.value = JSON.parse(localStorage.getItem("dataUser"));
  dbOrdersEmployee.value = JSON.parse(localStorage.getItem("dbOrderEmployee"))
  console.log(dbOrdersEmployee.value)
  console.log(loginData.value);
};
const deleteUser = () => {
  localStorage.removeItem("dataUser");
};

const getDomiciliary = () => {
  const urlData =
    "https://delivery-production-8572.up.railway.app/api/v1/deliverman";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (domiciliarys.value = data));
  console.log(domiciliarys);
};

onMounted(() => {
  getDomiciliary();
  data();
  stateLocal.value = JSON.parse(localStorage.getItem("stateLocal"));
});

// function handleClick(i) {
//   employee_orders.clearEmployeeOrders(i);
// }

function clever(index){
   if(index>=0) {
      let [serve] = dbOrdersEmployee.value.splice(index,1)
      dbOrderServe.value.push(serve)
      console.log(dbOrderServe)
      console.log(serve)
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
      localStorage.setItem("dbOrderEmployee", JSON.stringify(dbOrdersEmployee.value))
      localStorage.setItem("dbOrderDomiciliary", JSON.stringify(dbOrderServe.value))
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
      title="Empleado"
      :name="`${loginData.name}`"
      @some-event="deleteUser"
    />
    <div class="container my-5">
      <div class="row" id="tabla">
        <div>
          <div class="table-responsive">
            <table class="table table-bordered mt-4 table-strip text-center">
              <thead class="table table-header">
                <tr>
                  <th class="col-3">Número pedido</th>
                  <th class="col-3">Descripción</th>
                  <th class="col-3">Domiciliario</th>
                  <th class="col-3">Opción</th>
                </tr>
              </thead>
              <tbody v-if="dbOrdersEmployee.length">
                <tr
                  class="body"
                  v-for="(item, i) in dbOrdersEmployee"
                  :key="i"
                >
                  <td>{{ item.purchase_id}}</td>
                  <td>{{ item.description.join()}}</td>
                  <td>
                    <select
                      name="seleccionProducto"
                      id="seleccionProducto"
                      class="form-select text-center"
                      v-model="dbOrdersEmployee[i].domiciliary"
                    >
                      <option disabled value="">Seleccione una opción</option>
                      <option
                        v-for="(item, index) in domiciliarys"
                        v-text="item.full_name"
                        :value="item.full_name"
                      ></option>
                    </select>
                  </td>
                  <td>
                    <button class="btn bg-success text-white" @click="clever(i)">Listo</button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="5" class="text-center justify-content-center">
                    Sin lista de ordenes...
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