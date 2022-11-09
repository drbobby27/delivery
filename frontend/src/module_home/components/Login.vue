<script setup >
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();


let email = ref("");
let password = ref("");
let dateLogin = ref([]);



const login = ref([]);
const loginLocal = ref([]);

let error1 = ref(false);
let error2 = ref(false);

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

const getError = () => {
  if (email.value == "") {
    error1.value = true;
  } else {
    error1.value = false;
  }
  if (password.value == "") {
    error2.value = true;
  } else {
    error2.value = false;
  }
};
const validation = () => {
  console.log(login.value);
  getError();
  if (error1.value == true || error2.value == true) {
    console.log("hola feo");
  } else {
    sendData();
  }
};
const sendData = async () => {
  const formData = new FormData();
  formData.append("email", email.value);
  formData.append("password", password.value);

  const urlDB = `http://localhost:7000/api/v1/auth/login`;
  await fetch(urlDB, {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      dateLogin.value=data
      if(dateLogin.value.validLogin==true){
        routing();
        message(
          "center",
          "Ingreso correctamente",
          "Ha iniciado sesión",
          1500
        );
      }else{
        message(
          "center",
          "Ingreso fallido",
          "Verifique sus datos",
          1500
        );
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      
    });
};

const routing = () => {
  
  localStorage.setItem("dataUser",JSON.stringify(dateLogin.value.user));
  loginLocal.value = JSON.parse(localStorage.getItem("dataUser"));
  
  console.log(loginLocal.value.role_id);
  
  if(loginLocal.value.role_id == 1){
    
    router.push("/Chef")}
  
  if(loginLocal.value.role_id == 2){
    router.push("/Empleado")}
   
  if(loginLocal.value.role_id == 3){
    router.push("/Domiciliario")}
    
  if(loginLocal.value.role_id == 4){
    router.push("/Administración")}
      
      
     
  console.log("final");
  
}


</script>
<template>
  <div
    class="modal fade"
    id="exampleModal22"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="container">
          <div class="modal-body">
            <div class="row">
              <div class="col text-center">
                <h3>Inicio de sesión</h3>
              </div>
            </div>
            <div class="row" id="user">
              <img src="https://i.ibb.co/r5zDPN1/pngwing-com-1.png" />
            </div>
            <div class="row">
              <div class="col">
                <label class="form-label">Correo</label>
                <input v-model="email" class="form-control" type="email" />
                <span class="error" v-if="error1" style="color: red"
                  >Por favor ingrese el correo</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label class="form-label">Contraseña</label>
                <input
                  v-model="password"
                  class="form-control"
                  type="password"
                />
                <span class="error" v-if="error2" style="color: red"
                  >Por favor ingrese la contraseña</span
                >
              </div>
            </div>
            <button
              @click="validation()"
              id="loginb"
              type="button"
              class="btn btn-1 mt-3 aling-text-center"
            >
              Inicio de sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#user {
  width: 30vh;
  height: 30vh;
  display: block;
  margin: auto;
}
.btn-1 {
  width: 100%;
  background-color: rgb(175, 152, 23);
  color: white;
}
</style>