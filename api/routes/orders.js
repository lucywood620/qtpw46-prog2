//import express
const express = require('express');
const router = express.Router();

//get list of all orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'orders were fetched'
    });
});

//create a new order
//status 201 - successful and created
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'order was created',
        order: order
    });
});

//getting a specific order by Id
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order details',
        orderId: req.params.orderId
    });
});

//delete a specific order by Id
router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;