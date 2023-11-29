import usersController from "../controllers/user.controller.js";
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
    usersController.getUsers
);

router.get(
    "/:uid",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    usersController.getUserById
);

router.post(
    "/",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    usersController.createUser
);

router.delete(
    "/:uid",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    usersController.deleteUser
);

router.put(
    "/premium/:uid",
    checkUserAuthenticatedView,
    checkRoles(["admin"]),
    usersController.upgradeDegradeUser
);

export default router;