<script setup>
import { onMounted, ref } from "vue";

let product_name = ref("");
let price = ref("");
let long_desc = ref("");
let short_desc = ref("");
let image_url = ref("");
let category_id = ref("");

const create = ref(false);
const create1 = ref(true);

const category = ref([]);

const products = ref([]);

const idUrl = ref("");

let action = ref(true);

let error1 = ref(false);
let error2 = ref(false);
let error3 = ref(false);
let error4 = ref(false);
let error5 = ref(false);
let error6 = ref(false);

let error7 = ref(false);

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
  if (category_id.value == "") {
    error1.value = true;
  } else {
    error1.value = false;
  }
  if (product_name.value == "") {
    error2.value = true;
  } else {
    error2.value = false;
  }
  if (short_desc.value == "") {
    error3.value = true;
  } else {
    error3.value = false;
  }
  if (long_desc.value == "") {
    error4.value = true;
  } else {
    error4.value = false;
  }
  if (price.value == "") {
    error5.value = true;
  } else {
    error5.value = false;
  }
  if (image_url.value == "") {
    error6.value = true;
  } else {
    error6.value = false;
  }
};

// const getError1 = () => {
//   if (name.value == "") {
//     error7.value = true;
//   } else {
//     error7.value = false;
//   }
// };

const clear = () => {
  category_id.value = "";
  product_name.value = "";
  price.value = "";
  long_desc.value = "";
  short_desc.value = "";
  image_url.value = "";
};
const validation = () => {
  getError();
  if (
    error1.value == true ||
    error2.value == true ||
    error3.value == true ||
    error4.value == true ||
    error5.value == true ||
    error6.value == true
  ) {
  } else {
    sendData();
    clear();
  }
};
const sendData = async () => {
  const formData = new FormData();
  formData.append("product_name", product_name.value);
  formData.append("price", price.value);
  formData.append("long_desc", long_desc.value);
  formData.append("short_desc", short_desc.value);
  formData.append("image_url", image_url.value);
  formData.append("category_id", category_id.value);

  const urlDB = `http://localhost:7000/api/v1/product`;
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
  clear();
  // create.value = false;
  // create1.value = true;
};

const data = async () => {
  const urlData = "http://localhost:7000/api/v1/product";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (products.value = data));
};
const data1 = async () => {
  const urlData = "http://localhost:7000/api/v1/product-category";
  await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (category.value = data));
};

const productsDelete = () => {
  const urlData = `http://localhost:7000/api/v1/product/${idUrl.value}`;
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

const editProducts = () => {

  getError();
  if (error1.value == true || error2.value == true || error3.value == true || error4.value == true || error5.value == true || error6.value == true) {
    getError();
  } else {
    const formData01 = new FormData();
    formData01.append("product_name", product_name.value);
    formData01.append("price", price.value);
    formData01.append("long_desc", long_desc.value);
    formData01.append("short_desc", short_desc.value);
    formData01.append("image_url", image_url.value);
    formData01.append("category_id", category_id.value);

    const urlData = `http://localhost:7000/api/v1/product/${idUrl.value}`;
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
          "Se ha actualizado correctamente el producto",
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
    product_name.value = data.product_name;
    price.value = data.price;
    long_desc.value = data.long_desc;
    short_desc.value = data.short_desc;
    image_url.value = data.image_url;
    category_id.value = data.category_id;
    idUrl.value = data.id;
  }
};
const view = () => {
  create.value = true;
  create1.value = false;
};

//
/////
// const onFileChange = (event) =>{
//       const file = event.target.files[0];
//       url.value = URL.createObjectURL(file);
//     }

//  const onFileChange =(e) =>{
//           url.value = e.target.files[0];
//           console.log(url.value);
//       }

//   const file = ref(null)
//   const rpt = ref(null)

// const handleFileUpload = () => {
//    // debugger;
//    rpt.value=URL.createObjectURL(file)
//     console.log("selected file",file.value.files)
//     console.log(rpt.value);
//     //Upload to server
// }



  const onImageSelected = (event)=>{

    image_url.value = document.getElementById('event')
  }

</script>

<template>
<div class="row usuarios m-3 justify-content-center">
    <div class="col-12 col-sm-12 col-lg-6" v-if="create1">
      <div class="col">
        <div class="row">
          <div class="row mt-1 mb-1 text-center">
            <h3>Productos creados</h3>
          </div>
        </div>
        <div class="row">
          <div class="row mt-3 mb-4 text-center">
            <div class="col">
              <button class="btn btn-outline-success" @click="view()">
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
              <thead>
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
                  <td v-text="item.price"></td>
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
        <div class="row mt-3 text-center">
          <h3>Crear productos</h3>
        </div>

        <div class="row mt-3">
          <div class="col">
            <label class="form-label">Tipo de producto</label>
            <select
              v-model="category_id"
              name="seleccionProducto"
              id="seleccionProducto"
              class="form-select text-center"
            >
              <option
                v-for="(item, index) in category"
                v-text="item.type"
                :key="index"
                :value="item.id"
              ></option>
            </select>
            <span class="error" v-if="error1" style="color: red"
              >Por favor seleccione el tipo de producto</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Nombre del producto</label>
            <input v-model="product_name" class="form-control" type="text" />
            <span class="error" v-if="error2" style="color: red"
              >Por favor ingrese el nombre del producto</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Descripción básica</label>
            <input v-model="short_desc" class="form-control" type="text" />
            <span class="error" v-if="error3" style="color: red"
              >Por favor ingrese la descripción del producto</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Descripción básica</label>
            <input v-model="long_desc" class="form-control" type="text" />
            <span class="error" v-if="error4" style="color: red"
              >Por favor ingrese la descripción del producto</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Precio</label>
            <input v-model="price" class="form-control" type="number" />
            <span class="error" v-if="error5" style="color: red"
              >Por favor ingrese el precio del producto</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label">Imagen</label><br />
            <input type="file" @change="onImageSelected(event)" multiple />
            <span class="error" v-if="error6" style="color: red"
              >Por favor ingrese una imagen</span
            >
            <!-- <div id="preview">
              <img v-if="url" :src="url" />
            </div> -->
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
          @click="editProducts()"
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

.custom-btn {
  width: 100%;
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
.btn-8 {
  background-color: grey;
  color: white;
  border: none;
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
</style>