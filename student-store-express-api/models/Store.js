const {storage} = require('../data/storage.js')
const products = storage.get('products');

class Store{
    constructor(){
        this.super();
    }

    static allProducts(){
        return products;
    }

    static oneProduct(productId){
        const findProduct = products.find(element => element.id == productId);
        return findProduct;
    }

    static createPuchase (shoppingCart, user){
        return shoppingCart
    }
}

module.exports = Store