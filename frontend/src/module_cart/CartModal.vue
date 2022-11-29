<script setup>
import ClientModal from '../../src/module_cart/ClientModal.vue'
import { useShoppingCartStore } from '../stores/shoppingCart';
import {computed} from 'vue'

const  shopping_cart = useShoppingCartStore(); 

const  valores = computed(() => shopping_cart.getProducts);

function thousandSeparator(number = 0, decimalsQuantity = 0) {
  return Number(number).toFixed(decimalsQuantity).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function clever(index, item){
  console.log(index)
   shopping_cart.cleverShopping(index, item);
  //   message(
  //     "center",
  //     "Actividad completada",
  //     "Se ha elimino correctamente el producto",
  //     1500
  //   );
  }

</script>

<template>
    <div>
     <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl w-50">
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
                        <th class="col-3 table">Producto</th>
                        <th class="col-3 table">Cantidad</th>
                        <th class="col-3 table">Total</th>
                        <th class="col-3 table"></th>
                      </tr>
                    </thead>
                    <tbody v-if="valores.length">
                      <tr class="body" v-for="(item,i) in valores" :key="item.id">
                        <td>{{item.product_name}}</td>
                        <td>{{item.quantity}}</td>
                        <td><span>$</span>{{thousandSeparator(item.subTotal)}}</td> 
                        <td>
                          <button id="closeCar" @click="clever(i, item)" type="button" class="btn-secondary" data-bs-dismiss="modal">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                          </button>
                        </td> 
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5" class="text-center justify-content-center">Sin pedidos...</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th class="bordeB" colspan="2">Total a pagar</th>
                        <th class="bordeB" colspan="2"><span>$</span>{{thousandSeparator(shopping_cart.getTotalPayment)}}</th>
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
.btn-secondary {
  border: none;
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
.table>:not(caption)>*>* {
    padding: .5rem 2rem;

}
</style>
    