<script setup>
import { useShoppingCartStore } from '../../stores/shoppingCart';
import CartModal from '../../module_cart/CartModal.vue'
import {computed} from 'vue'

const  shopping = useShoppingCartStore(); 
const  leng = computed(() => shopping.getQuantityProducts);


</script>
<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-main">
            <div class="container-fluid">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img src="https://img.icons8.com/emoji/48/null/taco-emoji.png"/>
                    <span class="logo">Food App</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#b08338" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="#b08338" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Hamburguesas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Perros calientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="javascript:void(0)">Iniciar Sesión</a>
                        </li>
                        <li class="nav-item">
                            <a  id="car" class=" nav-link btn" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
                                <!-- <span class="px-2">0</span> -->
                                <span class="position-absolute top-50  right-4 translate-middle badge rounded-pill">{{leng}}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
                                </svg>
                            </a>
                        </li>
                        <CartModal/>
                        <!-- <CartModal :products="shopping_cart"/> -->
                    </ul>
                </div>
            </div>
        </nav>  
    </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

.navbar-brand{
    color: #f0e9cb;
}
 .navbar-main {
    background-color: #292728;
    color: #f0e9cb;
 }
 .navbar-toggler {
    border: none;
 }
 .navbar-toggler{
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
    font-family: 'Luckiest Guy', cursive;
    font-size: 1.5rem;
}
@media (min-width: 481px) {
    .nav-link{
        width: 90%;
        margin: 2px 28px;
        font-size: 0.8rem;
    }
 }
 @media (min-width: 768px) {
    .nav-link{
        width: 90%;
        margin: 2px 34px;
        font-size: 0.9rem;
    }
 }
@media (min-width: 1023px) {
    .navbar-collapse {
        width: 80%;
        flex-basis: 0%;
        flex-grow: 0;
        align-items: flex-end;
    }
    .nav-link{
        width: 100%;
        margin: 5px 40px;
    }
    .nav-link {
        font-size: 1.4rem;
    }
 
    .logo {
        font-size: 2.3rem;
    }
 }
 
</style>