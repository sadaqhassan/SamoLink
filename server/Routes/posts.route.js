import { Router } from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { getPostsApi, postApi } from "../Controllers/posts.controller.js";

const posts = Router();

posts.post('/post',isAuth,postApi);
posts.get('/get-posts',isAuth,getPostsApi);
// post.get('/get-post',isAuth,getpost);

export const postRoute = posts;