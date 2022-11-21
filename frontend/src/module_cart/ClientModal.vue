<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minValue, numeric,alpha, helpers } from '@vuelidate/validators'
import {  useOrderStore } from '../stores/order';
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const orders =  useOrderStore(); 
const shopping_cart = useShoppingCartStore(); 
const detail_purchase = useShoppingCartStore(); 
const purchaseDB = useShoppingCartStore(); 
// const detail_purchaseDB = useShoppingCartStore(); 
// let purchase_Id = useShoppingCartStore();

let purchase = ref(0);
let orden = ref({})
let ordenDB = ref([])

const formOrder = reactive({
  client_name: "",
  address: "",
  phone_number: "",
}); 


const rules = computed (() =>{
  return {
    client_name: { 
      required:helpers.withMessage("El campo nombre es obligatorio", required ), 
      alpha: helpers.withMessage("Solo acepta caracteres alfabéticos", alpha )
    },
    address: {
       required:helpers.withMessage("El campo dirección es obligatorio", required ) 
    },
    phone_number: {
      required:helpers.withMessage("El campo teléfono es obligatorio,debe tener 7 caracteres min y max 10", required ),
      numeric,minValue: minValue(7),
      maxLength: maxLength(10)
    },
  }
});
//inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formOrder)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    addOrden();
    // registerPurchase();
    // DetailPurchase();
    // registerOrder();
    message(
      "center",
      "Creación completada",
      "Se ha creado correctamente el producto",
      1500
    );
    clear();
    shopping_cart.clearsCart();
  } else {
    messageError("Verifique que todos los campos este llenos");
  }
};

const addOrden = () => {
  let description = shopping_cart.getDescriptionOrden
  let totalToPay = shopping_cart.getTotalPayment
  let numOrder = ordenDB.value.length + 1
  orden = { ...formOrder,description, totalToPay, purchase_id: numOrder}; 
  // orders.createOrden(orden)
  ordenDB.value.push(orden)
  updateLocalStorage(ordenDB)
}

function updateLocalStorage(){
    localStorage.setItem("dbOrder", JSON.stringify(ordenDB.value))
    localStorage.setItem("dbOrderChef", JSON.stringify(ordenDB.value))
}
// const registerPurchase = async () => {
//   const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/purchase`;
//   await fetch(urlDB, {
//     method: "POST",
//     body: shopping_cart.registerPurchase(),
//   })
//    .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       purchase.value= data.createRegister.id
//       ordenDB = { ...formOrder, purchase_id: purchase.value}
//       detail_purchase.detailPurchase(purchase.value)
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
// const DetailPurchase = async () => {
//   const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/detail-purchase`;
//   await fetch(urlDB, {
//     method: "POST",
//     body: detail_purchase.detailPurchase(),
//   })
//      .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("soy data detalle...", data)
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
// const registerOrder = async () => {
//   const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/order`;
//   await fetch(urlDB, {
//     method: "POST",
//     body: ordenDB,
//   })
//    .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
//      message(
//     "center",
//     "Creación completada",
//     "Se ha creado correctamente el producto",
//     1500
//   );
//    clear();
//    shopping_cart.clearsCart();
// };
const clear=() =>{
   v$.value.$reset()
   formOrder.client_name = '';
   formOrder.address = '';
   formOrder.phone_number = '';
}
// const  handleSubmit = () => fieldValidations()? error : createPerson();

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
const messageError = ( text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};


</script>
<template>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header title">
        <h1 class="modal-title  fs-5" id="exampleModalLabel">Ingrese sus datos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body container px-5">
        <form @submit.prevent="submitForm"> 
                <div class="row mt-2">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" v-model="formOrder.client_name">
                  <span v-for="error in v$.client_name.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_client_name" style="color: red;">Por favor ingresa tu nombre</span> -->
                </div>
                <div class="row mt-2">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" v-model="formOrder.phone_number">
                  <span v-for="error in v$.phone_number.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_phone_number" style="color: red;">Por favor ingresa tu teléfono</span> -->
                </div>
                <div class="row mt-2">
                  <label class="form-label">Dirección</label>
                  <input class="form-control" type="text" v-model="formOrder.address">
                   <span v-for="error in v$.address.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_address" style="color: red;">Por favor ingresa tu dirección</span> -->
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn">Pagar</button>
                </div>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
 .title, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
 }
 .form-label {
  color: #b20837;
  font-weight: 400;
 }
 .form-control {
  border: 1px solid #b20837;
 }
 .form-control:focus {
  background-color: #e9cdd5;
   border: 1px solid #b20837 !important;
}
</style>