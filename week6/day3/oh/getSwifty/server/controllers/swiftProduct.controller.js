import swiftyProduct from '../models/swiftProduct.model.js'


async function getAllSwiftyProducts(req, res) {
    try {
        const swiftyProducts = await swiftyProduct.find();
        res.json(swiftyProducts);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function createSwiftyProduct(req, res) {
    try {
        const newSwiftyProduct = await swiftyProduct.create(req.body);
        res.json(newSwiftyProduct);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getOneSwiftyProduct(req, res) {
    console.log(req.params.id)
    try {
        const OneSwiftyProduct = await swiftyProduct.findById(req.params.id);
        res.json(OneSwiftyProduct);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}



export {
    getAllSwiftyProducts,
    createSwiftyProduct,
    getOneSwiftyProduct
}