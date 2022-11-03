<script setup>
</script>

<template>
    <div v-if="flag1" class="row usuarios m-3  border border-dark border-1  justify-content-center">
                <div class="col-12 col-sm-12 col-lg-6">
                    <div class="row mt-3 text-center ">
                        <h3>Crear usuarios</h3>
                    </div>
                    <div class="row ">
                        <div class="col">
                            <label class="form-label">Nombre</label>
                            <input v-model="forms.user.name" class="form-control" type="text">
                            <span class="error" v-if="error" style="color: red;">Por favor ingrese un nombre</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Usuario</label>
                            <input v-model="forms.user.username" class="form-control" type="text">
                            <span class="error" v-if="error2" style="color: red;">Por favor ingrese un usuario</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Contraseña</label>
                            <input v-model="forms.user.password" class="form-control" type="text">
                            <span class="error2" v-if="error3" style="color: red;">Por favor ingrese una
                                contraseña</span>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            <label class="form-label">Rol</label>
                            <select v-model="forms.user.rolDefault" name="seleccionProducto" id="seleccionProducto"
                                class="form-select  text-center">
                                <option v-for="item in  roles" :key="item">Seleccione</option>
                            </select>
                            <span class="error3" v-if="error4" style="color: red;">Por favor ingrese un rol</span>
                        </div>
                    </div>
                    <div class="row m-3">
                        <div class="col">
                            <button @click="createEmployee()" class="custom-btn btn-9" type="button">Guardar</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-6">
                    <div class="col">
                        <div class="row">
                            <div class="row mt-3 text-center ">
                                <h3>Usuarios creados</h3>
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
                                        <tr class="body" v-for="item in registeredUsers" :key="item">
                                            <td v-text="item.name"></td>
                                            <td v-text="item.rol"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
</template>