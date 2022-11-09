<script setup>
import ClientModal from '../../src/module_cart/ClientModal.vue'
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const  shopping_cart = useShoppingCartStore(); 

const  valores = computed(() => shopping_cart.getProducts);

</script>

<template>
    <div>
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
                    <tbody>
                      <tr class="body" v-for="(item) in valores" :key="item.id">
                        <td>{{item.product_name}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{item.subTotal}}</td> 
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th id="bordeTable"></th>
                        <th class="bordeB">Total a pagar</th>
                        <th class="bordeB">{{shopping_cart.getTotalPayment}}</th>
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
           <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Ordenar
           </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <ClientModal/>
   </div>
</template>
<style scoped>
.table-header, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
</style>
    