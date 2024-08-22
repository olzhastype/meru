import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        items: [],
        isLoaded: false,
        basket:[]
    }),
    getters: {},
    actions: {
        async initFetch() {
            fetch('https://dummyjson.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setTimeout(() => {
                        this.items = json.products;
                        this.isLoaded = true;
                    }, 5000);
                });
        },
        addToCard(item){
            this.basket.push(item)
            console.log(this.basket);
            
        }
    }
});
