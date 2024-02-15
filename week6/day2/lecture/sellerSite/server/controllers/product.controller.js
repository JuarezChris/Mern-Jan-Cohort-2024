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

async function getOneProduct( req, res) {
    try {
        const foundProduct = await Product.findById( req.params.id )
        res.json(foundProduct)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function createProduct( req, res) {
    try {
        const newProduct = await Product.create(req.body)
        res.json(newProduct)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateProduct(req, res){
    const option = {
        new: true,
        runValidators: true
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, option)
        res.json( updatedProduct )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteProduct(req, res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.json( deleteProduct )
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export {
    getAllProducts, 
    createProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
};
