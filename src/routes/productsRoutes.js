const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get(
    '/get/all',
    (req, res) => productController.getProductAllCallback(req, res)
)
router.get(
    '/get/id/:id',
    (req, res) => productController.getProductByIdCallback(req, res)
)
router.post(
    '/create',
    (req, res) => productController.createProductCallback(req, res)
)
router.put(
    '/update/id/:id',
    (req, res) => productController.updateProductCallback(req, res)
)
router.delete(
    '/delete/id/:id',
    (req, res) => productController.deleteProductCallback(req, res)
)


module.exports = router
