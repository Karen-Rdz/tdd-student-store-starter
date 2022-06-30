const {storage} = require('../data/storage.js');
const products = storage.get('products');
const purchases = storage.get('purchases');

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
        let subtotal = 0
        let costsOnCart = []
        let receipt = [`Showing receipt for ${user.name} available at ${user.email}:`]
        shoppingCart.forEach((item) => {
            products.forEach((element) => {
              if (element.id == item.itemId) {
                costsOnCart.push(element.price * item.quantity);
                receipt.push(`${item.quantity} total ${element.name} purchased at a cost of $${element.price.toFixed(2)} 
                for a total cost of $${(element.price * item.quantity).toFixed(2)
                } `)
              }
            });
          });
        costsOnCart.forEach((item) => {
            subtotal += item;
        });
        let tax = subtotal*0.0875
        let total = subtotal+tax
        let date = new Date()
        receipt.push(`Before taxes, the subtotal was: $${subtotal.toFixed(2)}. 
        The taxes were: $${tax.toFixed(2)}. 
        The total comes out: $${total.toFixed(2)}. `)
        const purchase = {
            id: purchases.length+1,
            name: user.name,
            email: user.email,
            order: shoppingCart,
            subtotal: subtotal,
            tax: tax,
            total: total,
            createdAt: date,
            receipt: receipt
        }
        storage.add('purchases', purchase)
        return {purchase};
    }
}

module.exports = Store