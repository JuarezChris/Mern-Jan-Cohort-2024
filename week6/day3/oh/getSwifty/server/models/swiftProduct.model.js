import {model, Schema} from 'mongoose';

const SwiftyProdSchema = new Schema(
    {
        productName: {
            type: String,
            // required: [true, "Product name is required!"],
            // minlength: [2, "Product name must be at least 1 characters long!"],
            // maxlength: [40, "Product name name must be less than 255 characters long"]
        },
        description: {
            type: String,
        },
        price : {
            type: Number,
        },
        inStock: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);
const swiftyProduct = model("swiftyProduct", SwiftyProdSchema);
export default swiftyProduct;