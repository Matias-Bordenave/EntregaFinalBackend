import userModel from "../models/user.model.js";

export class userDao {
    constructor() {
        this.model = userModel;
    }
    async getUsers() {
        try {
            const users = await this.model.paginate({}, { lean: true });
            return users;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUserById(uid) {
        try {
            const user = await this.model.findById(uid);
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async createUser(user) {
        try {
            const newUser = await this.model.create(user);
            return newUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteUser(uid) {
        try {
            const deletedUser = await this.model.findByIdAndDelete(uid);
            return deletedUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async upgradeDegradeUser(uid) {
        try {
            const user = await this.model.findById(uid);

            if (user.role === "user") {
                user.role = "premium";
            } else if (user.role === "premium") {
                user.role = "user";
            } else {
                throw new Error("Cannot modify role");
            }

            await user.save();
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.model.findOne({ email });
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async changePassword(id, password) {
        try {
            const user = await this.model.findById(id);
            user.password = password;
            await user.save();
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}