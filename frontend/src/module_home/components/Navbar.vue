<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart';
import CartModal from '../../module_cart/CartModal.vue'
import {computed} from 'vue'

const  shopping = useShoppingCartStore(); 
const  leng = computed(() => shopping.getQuantityProducts);


</script>
<template>
    <header>
      <Login/>
        <nav class="navbar navbar-expand-sm navbar-main">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img class="align-top" src="https://img.icons8.com/emoji/48/null/taco-emoji.png"/>
                    <span class="logo">Food App</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#b08338" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="#b08338" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#burger">Hamburguesas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#hotdog">Perros calientes</a>
                        </li>
                        <li class="nav-item">
                            <a  data-bs-toggle="modal" data-bs-target="#exampleModal1"  class="nav-link" >Iniciar Sesión</a>
                        </li>
                        <li class="nav-item">
                            <a id="car" class=" nav-link btn" type="button" data-bs-toggle="modal" data-bs-target="#cartModal" v-if="leng>=0">
                                <span class="badge rounded-pill badge bg-light text-black">{{leng}}</span>
                                <!-- <span class="px-2">0</span> -->
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                                </svg>
                            </a>
                            <a id="car" class=" nav-link btn" type="button" data-bs-toggle="modal" data-bs-target="#cartModal" v-else>
                              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
                                  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
                              </svg>
                            </a>
                        </li>
                        <CartModal/>
                    </ul>
                </div>
            </div>
        </nav>  
    </header>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap");
/* .navbar{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0
} */
.navbar-brand {
  color: #f0e9cb;
}
.navbar-main {
  background-color: #292728;
  color: #f0e9cb;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler {
  border: none;
}
.navbar-toggler:focus {
  box-shadow: 0 0 0;
}
.navbar-toggler-icon {
  color: #f0e9cb;
}
.nav-link {
  color: #f0e9cb;
  font-size: 1.3rem;
}
.nav-link:hover {
  color: #b08338;
}
.logo {
  color: #b20837;
  font-family: "Luckiest Guy", cursive;
  font-size: 1.6rem;
}
.bi {
  /* position: relative;
  left: -10px; */
  /* z-index: 1; */
}  
.btn {
  text-align: start;
  position: relative;
  left: -19px;
  /* position: absolute; */
  z-index: 1;
}
@media (min-width: 481px) {
  .nav-link {
    width: 90%;
    margin: 2px 28px;
    font-size: 0.8rem;
  }
}
@media (min-width: 576px) {
  .navbar-collapse {
    flex-grow: 0;
    align-items: flex-end;
  }
  .nav-link {
    width: 100%;
    margin: 2px 0px;
    font-size: 0.7rem;
  }
  .bi {
  top: 1px;
}  
   .logo {
    font-size: 1.4rem;
  }
  .navbar-expand-sm {
    flex-wrap: nowrap;
    /* justify-content: flex-start; */
  }
}
@media (min-width: 768px) {
  .navbar-collapse {
    flex-grow: 0;
    align-items: flex-end;
  }
  .nav-link {
    width: 100%;
    margin: 5px 1px;
    font-size: 1.2rem;
  }
}
@media (min-width: 1023px) {
  .nav-link {
    width: 100%;
    margin: 5px 10px;
    font-size: 1.4rem;
  }
 
  .logo {
    font-size: 2.3rem;
  }
} 
</style>