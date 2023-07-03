const express =require('express');
const {getProduct,getProducts}=require('../controller/productsController')


const router=express.Router();

router.route('/product').get(getProducts)
router.route('/product/:id').get(getProduct)
module.exports=router;