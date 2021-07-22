import express from "express";
import {getPost,createPost,updatePost,deletePost} from "../controllers/postController.js";

let router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/", deletePost);
export default router;