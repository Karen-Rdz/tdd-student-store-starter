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

    static createPuchase (shoppingCart, user, id){
        let subtotal = 0
        let costsOnCart = []
        shoppingCart.forEach((item) => {
            products.forEach((element) => {
              if (element.id == item.itemId) {
                costsOnCart.push(element.price * item.quantity);
              }
            });
          });
        costsOnCart.forEach((item) => {
            subtotal += item;
        });
        let tax = subtotal*0.0875
        let total = subtotal+tax
        let date = new Date()
        id += 1;
        const purchase = {
            id: id,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            subtotal: subtotal,
            tax: tax,
            total: total,
            createdAt: date,
        }
        return {purchase};
    }
}

module.exports = Store