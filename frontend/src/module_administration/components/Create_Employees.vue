<script setup>
import {onMounted,ref} from "vue";

let name = ref('') 
let username = ref('')
let password= ref('')
let rol = ref('')


let error1= ref(false)
let error2= ref(false)
let error3= ref(false)
let error4= ref(false)

const roles= ['administrador', 'chef', 'empleado','domiciliario']
const products = [
        {
            name: "Manzana",
            price: "1.00",
            description: "Una manzana",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Pera",
            price: "2.00",
            description: "Una pera",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
        {
            name: "Naranja",
            price: "3.00",
            description: "Una naranja",
            image:"https://fondosmil.com/fondo/72426.jpg",
            qty:1,
        },
    ];

</script>

<template>
    
    <div  class="row usuarios m-3   justify-content-center">
                
                <div class="col-12 col-sm-12 col-lg-6 ">
                    <div class="col">
                        <div class="row">
                            <div class="row mt-3 mb-4  text-center ">
                                <h3>Empleados creados</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="table-responsive">
                                <table class="table table-bordered border-dark table-white table-striped">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="col-3">Nombre</th>
                                            <th class="col-3">Rol</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="body" v-for="item in products" :key="item">
                                            <td v-text="item.name"></td>
                                            <td v-text="item.price"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-6">
                    <div class="row mt-3 text-center ">
                        <h3>Crear empleados</h3>
                    </div>
                    <div class="row ">
                        <div class="col mt-3">
                            <label class="form-label">Nombre</label>
                            <input v-model="name" class="form-control" type="text">
                            <span class="error" v-if="error1" style="color: red;">Por favor ingrese un nombre</span>
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col">
                            <label class="form-label">Usuario</label>
                            <input v-model="username.value" class="form-control" type="text">
                            <span class="error" v-if="error2" style="color: red;">Por favor ingrese un usuario</span>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="col">
                            <label class="form-label">Contraseña</label>
                            <input v-model="password" class="form-control" type="text">
                            <span class="error2" v-if="error3" style="color: red;">Por favor ingrese una
                                contraseña</span>
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div>
                            <label class="form-label">Rol</label>
                            <select v-model="rol" name="seleccionProducto" id="seleccionProducto"
                                class="form-select  text-center">
                                <option v-for="item in  roles" :key="item">Seleccione</option>
                            </select>
                            <span class="error3" v-if="error4" style="color: red;">Por favor ingrese un rol</span>
                        </div>
                    </div>
                    <div class="row m-1 ">
                        
                            <button  class="custom-btn btn-9" type="button">Guardar</button>
                        
                    </div>
                </div>
            </div>
</template>
<style scoped>
.form-label{
    margin-bottom: 1%;
    margin-top: 1%;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Source+Sans+Pro:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto:ital,wght@0,300;1,300&display=swap');
:root{
    --dorado:rgb(212, 175, 55);
    --negro:rgb(0, 0, 0);
    --blanco:#fff;
}


.usuarios{
    color: var(--negro);
   
}
.custom-btn{
    
    align-items: center;
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

</style>