import Router from 'express'
import {
    getAllSwiftyProducts,
    createSwiftyProduct
} from '../controllers/swiftProduct.controller.js'


const router = Router()

router.route('/swiftyProducts')
    .get( getAllSwiftyProducts )
    .post( createSwiftyProduct )

router.route('/swiftyProducts/:id')
    .get()
    .put()
    .delete()

export default router