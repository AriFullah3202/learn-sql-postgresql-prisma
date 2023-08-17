import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.InsertIntoDB);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUsers);

export const UserRoutes = router;
