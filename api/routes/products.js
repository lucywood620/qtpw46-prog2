//import express
const express = require('express');
const router = express.Router();

//handling GET requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

//handling POST requests
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    });
});

//get information about a specific product
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id == 'special') {
        res.status(200).json({
            message: 'you discovered the special ID!',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'you passed an id'
        });
    }
});

//allow changes to a specific product
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    });
});

//delete a specific product
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});

module.exports = router;