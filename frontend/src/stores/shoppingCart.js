import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
    state: () => ({
        shopping_cart: [],
        // quantity_products: 0,
        total_payment: 0,
        description_orden: [],
        purchase: {},
        detail_purchase:{},
        purchaseDB: [],
        quantity_products: 0,
        // purchase_Id: 0
        // detail_purchaseDB:[]
        
    }),
    getters: {
       getProducts : (state) =>  state.shopping_cart,
       getTotalPayment : (state) => state.total_payment,
       getQuantityProducts:(state) => state.shopping_cart.length,
       getDescriptionOrden: (state) => state.description_orden,
       getQuantity: (state) => state.quantity_products
    },
    actions: {
        addQuantity(quantity) { 
            this.quantity_products = quantity;
            return  this.quantity_products
        },
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
            this.description_orden = this.shopping_cart.map(prod => `${prod.quantity}-${prod.product_name}`)
            return this.description_orden
        },
        registerPurchase(){
              this.purchase =  {
                total_value : this.total_payment
              }
              return this.purchase
        },
        getPurchase(){ 
            const urlData = "https://delivery-production-8572.up.railway.app/api/v1/purchase"
            fetch(urlData)
            .then(resp => resp.json())   
            .then(data => this.purchaseDB.value= data)
            // console.log(this.purchaseDB)   
            return this.purchaseDB
        },
        // getdetailPurchase(){ 
        //     const urlData = "https://delivery-production-8572.up.railway.app/api/v1/detail-purchase"
        //     fetch(urlData)
        //     .then(resp => resp.json())   
        //     .then(data => this.detail_purchaseDB.value= data)
        //     console.log(this.detail_purchaseDB)   
        //     return this.detail_purchaseDB
        // },
        detailPurchase(purchase_Id){
            for (let product of this.shopping_cart) {
                 const {id, quantity,subTotal} = product
                 this.detail_purchase = {purchase_id: purchase_Id,product_id: id,amount: quantity, total: subTotal}
            }
            // console.log("🎅🏻...", this.detail_purchase)
            return this.detail_purchase
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