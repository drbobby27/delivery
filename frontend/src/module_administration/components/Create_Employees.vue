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
    
    <div  class="row usuarios m-3  border border-dark border-1  justify-content-center">
                
                <div class="col-12 col-sm-12 col-lg-6">
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
                        <h3>Crear Empleados</h3>
                    </div>
                    <div class="row ">
                        <div class="col">
                            <label class="form-label">Nombre</label>
                            <input v-model="name.value" class="form-control" type="text">
                            <span class="error" v-if="error1" style="color: red;">Por favor ingrese un nombre</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Usuario</label>
                            <input v-model="username.value" class="form-control" type="text">
                            <span class="error" v-if="error2" style="color: red;">Por favor ingrese un usuario</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Contraseña</label>
                            <input v-model="password" class="form-control" type="text">
                            <span class="error2" v-if="error3" style="color: red;">Por favor ingrese una
                                contraseña</span>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            <label class="form-label">Rol</label>
                            <select v-model="rol" name="seleccionProducto" id="seleccionProducto"
                                class="form-select  text-center">
                                <option v-for="item in  roles" :key="item">Seleccione</option>
                            </select>
                            <span class="error3" v-if="error4" style="color: red;">Por favor ingrese un rol</span>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col">
                            <button  class="custom-btn btn-9" type="button">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Source+Sans+Pro:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Roboto:ital,wght@0,300;1,300&display=swap');
:root{
    --dorado:rgb(212, 175, 55);
    --negro:rgb(0, 0, 0);
    --blanco:#fff;
}
body{
    
    margin-bottom: 0;
    background-color: #f2f5f7;

    
}
#app{
    width: 100%;
  
    
}
.select select{
  width: 70%;
  margin-left: 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 11px;
  border-color: var(--negro);
}
.usuarios{
    color: var(--negro);
   
}
.modal .modal-dialog .modal-content .modal-body .card img{
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 150px;
}
.custom-btn{
    width: 100%;
    height: 40px;
    color: var(--blanco);
  
  }
  .btn-9 {
  border: none;
  background-color: var(--dorado);
}
.btn-9:hover {
  border-style: solid;
  border-color: var(--negro);
  border-width: 1px;
  background-color:var(--blanco);
  color: var(--negro);

}
.btn-8{
    background-color: grey;
    color:var(--blanco);
    border: none;
}
.btn-8:hover{
    background-color:var(--dorado);
    color:var(--negro);
}
.container .title{
  margin-left: 10px;
  color: var(--dorado);
  font-family: 'Roboto', sans-serif;
} 
.container .title2{
  margin-left: 0px;
  color: var(--dorado);
  font-family: 'Roboto', sans-serif;
} 
#tabla thead  th{
  color: var(--negro);
  font-size: 150%;
  border-right-style: groove;
}
.btn-89{
  background-color: var(--dorado);
  color:var(--blanco);
  border: none;
}
.btn-89:hover{
  background-color:var(--blanco);
  color:var(--negro);
  border: 1px solid var(--negro);
}
#bordeTable{
  border-bottom:1px solid rgb(255, 255, 255);
  border-left:1px solid rgb(255, 255, 255);
}
.open {
  font-size: 2rem;
  color: var(--negro); 
  
}
#principalContainer{
  background-color: rgb(255, 255, 255)!important;
  border-color: white!important;
}

#exit{
  margin-top: 15px;
  margin-right: 0px;
}
.back-red{		
  border: 5px solid var(--dorado);
}

</style>