const express = require('express');
const Store = require('../models/Store');

const router = express.Router()

router.get('/store', function (req, res) {
    const products = Store.allProducts()
    res.send({products});
})

router.get('/store/:productId', function (req, res) {
    const productId = req.params.productId;
    const product = Store.oneProduct(productId);
    res.send({product});
})

router.post('/store', function (req, res) {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;
    const purchase = Store.createPuchase(shoppingCart, user);
    res.status(201).send({purchase})
})

module.exports = router