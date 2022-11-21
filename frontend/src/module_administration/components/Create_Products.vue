<script setup>
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const create = ref(false);
const create1 = ref(true);
const category = ref([]);
const products = ref([]);
const idUrl = ref("");
let action = ref(true);
let error7 = ref(false);
let manyTries = ref(true);

const state = reactive({
  product_name: "",
  price: "",
  long_desc: "",
  short_desc: "",
  image_url: "",
  category_id: "",
});

const rules = computed(() => {
  return {
    product_name: {
      required,
    },
    price: {
      required,
    },
    long_desc: {
      required,
    },
    short_desc: {
      required,
    },
    image_url: {
      required,
    },
    category_id: {
      required,
    },
  };
});

const $v = useVuelidate(rules, state);

const createProducts = async () => {
  const result = await $v.value.$validate();
  if (result) {
    sendData();
    console.log("por aca");
  } else {
    message1(
      "Verifique que todos los campos este llenos",
    );
  }
};

const sendData = async () => {
  const formData = new FormData();
  formData.append("product_name", state.product_name);
  formData.append("price", state.price);
  formData.append("long_desc", state.long_desc);
  formData.append("short_desc", state.short_desc);
  formData.append("image_url", state.image_url);
  formData.append("category_id", state.category_id);
console.log("data");
  const urlDB = `https://delivery-production-8572.up.railway.app/api/v1/product`;
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
 create.value = false;
  create1.value = true;
  
};

const edit = async () => {
  const result1 = await $v.value.$validate();
  if (result1) {
    const formData01 = new FormData();
    formData01.append("product_name", state.product_name);
    formData01.append("price", state.price);
    formData01.append("long_desc", state.long_desc);
    formData01.append("short_desc", state.short_desc);
    formData01.append("image_url", state.image_url);
    formData01.append("category_id", state.category_id);

    const urlData = `https://delivery-production-8572.up.railway.app/api/v1/product/${idUrl.value}`;
    fetch(urlData, {
      method: "PUT",
      body: formData01,
    })
      .then((response) => response)
      .then((response) => {
        data();
        clear();
        message(
          "center",
          "Actualización completada",
          "Se ha actualizado correctamente el producto",
          1500
        );
        create.value = false;
        create1.value = true;
     
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    message1(
      "Verifique que todos los campos este llenos",
    );
  }
};

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
  const urlData =
    "https://delivery-production-8572.up.railway.app/api/v1/product";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (products.value = data));
};
const data1 = async () => {
  const urlData =
    "https://delivery-production-8572.up.railway.app/api/v1/product-category";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (category.value = data));
};

const productsDelete = () => {
  const urlData = `https://delivery-production-8572.up.railway.app/api/v1/product/${idUrl.value}`;
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
    "Eliminado correctamente",
    "Se ha eliminado un producto",
    1500
  );
};

onMounted(() => {
  data();
  data1();
});

const clear = () => {
  $v.value.$reset() // ayuda a que no este todo en rojo
  console.log('limpiando');
  state.category_id= "";
  state.product_name= "";
  state.price= "";
  state.long_desc= "";
  state.short_desc= "";
  state.image_url= "";
};

const prueba = (data, action1) => {
  if (action1) {
    idUrl.value = data.id;
  } else {
    action.value = false;
    state.product_name = data.product_name;
    state.price = data.price;
    state.long_desc = data.long_desc;
    state.short_desc = data.short_desc;
    state.image_url = data.image_url;
    state.category_id = data.category_id;
    idUrl.value = data.id;
  }
};

///

let imgMini = ref("");

const getImage = (e) => {
  let file = e.target.files[0];
  console.log(file);
  state.image_url = file;
  showPicture(file);
};

const showPicture = (file) => {
  let reader = new FileReader();

  reader.onload = (e) => {
    imgMini.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const imagenM = computed(() => {
  return imgMini.value;
});

////
const view = () => {
  create.value = true;
  create1.value = false;
};

const try10 = () => {
  manyTries.value = true;
  
};

const try11 = () => {
  manyTries.value = false;
};

const prueba1 =() => {
  console.log("entro");
  if (manyTries.value) {
    createProducts()
    console.log("crear");
  }else{
    edit()
    console.log("editar");
  }
  
};

function thousandSeparator(number = 0, decimalsQuantity = 0) {
  return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<template>
  <div class="row usuarios m-3 justify-content-center">
    <div class="col-12 col-sm-12 col-lg-6" v-if="create1">
      <div class="col">
        <div class="row mt-3">
          <div class="row mt-3 mb-1 text-center">
            <h3 class="title">Productos creados</h3>
          </div>
        </div>
        <div class="row">
          <div class="row mt-3 mb-4 text-center">
            <div class="col">
              <button class="btn btn2" @click="view(), try10()">
                Crear producto
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
                  <th class="col-3">Imagen</th>
                  <th class="col-3">Nombre</th>
                  <th class="col-3">Precio</th>
                  <th class="col-3">Opciones</th>
                </tr>
              </thead>
              <tbody>
                <tr class="body" v-for="item in products" :key="item">
                  <td class="text-center">
                    <img
                      :src="item.image_url"
                      style="width: 45px; height: 45px"
                      class="rounded-circle"
                    />
                  </td>
                  <td v-text="item.product_name"></td>
                  <td >$ {{thousandSeparator(item.price)}}</td>
                  <td style="width: 120px">
                    <button
                      type="button"
                      class="btn btn-success me-3"
                      title="Editar"
                      @click="prueba(item, false), view(), try11()"
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
                Eliminar productos
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
                <p>¿Está seguro de eliminar este producto?</p>
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
                @click="productsDelete(item)"
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-success"
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
      <form enctype="multipart/form-data"  @submit.prevent="prueba1">
      <div class="row mt-3 text-center" v-if="manyTries">
        <h3>Crear productos</h3>
      </div>
      <div class="row mt-3 text-center" v-else>
        <h3>Editar datos de productos</h3>
      </div>
      <!-- <form enctype="multipart/form-data"> -->
        <div class="row mt-3">
          <div class="col">
            <label class="form-label">Tipo de producto</label>
            <select
              v-model="state.category_id"
              name="seleccionProducto"
              id="seleccionProducto"
              class="form-select"
              :class="{ 'is-invalid': $v.category_id.$error }"
            >
              <option
                v-for="(item, index) in category"
                v-text="item.type"
                :key="index"
                :value="item.id"
              ></option>
            </select>
            <span
              v-for="error in $v.category_id.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese una categoría") }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Nombre del producto</label>
            <input
              type="text"
              placeholder="Ingresa un nombre"
              class="form-control my-3"
              v-model="state.product_name"
              :class="{ 'is-invalid': $v.product_name.$error }"
            />
            <span
              v-for="error in $v.product_name.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{
                (error.$message = "Por favor ingrese el nombre del producto")
              }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Descripción básica</label>
            <input
              type="text"
              placeholder="Ingresa una descripcíon basica"
              class="form-control my-3"
              v-model="state.short_desc"
              :class="{ 'is-invalid': $v.short_desc.$error }"
            />
            <span
              v-for="error in $v.short_desc.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{
                (error.$message =
                  "Por favor ingrese una descripción básica del producto")
              }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Descripción detallada</label>

            <textarea
              placeholder="Ingresa una descripción detallada "
              class="form-control my-3"
              v-model="state.long_desc"
              :class="{ 'is-invalid': $v.long_desc.$error }"
            ></textarea>
            <span
              v-for="error in $v.long_desc.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{
                (error.$message =
                  "Por favor ingrese una descripción detallada del producto")
              }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Precio</label>
            <input
              type="text"
              placeholder="Ingresa un precio"
              class="form-control my-3"
              v-model="state.price"
              :class="{ 'is-invalid': $v.price.$error }"
            />
            <span
              v-for="error in $v.price.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese el precio del producto") }}
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Imagen</label><br />
            <input type="file" @change="getImage" class="form-control" />
            <span
              v-for="error in $v.image_url.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese una imagen") }}
            </span>
            <div v-if="action" class="mt-3">
              <figure v-if="state.image_url">
                <img
                  :src="imagenM"
                  width="200"
                  height="200"
                  alt="Imagen escogida1"
                />
              </figure>
            </div>
            <div class="mt-3" v-else>
              <figure v-if="state.image_url">
                <img
                  :src="state.image_url"
                  width="200"
                  height="200"
                  alt="Imagen escogida"
                />
              </figure>
            </div>
          </div>
        </div>
        <div class="row">
          <button
            v-if="action"
           
            class="custom-btn btn-9"
            type="submit"
          >
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
    <!-- </form> -->
    </div>
  </div>
</template>
<style scoped>
.btn2{
  background-color:white !important;
  color:black !important;
  border-color: black;
  
}
.btn2:hover{
  background-color: #c9850f !important;
  color: white !important;
  border: none;
  
}
.form-label {
  margin-bottom: 1%;
  margin-top: 1%;
}

.custom-btn {
  width: 100%;
  height: 40px;
  color: var(--blanco);
}
.btn-9 {
  border: none;
  color: #fff;
  background-color: #b20837;
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
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.font{
  background: #b20837;
  color: white;
}
.title {
    color: #b20837;
}
</style>