<script setup>
import { onMounted, ref } from "vue";

let name = ref("");
let phoneNumber = ref("");
let email = ref("");
let password = ref("");
let password1 = ref("");
let address = ref("");
let role_id = ref("");

const create = ref(false);
const create1 = ref(true);

const roles = ref([]);

const employees = ref([]);

const idUrl = ref("");

const nameEdit = ref("");

let action = ref(true);

let error1 = ref(false);
let error2 = ref(false);
let error3 = ref(false);
let error4 = ref(false);
let error5 = ref(false);
let error6 = ref(false);
let error10 = ref(false);
let error11 = ref(false);

let error7 = ref(false);

// const roles = ["administrador", "chef", "empleado", "domiciliario"];

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

const message1 = (title, text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
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
  if (password1.value == "") {
    error10.value = true;
  } else {
    error10.value = false;
  }
  if (password.value !== password1.value) {
    error11.value = true;
  } else {
    error11.value = false;
  }
  if (address.value == "") {
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
  password1.value = "";
  address.value = "";
  role_id.value = "";
};
const validation = () => {
  getError();
  if (
    error1.value == true ||
    error2.value == true ||
    error3.value == true ||
    error4.value == true ||
    error5.value == true ||
    error6.value == true ||
    error10.value == true ||
    error11.value == true
  ) {
  } else {
    sendData();
    clear();
  }
};
const sendData = async () => {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("phoneNumber", phoneNumber.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  formData.append("address", address.value);
  formData.append("role_id", role_id.value);

  const urlDB = `http://localhost:7000/api/v1/employees`;
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
    "Se ha creado correctamente el registro",
    1500
  );
  clear();
  create.value = false;
  create1.value = true;
};

const data = async () => {
  const urlData = "http://localhost:7000/api/v1/employees";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (employees.value = data));
};
const data1 = async () => {
  const urlData = "http://localhost:7000/api/v1/positions";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (roles.value = data));
};

const employeesDelete = () => {
  const urlData = `http://localhost:7000/api/v1/employees/${idUrl.value}`;
  fetch(urlData, {
    method: "DELETE",
  })
    .then((response) => response)
    .then((response) => {
      data();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  message(
    "center",
    "Eliminada correctamente",
    "Se ha eliminado un empleado",
    1500
  );
};

const editEmployees = () => {
  getError();
  if (
    error1.value == true ||
    error2.value == true ||
    error3.value == true ||
    error4.value == true ||
    error5.value == true ||
    error6.value == true ||
    error10.value == true ||
    error11.value == true
  ) {
    getError();
  } else {
    const formData01 = new FormData();
    formData01.append("name", name.value);
    formData01.append("phoneNumber", phoneNumber.value);
    formData01.append("email", email.value);
    formData01.append("password", password.value);
    formData01.append("address", address.value);
    formData01.append("role_id", role_id.value);

    const urlData = `http://localhost:7000/api/v1/employees/${idUrl.value}`;
    fetch(urlData, {
      method: "PUT",
      body: formData01,
    })
      .then((response) => response)
      .then((response) => {
        data();
        message(
          "center",
          "Actualización completada",
          "Se ha actualizado correctamente la categoría",
          1500
        );
        create.value = false;
        create1.value = true;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

onMounted(() => {
  data();
  data1();
});

const prueba = (data, action1) => {
  if (action1) {
    idUrl.value = data.id;
  } else {
    action.value = false;
    name.value = data.name;
    phoneNumber.value = data.phoneNumber;
    role_id.value = data.role_id;
    email.value = data.email;
    password.value = data.password;
    address.value = data.address;
    role_id.value = data.role_id;
    idUrl.value = data.id;
  }
};
const view = () => {
  create.value = true;
  create1.value = false;
};
</script>

<template>
  <div class="row usuarios m-3 justify-content-center">
    <div class="col-12 col-sm-12 col-lg-6" v-if="create1">
      <div class="col">
        <div class="row">
          <div class="row mt-1 mb-1 text-center">
            <h3>Empleados creados</h3>
          </div>
        </div>
        <div class="row">
          <div class="row mt-3 mb-4 text-center">
            <div class="col">
              <button class="btn btn-outline-success" @click="view()">
                Crear empleado
              </button>
            </div>
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
                  <th class="col-3">Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="body text-center"
                  v-for="item in employees"
                  :key="item.name"
                >
                  <td v-text="item.name"></td>
                  <td v-text="item.position.name"></td>
                  <td style="width: 120px">
                    <button
                      type="button"
                      class="btn btn-success me-3"
                      title="Editar"
                      @click="prueba(item, false), view()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pass-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0H10ZM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z"
                        />
                      </svg>
                    </button>
                    <button
                      title="Eliminar"
                      type="button"
                      class="btn btn-danger me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal06"
                      @click="prueba(item, true)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Modal eliminar -->
      <div
        class="modal fade"
        id="exampleModal06"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Eliminar empleados
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <p>¿Está seguro de eliminar a este empleado?</p>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                @click="employeesDelete(item)"
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
              >
                Si
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin modal eliminar -->

    <div class="col-12 col-sm-12 col-lg-6" v-if="create">
      <div class="row mt-3 text-center" v-if="action">
        <h3>Crear empleados</h3>
      </div>
      <div class="row mt-3 text-center" v-else>
        <h3>Editar datos de empleados</h3>
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
          <input v-model="email" class="form-control" type="email" />
          <span class="error2" v-if="error3" style="color: red"
            >Por favor ingrese una email</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Contraseña</label>
          <input v-model="password" class="form-control" type="password" />
          <span class="error2" v-if="error4" style="color: red"
            >Por favor ingrese una contraseña</span
          >
          <span class="error2" v-if="error11" style="color: red"
            >Las constraseñas no coinciden</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Confirmar contraseña</label>
          <input v-model="password1" class="form-control" type="password" />
          <span class="error2" v-if="error10" style="color: red"
            >Por favor ingrese una contraseña</span
          >
          <span class="error2" v-if="error11" style="color: red"
            >Las constraseñas no coinciden</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Dirección</label>
          <input v-model="address" class="form-control" type="text" />
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
            class="form-select"
          >
            <option
              v-for="(item, index) in roles"
              v-text="item.name"
              :key="index"
              :value="item.id"
            ></option>
          </select>
          <span class="error3" v-if="error6" style="color: red"
            >Por favor ingrese un rol</span
          >
        </div>
      </div>

      <div class="row m-1">
        <button
          v-if="action"
          @click="validation()"
          class="custom-btn btn-9"
          type="button"
        >
          Guardar
        </button>
        <button
          v-else
          @click="editEmployees()"
          class="custom-btn btn-8"
          type="button"
        >
          Actualizar
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
.btn2 {
  background-color: rgb(84, 138, 182);
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

.btn-8 {
  border: none;
  color: #fff;
  background-color: rgb(15, 128, 39);
  margin-top: 2%;
}
.btn-8:hover {
  border: none;
  border-style: solid;
  border-color: var(--negro);
  border-width: 1px;
  background-color: var(--blanco);
  color: var(--negro);
}
</style>