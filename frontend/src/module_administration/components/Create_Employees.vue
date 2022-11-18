<script setup>
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, sameAs, helpers } from "@vuelidate/validators";

const state = reactive({
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  password1: "",
  address: "",
  role_id: "",
});

const rules = computed(() => {
  return {
    name: {
      required,
    },
    phoneNumber: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
    },
    password1: {
      required,
      sameasPassword: sameAs(state.password),
    },
    address: {
      required,
    },
    role_id: {
      required,
    },
  };
});

const $v = useVuelidate(rules, state);

const submit = async () => {
  const result = await $v.value.$validate();
  if (result) {
    sendData();
    $v.value.$reset()
  } else {
    message1(
      "Verifique que todos los campos este llenos",
    );
  }
};

const sendData = async () => {
  const formData = new FormData();
  formData.append("name", state.name);
  formData.append("phoneNumber", state.phoneNumber);
  formData.append("email", state.email);
  formData.append("password", state.password);
  formData.append("address", state.address);
  formData.append("role_id", state.role_id);

  const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/employees`;
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

  create.value = false;
  create1.value = true;
  
  $v.value.$reset()
};

const submit1 = async () => {
  const result1 = await $v.value.$validate();
  if (result1) {
    const formData01 = new FormData();
    formData01.append("name", state.name);
    formData01.append("phoneNumber", state.phoneNumber);
    formData01.append("email", state.email);
    formData01.append("password", state.password);
    formData01.append("address", state.address);
    formData01.append("role_id", state.role_id);

    const urlData = `https://delivery-production-8572.up.railway.app/api/v1/employees/${idUrl.value}`;
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

        $v.value.$reset()
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      $v.value.$reset()
  } else {
    message1(
      "Verifique que todos los campos este llenos",
  
  );
  }
};

const create = ref(false);
const create1 = ref(true);

const roles = ref([]);

const employees = ref([]);

const idUrl = ref("");


let action = ref(true);

let manyTries = ref(true);



const prueba1 =() => {
  if (manyTries.value) {
    submit()
    console.log("crear");
  }else{
    submit1()
    console.log("editar");
  }
  
};


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

const message1 = ( text,) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};

const data = async () => {
  const urlData = "https://delivery-production-8572.up.railway.app/api/v1/employees";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (employees.value = data));
};
const data1 = async () => {
  const urlData = "https://delivery-production-8572.up.railway.app/api/v1/positions";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (roles.value = data));
};

const employeesDelete = () => {
  const urlData = `https://delivery-production-8572.up.railway.app/api/v1/employees/${idUrl.value}`;
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



onMounted(() => {
  data();
  data1();
});

const prueba = (data, action1) => {
  if (action1) {
    idUrl.value = data.id;
  } else {
    action.value = false;
    state.name = data.name;
    state.phoneNumber = data.phoneNumber;
    state.role_id = data.role_id;
    state.email = data.email;
    state.password = data.password;
    state.address = data.address;
    state.role_id = data.role_id;
    idUrl.value = data.id;
  }
};
const view = () => {
  create.value = true;
  create1.value = false;
  // action.value = true;
  // action.value=
};
const try10 = () => {
  manyTries.value = true;
  
};
const try11 = () => {
  manyTries.value = false;
  
};
</script>

<template>
  <div class="row usuarios m-3 justify-content-center">
    <div class="col-12 col-sm-12 col-lg-6" v-if="create1">
      <div class="col">
        <div class="row">
          <div class="row mt-1 mb-1 text-center">
            <h3 class="title">Empleados creados</h3>
          </div>
        </div>
        <div class="row">
          <div class="row mt-3 mb-4 text-center">
            <div class="col">
              <button class="btn btn-outline-success" @click="view(), try10()">
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
              <thead class="font">
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
                      @click="prueba(item, false), view(),try11()"
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
      <form @submit.prevent="prueba1">
        <div class="row mt-3 text-center" v-if="manyTries">
          <h3>Crear empleados</h3>
        </div>
        <div class="row mt-3 text-center" v-else>
          <h3>Editar datos de empleados</h3>
        </div>
        <div class="row">
          <div class="col mt-3">
            <label class="form-label">Nombre</label>
            <input
              v-model="state.name"
              class="form-control"
              type="text"
              placeholder="Ingrese el nombre"
              :class="{ 'is-invalid': $v.name.$error }"
            />
            <span
              v-for="error in $v.name.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese un nombre") }}
            </span>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col">
            <label class="form-label">Teléfono</label>
            <input
              v-model="state.phoneNumber"
              class="form-control"
              type="text"
              placeholder="Ingrese el telefóno"
              :class="{ 'is-invalid': $v.phoneNumber.$error }"
            />
            <span
              v-for="error in $v.phoneNumber.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese un telefono") }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Email</label>
            <input
              v-model="state.email"
              class="form-control"
              type="email"
              placeholder="Ingrese el correo"
              :class="{ 'is-invalid': $v.email.$error }"
            />
            <span
              v-for="error in $v.email.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese un correo") }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa una contraseña"
              class="form-control my-3"
              v-model="state.password"
              :class="{ 'is-invalid': $v.password.$error }"
            />
            <span
              v-for="error in $v.password.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese una contraseña") }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Confirmar contraseña</label>
            <input
              type="password"
              placeholder="Confirma la contraseña"
              class="form-control my-3"
              v-model="state.password1"
              :class="{ 'is-invalid': $v.password1.$error }"
            />
            <span
              v-for="error in $v.password1.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{
                (error.$message = "Por favor ingrese nuevamente la contraseña")
              }}
            </span>
            <!-- <p>{{ $v.password1 }}</p> -->
            <p
              class="text-danger"
              v-if="!$v.password1.sameasPassword.$response"
            >
              Ingrese la contraseña correcta
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Dirección</label>
            <input
              type="text"
              placeholder="Ingresa una dirección"
              class="form-control my-3"
              v-model="state.address"
              :class="{ 'is-invalid': $v.address.$error }"
            />
            <span
              v-for="error in $v.address.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese una dirección") }}
            </span>
          </div>
        </div>
        <div class="row mt-1">
          <div>
            <label class="form-label">Rol</label>
            <select
              v-model="state.role_id"
              name="seleccionProducto"
              id="seleccionProducto"
              class="form-select"
              :class="{ 'is-invalid': $v.role_id.$error }"
            >
              <option
                v-for="(item, index) in roles"
                v-text="item.name"
                :key="index"
                :value="item.id"
              ></option>
            </select>
            <span
              v-for="error in $v.role_id.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese un rol") }}
            </span>
          </div>
        </div>

        <div class="row m-1">
          <button v-if="action"   class="custom-btn btn-9" type="submit">
            Guardar
          </button>
          <button
            v-else
            
            class="custom-btn btn-8"
            type="submit"
          >
            Actualizar
          </button>
        </div>
      </form>
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
.font{
  background: #b20837;
  color: white;
}
.title {
    color: #b20837;
}
</style>