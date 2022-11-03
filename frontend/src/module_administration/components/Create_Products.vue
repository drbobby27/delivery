<script setup>

</script>

<template>
    <div v-if="flag2" class="row usuarios  border border-dark border-2 m-3  justify-content-center">
                <div class="col-12 col-sm-12 col-lg-6">
                    <div class="row mt-3 text-center ">
                        <h3>Crear productos</h3>
                    </div>

                    <div class="row">
                        <div class="col">
                            <label>Tipo de producto</label>
                            <select v-model="product" name="seleccionProducto" id="seleccionProducto"
                                class="form-select text-center">
                                <option v-for="item in productType"  :key="item">Seleccione</option>
                            </select>
                            <span class="error" v-if="error5" style="color: red;">Por favor ingrese el tipo de
                                producto</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Nombre del producto</label>
                            <input v-model="forms.product.name" class="form-control" type="text">
                            <span class="error" v-if="error6" style="color: red;">Por favor ingrese el nombre del
                                producto</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Descripción del producto</label>
                            <input v-model="forms.product.description" class="form-control" type="text">
                            <span class="error" v-if="error7" style="color: red;">Por favor ingrese una descripción del
                                producto</span>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Precio</label>
                            <input v-model="forms.product.price" class="form-control" type="number">
                            <span class="error" v-if="error8" style="color: red;">Por favor ingrese el precio del
                                producto</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Seleccionar imagen</label>
                        </div>
                    </div>
                    <!--Imagenes Hamburguesas-->
                    <div v-if="flag3" class="row mt-1">
                        <div class="col">
                            <button type="button" class="btn-8" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Imagenes
                            </button>
                        </div>
                    </div>
                    <!--Imagenes Perritos-->
                    <div v-if="flag4" class="row mt-1">
                        <div class="col">
                            <button type="button" class="btn-8" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                Imagenes
                            </button>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="error" v-if="error9" style="color: red;">Por favor seleccione una imagen</span>
                        </div>
                    </div>
                    <div class="row m-3">

                        <div class="col">
                            <button @click="createProduct()" type="button" class="custom-btn btn-9">Guardar</button>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-sm-12 col-lg-6">

                    <div class="row">
                        <div class="row mt-3 text-center ">
                            <h3>Productos creados</h3>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="table-responsive" style="height: 356px;">
                            <table
                                class="table table-bordered border-dark table-white table-striped table-wrapper-scroll-y my-custom-scrollbar">
                                <thead>
                                    <tr class="text-center">
                                        <th class="col-3">Imagen</th>
                                        <th class="col-3">Nombre</th>
                                        <th class="col-3">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="body" v-for="item in productsParsed.burgers" :key="item">
                                        <td class="text-center"><img :src="item.image" style="width: 45px;height: 45px;"
                                                class="rounded-circle"></td>
                                        <td v-text="item.name"></td>
                                        <td v-text="item.price"></td>
                                    </tr>
                                    <tr class="body" v-for="item in productsParsed.hot_dogs" :key="item">
                                        <td class="text-center"><img :src="item.image" style="width: 45px;height: 45px;"
                                                class="rounded-circle"></td>
                                        <td v-text="item.name"></td>
                                        <td v-text="item.price"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

            </div>
</template>