import { Router } from "express";
import { createPostContoller } from "../controllers/createPostController";
import { getPostsController } from "../controllers/getPostsController";


const postRouter = Router();

postRouter.post('/create-post',createPostContoller)
postRouter.get('/get-posts',getPostsController)

export default postRouter;