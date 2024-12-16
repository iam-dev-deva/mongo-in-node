const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter product name"]
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
    }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports=Product;