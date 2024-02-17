import Router from 'express'
import {
    getAllSwiftyProducts,
    createSwiftyProduct,
    getOneSwiftyProduct
} from '../controllers/swiftProduct.controller.js'


const router = Router()

router.route('/swiftyProducts')
    .get( getAllSwiftyProducts )
    .post( createSwiftyProduct )

router.route('/swiftyProducts/:id')
    .get( getOneSwiftyProduct )
    .put()
    .delete()

export default router