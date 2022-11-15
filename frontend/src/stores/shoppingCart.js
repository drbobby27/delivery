import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
    state: () => ({
        shopping_cart: [],
        quantity_products: 0,
        total_payment: 0,
        description_orden: [],
        purchase: {},
        detail_purchase:{}
        
    }),
    getters: {
       getProducts : (state) =>  state.shopping_cart,
       getTotalPayment : (state) => state.total_payment,
       getQuantityProducts:(state) => state.shopping_cart.length,
       getDescriptionOrden: (state) => state.description_orden
    },
    actions: {
        addCart(product) {
            const existentProduct = this.shopping_cart.find(prod => prod.product_name === product.product_name);
            if (existentProduct){     
                existentProduct.quantity += product.quantity; 
                existentProduct.subTotal += product.subTotal
                return 
            }   
            this.shopping_cart.push(product);
        },
        totalToPay() {  
            let payData = this.shopping_cart.map((prod)=> {return prod.subTotal})
            let pay = payData.reduce((value, num) => value + num,0)  
            this.total_payment = pay
            return  this.total_payment
        },
        descriptionOrden(){
            // this.description_orden = this.shopping_cart.map(prod => prod)
            this.description_orden = this.shopping_cart.map(prod => `${prod.quantity}-${prod.product_name}`)
            return this.description_orden
        },
        registerPurchase(){
              this.purchase =  {
                total_value : this.total_payment
              }
              return this.purchase
        },
        detailPurchase(){
         
        },
        loadShoppingCart() {
            this.shopping_cart = this.shopping_cart;
        },
        clearsCart() {
            this.shopping_cart = [];
            this.total_payment = 0;
        }
    }
})