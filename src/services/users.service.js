import { usersDao } from "../DAO/factory.js";

async function getUsers() {
    return usersDao.getUsers();
}

async function getUserById(id) {
    return usersDao.getUserById(id);
}

async function createUser(user) {
    return usersDao.createUser(user);
}

async function deleteUser(id) {
    return usersDao.deleteUser(id);
}

async function upgradeDegradeUser(id) {
    return usersDao.upgradeDegradeUser(id);
}

async function getUserByEmail(email) {
    return usersDao.getUserByEmail(email);
}

async function changePassword(id, password) {
    return usersDao.changePassword(id, password);
}

export default {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    upgradeDegradeUser,
    getUserByEmail,
    changePassword,
};