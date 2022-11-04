<script setup>
import { onMounted, ref ,computed, watch} from "vue";
import Modal from "./Modal.vue"



let productTypeName = ref("");
let name = ref("");
let description = ref("");
let price = ref("");

let error1 = ref(false);
let error2 = ref(false);
let error3 = ref(false);
let error4 = ref(false);
let error5 = ref(false);

let error6 = ref(false);
let error7 = ref(false);

const productType = ["Hamburguesas", "Perros calientes"];
const products = [
  {
    name: "Manzana",
    price: "1.00",
    description: "Una manzana",
    image: "https://fondosmil.com/fondo/72426.jpg",
    qty: 1,
  },
  {
    name: "Pera",
    price: "2.00",
    description: "Una pera",
    image: "https://fondosmil.com/fondo/72426.jpg",
    qty: 1,
  },
  {
    name: "Naranja",
    price: "3.00",
    description: "Una naranja",
    image: "https://fondosmil.com/fondo/72426.jpg",
    qty: 1,
  },
  {
    name: "Naranja",
    price: "3.00",
    description: "Una naranja",
    image: "https://fondosmil.com/fondo/72426.jpg",
    qty: 1,
  },
  {
    name: "Naranja",
    price: "3.00",
    description: "Una naranja",
    image: "https://fondosmil.com/fondo/72426.jpg",
    qty: 1,
  },
];

//logica para las imagenes del modal

// watch(
//   ()=>productTypeName.value,(value,prevValue)=>{
//     if(productTypeName.value==productType[0]){
//           return
//     }
//     if(productTypeName.value==productType[1]){
//          return
//     }
// }
// )

</script>

<template>
  <div
    class="row usuarios  m-3 justify-content-center"
  >
    <div class="col-12 col-sm-12 col-lg-6">
      <div class="row">
        <div class="row mt-3 mb-4 text-center">
          <h3>Productos creados</h3>
        </div>
      </div>
      <div class="row">
        <div class="table-responsive" style="height: 356px">
          <table
            class="
              table table-bordered
              border-dark
              table-white table-striped table-wrapper-scroll-y
              my-custom-scrollbar
            "
          >
            <thead>
              <tr class="text-center">
                <th class="col-3">Imagen</th>
                <th class="col-3">Nombre</th>
                <th class="col-3">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr class="body" v-for="item in products" :key="item">
                <td class="text-center">
                  <img
                    :src="item.image"
                    style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                </td>
                <td v-text="item.name"></td>
                <td v-text="item.price"></td>
              </tr>
              <tr class="body" v-for="item in products" :key="item">
                <td class="text-center">
                  <img
                    :src="item.image"
                    style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                </td>
                <td v-text="item.name"></td>
                <td v-text="item.price"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-lg-6">
      <div class="row mt-3 text-center">
        <h3>Crear productos</h3>
      </div>

      <div class="row mt-3">
        <div class="col ">
          <label  class="form-label">Tipo de producto</label>
          <select
            v-model="productTypeName"
            name="seleccionProducto"
            id="seleccionProducto"
            class="form-select text-center"
          >
            <option
              v-for="(item, index) in productType"
              v-text="item"
              :key="index"
            ></option>
          </select>
          <span class="error" v-if="error1" style="color: red"
            >Por favor ingrese el tipo de producto</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Nombre del producto</label>
          <input v-model="name" class="form-control" type="text" />
          <span class="error" v-if="error2" style="color: red"
            >Por favor ingrese el nombre del producto</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Descripción del producto</label>
          <input v-model="description" class="form-control" type="text" />
          <span class="error" v-if="error3" style="color: red"
            >Por favor ingrese una descripción del producto</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Precio</label>
          <input v-model="price" class="form-control" type="number" />
          <span class="error" v-if="error4" style="color: red"
            >Por favor ingrese el precio del producto</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label class="form-label">Seleccionar imagen</label>
        </div>
      </div>
      <!--Imagenes-->
      <div class="row mt-1">
        <div class="col">
          <button
            type="button"
            class="btn-8"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Imagenes
          </button>
        </div>
      </div>
      <!--Fin Imagenes -->
      <div class="row">
        <div class="col">
          <span class="error" v-if="error5" style="color: red"
            >Por favor seleccione una imagen</span
          >
        </div>
      </div>
      <div class="row m-1">
        
          <button type="button" class="custom-btn btn-9">Guardar</button>
        
      </div>
    </div>
  </div>
  <Modal :image="products"/>
</template>
<style scoped>

.form-label{
    margin-bottom: 1%;
    margin-top: 1%;
}


.custom-btn{
    width: 100%;
    height: 40px;
    color: var(--blanco);
  
  }
  .btn-9 {
    border: none;
    color: #fff;
    background-color: rgb(255, 115, 0) ;
    margin-top: 2%;
}
.btn-9:hover {
  border: none;
  border-style: solid;
  border-color: var(--negro);
  border-width: 1px;
  background-color:var(--blanco);
  color: var(--negro);

}
.btn-8{
    background-color: grey;
    color:white;
    border: none;
}
.btn-8:hover{
  border: none;
  border-style: solid;
  border-color: var(--negro);
  border-width: 1px;
  background-color:var(--blanco);
  color: var(--negro);
}
</style>