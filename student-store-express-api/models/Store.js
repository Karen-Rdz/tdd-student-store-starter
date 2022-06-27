const {storage} = require('../data/storage.js')
const products = storage.get('products').value();

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
}

module.exports = Store