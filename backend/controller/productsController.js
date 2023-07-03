const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')



const getProducts =asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})


const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const productDetails = await Product.findById(id);
    if (productDetails) {
        res.json(productDetails)
    } else {
        res.status(404).json({ massage: "product not found" })
    }
})

module.exports ={getProduct,getProducts};