import express from "express";
const app = express();
import userRouter from "./router/user.js"
import dotenv from "dotenv";
import { initalizeDatabase } from "./database/postgres/client.js";
import cors from "cors";
import bodyParser from "body-parser";
import os from "os"
import { migration } from "./migration.js";

dotenv.config();
await initalizeDatabase()
await migration();
function getIp() {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const networkInterface = networkInterfaces[interfaceName];
        for (const address of networkInterface) {
            if (address.family === 'IPv4' && !address.internal) {
                return address.address
            }
        }
    }
    return "could not find ip";
}
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/test" , (req , res) => {
    res.status(200).json({status : "ok" , ip : getIp()});
})

app.use("/user" , userRouter);

const port = process.env.PORT;
app.listen(port , () => console.log(`Running on port ${port}`));