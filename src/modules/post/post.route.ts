import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();
router.post("/create-post", PostController.insertIntoDB);
router.get("/", PostController.getPosts);
router.patch(":/id", PostController.updatePostById);

export const PostRoutes = router;
