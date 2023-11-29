import { productsDao } from "../DAO/factory.js";

async function getProducts() {
    return await productsDao.getProducts();
}

async function getProductById(id) {
    return await productsDao.getProductById(id);
}

async function createProduct(product) {
    return await productsDao.createProduct(product);
}

async function deleteProduct(id) {
    return await productsDao.deleteProduct(id);
}

export default {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
};