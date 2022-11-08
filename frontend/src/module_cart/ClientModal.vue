<script setup>
import { reactive, ref, onMounted} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const formData = reactive({
  client_name: "",
  address: "",
  phone_number: "",
}); 
const rules = {
   client_name: { required },
   address: { required },
   phone_number: {required },
};
//inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    alert("success, form submitted!");
  } else {
    alert("error, form not submitted!");
  }
};
</script>
<template>
    <!-- <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="exampleModal99" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">cliente</h5> -->
            <!-- <button type="button" @click="closeTotal();" class="btn-close" id="X3" data-bs-dismiss="modal"
              aria-label="Close"></button> -->
          <!-- </div> -->
          <!-- <div class="modal-body"> -->
            <div>
               <form @submit.prevent="submitForm"> 
                <div class="row">
                  <label class="form-label">Nombre</label>
                  <input class="form-control" type="text" v-model="formData.client_name">
                  <span v-for="error in v$.client_name.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_client_name" style="color: red;">Por favor ingresa tu nombre</span> -->
                </div>
                <div class="row">
                  <label class="form-label">Teléfono</label>
                  <input class="form-control" type="text" v-model="formData.phone_number">
                  <span v-for="error in v$.phone_number.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_phone_number" style="color: red;">Por favor ingresa tu teléfono</span> -->
                </div>
                <div class="row">
                  <label class="form-label">Dirección</label>
                  <input class="form-control" type="text" v-model="formData.address">
                   <span v-for="error in v$.address.$errors" .key="error.$uid"  style="color: red;">{{error.$message}}</span>
                  <!-- <span class="error" v-if="error_address" style="color: red;">Por favor ingresa tu dirección</span> -->
                </div>
                <div class="modal-footer">
                  <!-- <button  type="button" class="btn btn-secondary" id="close3" data-bs-dismiss="modal">
                    Cerrar
                  </button> -->
                  <button type="submit" class="btn btn-primary modalsb">
                    Pagar
                  </button>
                </div>
            </form>
            <div class="mt-4">
              <p class="">Errors:</p>
              <span v-for="error in v$.$errors" :key="error.$uid">
                {{error.$property}} - {{error.$message}},
              </span>
            </div>
            </div>
           
          <!-- </div>  
        </div>
      </div>
    </div> -->
</template>