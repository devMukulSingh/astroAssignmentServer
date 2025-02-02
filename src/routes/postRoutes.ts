import { Router } from "express";
import { createPostContoller } from "../controllers/createPostController";
import { getPostsController } from "../controllers/getPostsController";
import { getPostByIdController } from "../controllers/getPostByIdController";
import { updatePostController } from "../controllers/updatePostController";
import { deletePostController } from "../controllers/deletePostController";


const postRouter = Router();

postRouter.get('/posts',getPostsController)
postRouter.get('/posts/:id',getPostByIdController)
postRouter.post('/posts',createPostContoller)
postRouter.put('/posts/:id',updatePostController);
postRouter.delete('/posts/:id',deletePostController);

export default postRouter;