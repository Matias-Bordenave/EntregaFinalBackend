import productsService from "../services/products.service.js";

const checkUserAuthenticatedView = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.send("Not authorized");
    }
};

const showAuthView = (req, res, next) => {
    if (req.user) {
        res.redirect("/profile");
    } else {
        next();
    }
};

const checkRoles = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            return res.send(`Not authorized`);
        } else {
            next();
        }
    };
};

const loadProduct = async (req, res, next) => {
    try {
        const productId = req.params.pid;

        const product = await productsService.getProductById(productId);

        if (product) {
            req.product = product;
            next();
        }
    } catch (error) {
        return res.send(`Product not found`);
    }
};

const checkOwner = (req, res, next) => {
    if (req.user.email !== req.product.owner) {
        return res.send(`Not authorized`);
    } else {
        next();
    }
};

export {
    checkUserAuthenticatedView,
    showAuthView,
    checkRoles,
    loadProduct,
    checkOwner,
};