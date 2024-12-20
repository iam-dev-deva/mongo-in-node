const express = require('express')
const router = express.Router();
const Product = require('./../controller/product.controller')

//Create Product
router.post('/products', Product.createProduct)

//Update Product
router.put('/products', Product.updateProduct)

//Get All Product
router.get('/products', Product.getProduct)

//Get Product By Id
router.get('/productsById', Product.getProductById)

//Delete Product
router.delete('/products', Product.deleteProduct)

module.exports = router