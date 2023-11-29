import cartController from "../controllers/cart.controller.js";
import {
    checkUserAuthenticatedView,
    checkRoles,
} from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router.get(
    "/",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    cartController.getCarts
);

router.post("/", cartController.createCart);

router.get(
    "/:cid",
    checkUserAuthenticatedView,
    checkRoles(["user"]),
    cartController.getCartById
);

router.put("/:cid", cartController.emptyCart);

router.delete(
    "/:cid",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    cartController.deleteCart
);

router.put(
    "/:cid/products/:pid",
    checkUserAuthenticatedView,
    checkRoles(["admin", "premium", "user"]),
    cartController.addProductToCart
);

router.delete(
    "/:cid/products/:pid",
    checkUserAuthenticatedView,
    checkRoles(["admin", "premium", "user"]),
    cartController.deleteCartProduct
);

router.post("/:cid/purchase", cartController.purchaseCart);

export default router;