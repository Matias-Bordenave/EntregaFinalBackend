import { getUserDto } from "../DAO/dto/user.dto.js";
import usersService from "../services/users.service.js";

export default class userController {
    static getUsers = async (req, res) => {
        try {
            const users = await usersService.getUsers();
            const newUsersData = users.map((user) => new getUserDto(user));
            res.json({ status: "success", payload: newUsersData });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static getUserById = async (req, res) => {
        try {
            const { uid } = req.params;
            const user = await usersService.getUserById(uid);
            const newUserData = new getUserDto(user);
            res.json({ status: "success", payload: newUserData });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static createUser = async (req, res) => {
        try {
            const user = await usersService.createUser(req.body);
            res.json({ status: "success", payload: user });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static deleteUser = async (req, res) => {
        try {
            const { uid } = req.params;
            const deletedUser = await usersService.deleteUser(uid);
            res.json({ status: "success", payload: deletedUser });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static upgradeDegradeUser = async (req, res) => {
        try {
            const { uid } = req.params;
            const updatedUser = await usersService.upgradeDegradeUser(uid);
            res.json({ status: "success", payload: updatedUser });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static getUserByEmail = async (req, res) => {
        try {
            const { email } = req.params;
            const user = await usersService.getUserByEmail(email);
            const newUserData = new getUserDto(user);
            res.json({ status: "success", payload: newUserData });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };

    static changePassword = async (req, res) => {
        try {
            const { uid } = req.params;
            const { password } = req.body;
            const updatedUser = await usersService.changePassword(uid, password);
            res.json({ status: "success", payload: updatedUser });
        } catch (err) {
            console.error(err);
            res.json({ status: "error", message: "Internal Server Error" });
        }
    };
}