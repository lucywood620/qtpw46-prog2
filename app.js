//importing from express package
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//import product routes and import routes 
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//funnel all requests through middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//prevent course errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorisation'
    );
    if (req.method ==='OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
});

//routes to handle requests
//middleware that forwards requests to products and orders files
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//error handling middleware
//reaching this line means no routes in 'products' or 'orders' file were able to handle the request
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    //forward the error request
    next(error);
});

//handles all errors from anywhere in the application
app.use((error, req, res, next) => {
    //either error code forwarded from above code or 500 error for all other errors
    res.status(error.status || 500);
    res.json({
        error: {
            //passing on error message
            message: error.message
        }
    });
});

//router is exported and can be used in other files
module.exports = app;