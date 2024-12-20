const Product = require('./../models/product.model')

const getProduct = async (req, res) => {
    try {
        const AllProducts = await Product.find();
        res.status(200).json({ Data: AllProducts });

    } catch (error) {
        res.status(500).json({ Message: "Internal Server Error" + error })

    }
}

const getProductById = async (req, res) => {
    try {
        let id = req.query.id;
        const ProductById = await Product.findById(id);
        if (!ProductById) {
            return res.status(404).json({ Message: "product not found" });
        }
        res.status(200).json({ Data: ProductById });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server Error" + error })

    }
}

const createProduct = async (req, res) => {
    try {
        const Products = await Product.create(req.body);
        res.status(200).json({ Data: Products });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server Error" + error })
    }
}

const updateProduct = async (req, res) => {
    try {
        let id = req.query.id;
        const Products = await Product.findByIdAndUpdate(id, req.body);
        if (!Products) {
            return res.status(404).json({ Message: "product not found" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ Data: updatedProduct });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server Error" + error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        let id = req.query.id;
        const Products = await Product.findByIdAndDelete(id);
        if (!Products) {
            return res.status(404).json({ Message: "product not found" });
        }
        res.status(200).json({ Message: "Product Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ Message: "Internal Server Error" + error })

    }
}

module.exports = { getProduct, createProduct, updateProduct, getProductById, deleteProduct }