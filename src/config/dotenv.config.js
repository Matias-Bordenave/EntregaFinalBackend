import dotenv from "dotenv";
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({path: path.resolve(__dirname,"../.env")});

console.log(process.env)

export default {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mogoUrl: process.env.MONGO_URL,
    secret: process.env.SECRET,
    adminEmail: process.env.ADMIN_EMAIL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    persistence: process.env.PERSISTENCE,
    nodemailerUser: process.env.NODEMAILER_USER,
    nodemailerPass: process.env.NODEMAILER_PASS,
};