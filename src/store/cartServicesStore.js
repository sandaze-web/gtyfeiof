import {makeAutoObservable} from "mobx";

class CartServicesStore {
    cart = []
    times = []
    isShow = true
    constructor() {
        makeAutoObservable(this)
        this.loadFromLocalStorage()
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem('cart')
        if (data) {
            try {
                this.cart = JSON.parse(data)
            } catch (error) {
                console.log(error)
            }
        }
    }
    saveLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    addToCart(service) {
        this.cart.push(service)
        this.saveLocalStorage()
    }
    removeFromCart(service) {
        this.cart = this.cart.filter(item => item.id !== service.id)
        this.saveLocalStorage()
    }
    clearCart() {
        this.cart = []
        this.saveLocalStorage()
    }
    setIShow(show) {
        this.isShow = show
    }

    addTime(time) {
        this.times.push(time)
    }
}

export const cartServicesStore = new CartServicesStore()