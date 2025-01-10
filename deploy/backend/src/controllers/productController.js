import product from "../models/productModel.js";

export const addProducts = async (req, res) => {
    try {
        const newProduct = new product(req.body);
        await newProduct.save();
        return res
            .status(201)
            .json({ success: true, message: "Product added successfully" });
    } 
    catch (error) {
        console.error("Error", error);
        res.status(500).json({ message: "Server Error" });
    }
};   

export const deleteProduct = async (req, res) => {
    try {
        const productToDelete = await product.findByIdAndDelete(req.params.id);
        
        if (!productToDelete) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error in deleteProduct", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error in getProducts", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const productById = await product.findById(req.params.id);
        
        if (!productById) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(productById);
    } catch (error) {
        console.error("Error in getProductById", error);
        res.status(500).json({ message: "Server Error" });
    }
};