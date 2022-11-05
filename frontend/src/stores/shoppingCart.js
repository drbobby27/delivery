import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
    state: () => ({
        shopping_cart: []
    }),

    actions: {
        create(product) {
			this.shopping_cart.push(product)
		},
        loadShoppingCart() {
            this.shopping_cart = this.shopping_cart;
        },
        quantityProducts(){
            this.shopping_cart.length;
        },
        clearState() {
            this.shopping_cart = {};
        }
    }
})