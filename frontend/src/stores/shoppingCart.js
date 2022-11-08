import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
    state: () => ({
        shopping_cart: [],
        quantity_products: 0,
        total_payment: 0
    }),
    getters: {
       getProducts : (state) =>  state.shopping_cart,
       getTotalPayment : (state) => state.total_payment
    },
    actions: {
        create(product) {
			this.shopping_cart.push(product)
		},
        findShoppingCart(cart) {
            const existentProduct =  this.shopping_cart.find(prod => prod.name === item.product_name);
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
        loadShoppingCart() {
            this.shopping_cart = this.shopping_cart;
        },
        quantityProducts(){
           this.quantity_products = this.shopping_cart.length;
        },
        clearState() {
            this.shopping_cart = {};
        }
    }
})