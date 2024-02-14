import Product from '../models/product.model.js';


async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export {
    getAllProducts
};
