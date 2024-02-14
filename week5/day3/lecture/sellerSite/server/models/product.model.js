import {model, Schema} from 'mongoose';


const ProductSchema = new Schema(
    {
        productName: {
            type: String,
            // required: [true, "Product name is required!"],
            // minlength: [2, "Product name must be at least 2 characters long!"],
            // maxlength: [255, "Product name must be less than 255 characters long"]
        },
        description: {
            type: String,
            // required: [true, "description is required!"],
            // minlength: [2, "description must be at least 2 characters long!"],
            // maxlength: [255, "description must be less than 255 characters long"]
        },
        price: {
            type: Number,
            // required: [true, "Age is required!"]
        },
        image: {
            type: String,
            // required: [true, "image is required!"],
            // minlength: [2, "image must be at least 2 characters long!"],
            // maxlength: [255, "image must be less than 255 characters long"]
        }
    },
    { timestamps: true }
);


const Product = model("Product", ProductSchema);
export default Product;