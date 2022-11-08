<script setup >
import { onMounted, ref } from "vue";

let email = ref("");
let password = ref("");

const login = ref([]);

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
    .then((response) => response)
    .then((response) => {})
    .catch((error) => {
      console.error("Error:", error);
    });

  message(
    "center",
    "Creación completada",
    "Se ha creado correctamente el producto",
    1500
  );
  console.log(login.value.email);
  // clear();
};
const data = async () => {
  const urlData = "http://localhost:7000/api/v1/auth/login";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (login.value = data));
};
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