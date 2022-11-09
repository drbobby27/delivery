import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orders: []
    }),

    actions: {
        create(orden ) {
			this.orders.push(orden)
		},
        loadOrder(order) {
            this.order = order;
        },
        clearState() {
            this.order = {};
        }
    }
})