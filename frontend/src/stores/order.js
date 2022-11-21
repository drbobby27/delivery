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
        //     console.log("this.orders...🌮",this.orders)
        //     console.log(" this.chefs_orders...🌮", this.chefs_orders)
		// },
        // createOrdenChef(orden ) {
		// 	// this.orders.push(orden)
        //     this.chefs_orders = orden
        //     console.log("this.orders...🌮",this.orders)
        //     console.log(" this.chefs_orders...🌮", this.chefs_orders)
		// },
        // created(){
        //     // this.setterLocalStorage(this.DOMICILIARIES_KEY,this.usersRolDomiciliary)
        //     // this.setterLocalStorage(this.CHEFS_KEY,this.usersRolChef)
        //     this.dataOrder = JSON.parse(localStorage.getItem("dbOrder") || null)
        //     this.dataOrderChef= JSON.parse(localStorage.getItem("dbOrderChef") || null)
        //     this.dataEmployee = JSON.parse(localStorage.getItem("dbOrderEmployee") || null)
        //     this.orders
        //     console.log("this.dataOrder",this.dataOrder)
        //     console.log(this.orders)
        // },
        // updateLocalStorage(){
        //     localStorage.setItem("dbOrder", JSON.stringify(this.orders))
        //     localStorage.setItem("dbOrderChef", JSON.stringify(this.orders))
        //     localStorage.setItem("dbOrderEmployee", JSON.stringify(this.employee_orders))
        //     // localStorage.setItem("listDomiciliary", JSON.stringify(dbOrdersDomiciliary))
        //     // localStorage.setItem("dbOrderDomiciliary", JSON.stringify(dbOrderServe))
        // },
        loadOrder(order) {
            this.order = order;
        },
        clearChefsOrders(index,domic) {
            if(index>=0) {
                let [serve] = this.chefs_orders.splice(index,1)
                serve.domiciliary = domic
                this.employee_orders.push(serve)
                console.log(this.employee_orders)
                console.log(this.chefs_orders)
            }
        },
        clearEmployeeOrders(index) {
            if(index>=0) {
                let [serve] = this.employee_orders.splice(index,1)
                this.domiciliary_orders.push(serve)
                console.log(this.employee_orders)
                console.log(this.domiciliary_orders)
            }
        },
        clearDomiciliaryOrders(index) {
            if(index>=0) {
                let [serve] = this.domiciliary_orders.splice(index,1)
            }
        }
    }
})