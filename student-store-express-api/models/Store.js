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
        // Try the function on Shopping Cart (create an array and them sum their elements)
        const subtotal = 0
        for (let index; index < shoppingCart.length; index++){
            const item = shoppingCart[index]
            const product = products.find((element) => element[index].id == item.itemId);
            subtotal += product.price*item.quantity;
        }
        return subtotal;
    }
}

module.exports = Store