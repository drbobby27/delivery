import { defineStore } from 'pinia';

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        orders: [],
        chefs_orders:[],
        employee_orders:[],
        domiciliary_orders: [],
    }),
    getters: {
        getOrders : (state) =>  state.orders,
        // getQuantityOrders:(state) => state.orders.length,
        getChefsOrders : (state) => state.chefs_orders,
        getEmployeeOrders: (state) => state.employee_orders,
        getDomiciliaryOrders: (state) => state.domiciliary_orders,
     },
    actions: {
        createOrden(orden ) {
			this.orders.push(orden)
            this.chefs_orders = this.orders
		},
        loadOrder(order) {
            this.order = order;
        },
        clearChefsOrders(index) {
            if(index>=0) {
                let [serve] = this.chefs_orders.splice(index,1)
                // serve.domiciliary = ""
                this.employee_orders.push(serve)
                console.log(this.employee_orders)
                console.log(this.chefs_orders)
            }
        },
        clearEmployeeOrders(index) {
            if(index>=0) {
                let [serve] = this.employee_orders.splice(index,1)
                serve.domiciliary = ""
                this.domiciliary_orders.push(serve)
                console.log(this.employee_orders)
                console.log(this.domiciliary_orders)
            }
        },
        clearDomiciliaryOrders(index) {
            if(index>=0) {
                let [serve] = this.domiciliary_orders.splice(index,1)
                // serve.domiciliary = ""
                // this.Employee_orders.push(serve)
                // console.log(this.Employee_orders)
                // console.log(this.chefs_orders)
            }
        }
    }
})