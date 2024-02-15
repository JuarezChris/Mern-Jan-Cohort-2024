import {Router} from 'express'
import {getAllProducts, createProduct, getOneProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js'

const router = Router()

router.route("/products")
    .get( getAllProducts )
    .post( createProduct )

router.route("/product/:id")
    .get( getOneProduct )
    .put( updateProduct )
    .delete( deleteProduct )


export default router