<script setup>
import { onMounted, ref } from "vue";

let name = ref("");
let phoneNumber = ref("");
let email = ref("");
let password = ref("");
let adress = ref("");
let role_id = ref("");

const employees = ref([]);

let error1 = ref(false);
let error2 = ref(false);
let error3 = ref(false);
let error4 = ref(false);
let error5 = ref(false);
let error6 = ref(false);

const roles = ["administrador", "chef", "empleado", "domiciliario"];

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
  if (name.value == "") {
    error1.value = true;
  } else {
    error1.value = false;
  }
  if (phoneNumber.value == "") {
    error2.value = true;
  } else {
    error2.value = false;
  }
  if (email.value == "") {
    error3.value = true;
  } else {
    error3.value = false;
  }
  if (password.value == "") {
    error4.value = true;
  } else {
    error4.value = false;
  }
  if (adress.value == "") {
    error5.value = true;
  } else {
    error5.value = false;
  }
  if (role_id.value == "") {
    error6.value = true;
  } else {
    error6.value = false;
  }
};
const clear = () => {
  name.value = "";
  phoneNumber.value = "";
  email.value = "";
  password.value = "";
  adress.value = "";
  role_id.value = "";
};
const validation = () => {
  getError();
  if (
    error1 == true ||
    error2 == true ||
    error3 == true ||
    error4 == true ||
    error5 == true ||
    error6 == true
  ) {
    getError();
  } else {
    sendData();
    clear();
  }
};
const sendData = () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("phoneNumber", phoneNumber.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  formData.append("adress", adress.value);
  formData.append("role_id", role_id.value);

  const urlDB = `http://localhost:7000/api/v1/employees`;
  fetch(urlDB, {
    method: "POST",
    body: formData,
  })
    .then((response) => response)
    .then((response) => {
      message(
        "center",
        "Creación completada",
        "Se ha creado correctamente el registro",
        1500
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  clear();
};

const data = () => {
  const urlData = "http://localhost:7000/api/v1/employees";
  fetch(urlData)
    .then((response) => response.json())
    .then((data) => (employees.value = data));
};
</script>

<template>
  <div class="row usuarios m-3 justify-content-center">
    <div class="col-12 col-sm-12 col-lg-6">
      <div class="col">
        <div class="row">
          <div class="row mt-3 mb-4 text-center">
            <h3>Empleados creados</h3>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive">
            <table
              class="table table-bordered border-dark table-white table-striped"
            >
              <thead>
                <tr class="text-center">
                  <th class="col-3">Nombre</th>
                  <th class="col-3">Rol</th>
                </tr>
              </thead>
              <tbody>
                <tr class="body" v-for="item in employees" :key="item.name">
                  <td v-text="item.name"></td>
                  <td v-text="item.role_id"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-lg-6">
      <div class="row mt-3 text-center">
        <h3>Crear empleados</h3>
      </div>
      <div class="row">
        <div class="col mt-3">
          <label class="form-label">Nombre</label>
          <input v-model="name" class="form-control" type="text" />
          <span class="error" v-if="error1" style="color: red"
            >Por favor ingrese un nombre</span
          >
        </div>
      </div>
      <div class="row mt-1">
        <div class="col">
          <label class="form-label">Teléfono</label>
          <input v-model="phoneNumber" class="form-control" type="text" />
          <span class="error" v-if="error2" style="color: red"
            >Por favor ingrese un teléfono</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Email</label>
          <input v-model="email" class="form-control" type="text" />
          <span class="error2" v-if="error3" style="color: red"
            >Por favor ingrese una email</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Contraseña</label>
          <input v-model="password" class="form-control" type="text" />
          <span class="error2" v-if="error4" style="color: red"
            >Por favor ingrese una contraseña</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Dirección</label>
          <input v-model="adress" class="form-control" type="text" />
          <span class="error2" v-if="error5" style="color: red"
            >Por favor ingrese una dirección</span
          >
        </div>
      </div>
      <div class="row mt-1">
        <div>
          <label class="form-label">Rol</label>
          <select
            v-model="role_id"
            name="seleccionProducto"
            id="seleccionProducto"
            class="form-select text-center"
          >
            <option
              v-for="(item, index) in roles"
              v-text="item"
              :key="index"
            ></option>
          </select>
          <span class="error3" v-if="error6" style="color: red"
            >Por favor ingrese un rol</span
          >
        </div>
      </div>

      <div class="row m-1">
        <button @click="validation()" class="custom-btn btn-9" type="button">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.form-label {
  margin-bottom: 1%;
  margin-top: 1%;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Source+Sans+Pro:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto:ital,wght@0,300;1,300&display=swap");
:root {
  --dorado: rgb(212, 175, 55);
  --negro: rgb(0, 0, 0);
  --blanco: #fff;
}

.usuarios {
  color: var(--negro);
}
.custom-btn {
  align-items: center;
  height: 40px;
  color: var(--blanco);
}
.btn-9 {
  border: none;
  color: #fff;
  background-color: rgb(255, 115, 0);
  margin-top: 2%;
}
.btn-9:hover {
  border: none;
  border-style: solid;
  border-color: var(--negro);
  border-width: 1px;
  background-color: var(--blanco);
  color: var(--negro);
}
</style>