import express from "express";
import { addUser, deleteUser, getAllUser, getUserFromId, updateUser } from "../controller/user.js";
const router = express.Router();

router.get("/all",getAllUser);
router.post("/add" ,addUser);
router.patch('/update' , updateUser);
// router.get("/:userId" , getUserFromId);
router.delete("/:userId" , deleteUser);


export default router;