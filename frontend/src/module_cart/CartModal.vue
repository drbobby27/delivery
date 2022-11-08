<script setup>
import ClientModal from '../../src/module_cart/ClientModal.vue'
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const  shopping_cart = useShoppingCartStore(); 
// const  total_payment = useShoppingCartStore(); 
const  valores = computed(() => shopping_cart.getProducts);
// const  total_payment = computed(() => total_payment.getTotalPayment);

// defineProps(['shopping_cart']);
// for(let key in shopping_cart) console.log(key); 

// // el mismo efecto con estos métodos:
// console.log( Object.keys(shopping_cart) ); 
// console.log( Object.values(shopping_cart) ); 
</script>

<template>
     <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <!--Inicio tabla-->
            <div class="row" id="tabla">
              <div class="container pe-3 ps-3">
                <div class="table-responsive">
                  <table class="table table-bordered mt-4 table-strip text-center">
                    <thead class="table table-header">
                      <tr>
                        <th class="col-3 table99">Producto</th>
                        <th class="col-3 table99">Cantidad</th>
                        <th class="col-3 table99">Total</th>
                      </tr>
                    </thead>
                     <!-- v-for="(item, i) in shopping_cart" -->
                      <tr class="body" v-for="(item) in valores" :key="item.id">
                        <td>{{item.product_name}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{item.subTotal}}</td> 
                      </tr>
                    <!-- </tbody> -->
                    <tfoot>
                      <tr>
                        <th id="bordeTable"></th>
                        <th class="bordeB">Total a pagar</th>
                        <!-- <th class="bordeB">{{total_payment}}</th> -->
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!--Fin tabla-->
          </div>
          <div class="modal-footer">
            <button id="closeCar"  type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal99" type="button"
              class="btn  modalsb">Ordenar</button>
            <!-- <ClientModal/> -->
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
.table-header, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
</style>
    