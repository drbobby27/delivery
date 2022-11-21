import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orders: [],
        chefs_orders:[],
        employee_orders:[],
        domiciliary_orders: [],
        dataOrder: [],
        dataOrderChef: [],
        dataEmployee : [],
    }),
    getters: {
        getOrders : (state) =>  state.orders,
        getDataOrder : (state) =>  state.dataOrder,
        getDataOrderChef : (state) =>  state.dataOrderChef,
        getChefsOrders : (state) => state.chefs_orders,
        getEmployeeOrders: (state) => state.employee_orders,
        getDomiciliaryOrders: (state) => state.domiciliary_orders,
     },
    actions: {
        // createOrden(orden ) {
		// 	this.orders.push(orden)
        //     this.chefs_orders = this.dataOrder
		// },
        loadOrder(order) {
            this.order = order;
        },
        clearChefsOrders(index,domic) {
            if(index>=0) {
                let [serve] = this.chefs_orders.splice(index,1)
                serve.domiciliary = domic
                this.employee_orders.push(serve)
            }
        },
        clearEmployeeOrders(index) {
            if(index>=0) {
                let [serve] = this.employee_orders.splice(index,1)
                this.domiciliary_orders.push(serve)
            }
        },
        clearDomiciliaryOrders(index) {
            if(index>=0) {
                let [serve] = this.domiciliary_orders.splice(index,1)
            }
        }
    }
})