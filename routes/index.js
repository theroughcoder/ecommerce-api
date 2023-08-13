const express = require("express");
const router = express.Router();
const products = require('./products')

// router for products 
router.use('/products', products )
module.exports = router;
