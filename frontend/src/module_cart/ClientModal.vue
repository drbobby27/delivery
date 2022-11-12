<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import {  useOrderStore } from '../stores/order';
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const orders =  useOrderStore(); 
const shopping_cart = useShoppingCartStore(); 
// const leng = computed(() => orders.getQuantityOrders);

let orden = ref({})

const formData = reactive({
  client_name: "",
  address: "",
  phone_number: "",
}); 
const rules = computed (() =>{
  return {
    client_name: { required },
    address: { required },
    phone_number: {required },
  }
});
//inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    addOrden();
    message(
    "center",
    "Creación completada",
    "Se ha creado correctamente el producto",
    1500
  );
   clear();
   shopping_cart.clearsCart();
  } else {
    alert("error, form not submitted!");
  }
};
const addOrden = () => {
  let description = shopping_cart.getDescriptionOrden
  let total_value = shopping_cart.getTotalPayment
  orden = { ...formData, description,total_value}; 
  orders.createOrden(orden)
}

const sendOrden = async () => {
  const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/order`;
  await fetch(urlDB, {
    method: "POST",
    body: orden,
  })
    .then((response) => console.log(response))
    .then((response) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
};
const clear=() =>{
   formData.client_name = '';
   formData.address = '';
   formData.phone_number = '';
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
        <form @submit.prevent="sendOrden"> 
                <div class="row mt-2">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" v-model="formData.client_name">
                  <span v-for="error in v$.client_name.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_client_name" style="color: red;">Por favor ingresa tu nombre</span> -->
                </div>
                <div class="row mt-2">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" v-model="formData.phone_number">
                  <span v-for="error in v$.phone_number.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_phone_number" style="color: red;">Por favor ingresa tu teléfono</span> -->
                </div>
                <div class="row mt-2">
                  <label class="form-label">Dirección</label>
                  <input class="form-control" type="text" v-model="formData.address">
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
  background-color: #c77f92;
   border: 1px solid #b20837 !important;
}
</style>