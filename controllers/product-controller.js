const Product = require('../model/Product');

const getProducts = async (req, res, next) => {
    let products = await Product.find();

    if (!products) {
        return res.status(404).json({ message: "No Products available" })
    }
    res.status(200).json({ products })
};

const addProduct = async (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL,
        quantity: req.body.quantity,
        isFeatured: req.body.isFeatured,
    });

    product = await product.save();

    if (!product) {
        return res.status(500).json({ message: "cannot add product some missing value" })
        next();
    }

    //res.status(201).json({message:"Product added successfully"})
    res.status(201).json({ product });
};

const getProductbyID = async (req, res, next) => {
    const productID = req.params.id;

    let product = await Product.findById(productID);
    if (!product) {
        return res.status(404).json({ message: "No Products available" })
    }
    res.status(200).json({ product })

};

const updateProduct = async (req, res, next) => {
    const productID = req.params.id;
    let product = await Product.findByIdAndUpdate(productID, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imgURL,
        quantity: req.body.quantity,
        isFeatured: req.body.isFeatured,
    });

    product = await product.save();
    if (!product) {
        return res.status(500).json({ message: "Cannot save product in data." })
    }
    res.status(200).json({ product });
};

const deleteProduct = async (req, res, next) => {
    const productID = req.params.id;
    let product = await Product.findByIdAndRemove(productID);
    if (!product) {
        return res.status(500).json({ message: "Product data Not found." });
    }
    res.status(200).json({ message: "Product Deleted" });
};

exports.getProducts = getProducts;
exports.addProduct = addProduct;
exports.getProductbyID = getProductbyID;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
