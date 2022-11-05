import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        order: []
    }),

    actions: {
        create(shopping_cart ) {
			this.order.push(shopping_cart )
		},
        loadOrder(order) {
            this.order = order;
        },
        clearState() {
            this.order = {};
        }
    }
})