<script setup>
defineProps({
    image: {
        type: String,
        default: 10,
        required:true,
    },
  });
</script>
<template>
    <div class="modal fade justify-content-center " id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body justify-content-center">
                            <div class="row  align-items-center">
                                <h1 class="text-center title">Elegir imagen de su producto</h1>

                                <div class="col-sm-12 col-lg-5 col-xs-12 m-3  justify-content-center"
                                    v-for="item in image" :key="item"> 
                                    <div class="card" style="width: 18rem; margin:0px 45px;">
                                        <div :class="optionImage == item? 'back-red' : 'back-blue'">
                                            <img :src="item.image" class="card-img-top" alt="...">
                                        </div>
                                            <button  class="btn-8 ">Elegir</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button   data-bs-dismiss="modal" type="button" class="custom-btn btn-9">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<style scoped>
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
</style>