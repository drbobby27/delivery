import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
    state: () => ({
        shopping_cart: [],
        quantity_products: 0,
        total_payment: 0,
        description_orden: []
        
    }),
    getters: {
       getProducts : (state) =>  state.shopping_cart,
       getTotalPayment : (state) => state.total_payment,
       getQuantityProducts:(state) => state.shopping_cart.length,
    //    descriptionOrden: (state) => state.description_orden
    },
    actions: {
        create(product) {
			this.shopping_cart.push(product)
		},
        findShoppingCart(product) {
            const existentProduct =  this.shopping_cart.find(prod => prod.name === product_name);
            if (existentProduct){     
                existentProduct.quantity += product.quantity; 
                existentProduct.subTotal =  subTotal + this.product.subTotal
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
            this.description_orden = this.shopping_cart.map(prod => prod)
            // this.description_orden = this.shopping_cart.map(prod => `${prod.quantity} - ${prod.name}`)
            return description_orden
        },
        loadShoppingCart() {
            this.shopping_cart = this.shopping_cart;
        },
        clearsCart() {
            // this.shopping_cart = [];
        }
    }
})