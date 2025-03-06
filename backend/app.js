import express from "express";
const app = express();
import userRouter from "./router/user.js"
import dotenv from "dotenv";
import { initalizeDatabase } from "./database/postgres/client.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

initalizeDatabase()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get("/test" , (req , res) => {
    res.status(200).json({status : "ok"});
})

app.use("/user" , userRouter);

const port = process.env.PORT;
app.listen(port , () => console.log(`Running on port ${port}`));