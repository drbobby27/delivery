<script setup>
import ClientModal from '../../src/module_cart/ClientModal.vue'
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const  shopping_cart = useShoppingCartStore(); 

const  valores = computed(() => shopping_cart.getProducts);

function thousandSeparator(number = 0, decimalsQuantity = 0) {
  return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

</script>

<template>
    <div>
     <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
        <div class="modal-header title">
        <h1 class="modal-title  fs-5" id="exampleModalLabel">Pedido</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
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
                    <tbody v-if="valores.length">
                      <tr class="body" v-for="(item) in valores" :key="item.id">
                        <td>{{item.product_name}}</td>
                        <td>{{item.quantity}}</td>
                        <td><span>$</span>{{thousandSeparator(item.subTotal)}}</td> 
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5" class="text-center justify-content-center">Sin pedidos...</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th id="bordeTable"></th>
                        <th class="bordeB">Total a pagar</th>
                        <th class="bordeB"><span>$</span>{{thousandSeparator(shopping_cart.getTotalPayment)}}</th>
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
/* .modal-dialog {
  background-color: red;
  position: relative;
  z-index: 30;
} */
.backdrop {
    /* --bs-backdrop-zindex: 1050;
    --bs-backdrop-bg: #000;
    --bs-backdrop-opacity: 0.5; */
    position: relative !important;
    /* top: 0;
    left: 0; */
    z-index: 2;
    /* width: 100vw;
    height: 100vh;
    background-color: var(--bs-backdrop-bg); */
}
.table-header {
  /* background-color: #292728; */
  background-color: #c2385f;
  /* opacity: 0.9; */
  font-size: 1rem;
  color: #f0e9cb;
}
.title, .btn {
    background: #b20837;
    font-size: 1.5rem;
    color: #f0e9cb;
}
</style>
    