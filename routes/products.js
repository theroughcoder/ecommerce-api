const express = require("express");
const router = express.Router();
const {createProduct, product, deleteProduct, updateProduct} = require('../controllers/api/product_controller')

// all crud operation for products
router.post('/create', createProduct);
router.get('/', product);
router.delete('/delete/:id', deleteProduct);
router.post('/:id/update_quantity', updateProduct);

module.exports = router;