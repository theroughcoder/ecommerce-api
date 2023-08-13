const Product = require("../../models/product_schema");


// this is used for creating products
module.exports.createProduct = async function (req, res) {
    try {
        const product = {
            name: req.body.name,
            quantity: req.body.quantity,
        }
        const result = await Product.create(product);
        
        res.status(200).json({data : result});

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// this is used for fetching all products
module.exports.product = async function (req, res) {
    
    try {
        
        const products = await Product.find({});
        res.status(200).json({data : {products: products} });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// this is used for deleting products
module.exports.deleteProduct = async function (req, res) {
    const id = req.params.id;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product Deleted"});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// this is used for updating products
module.exports.updateProduct = async function (req, res) {
    const id = req.params.id;
     const num = req.query.number;
    try {
        await Product.findByIdAndUpdate(id,  { $inc: { quantity: num } });
        const product = await Product.findById(id);
        res.status(200).json({product ,message: "Updated Successfully"});
        
    } catch (error) {

        res.status(500).json({ message: error.message });
    }
}
