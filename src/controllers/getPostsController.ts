import { Request, Response } from "express";
import { postModel } from "../schema/schema";
import { z } from "zod";
import { zodSchema } from "../schema/zodSchema";

const getPostsSchema = zodSchema.pick({ skip: true })

export async function getPostsController(req: Request, res: Response): Promise<any> {
    try {
        const parsedQuery = getPostsSchema.safeParse(req.query);
        if (!parsedQuery.success) {
            return res.status(400).json({
                error: parsedQuery.error.errors.map(err => err.message)
            })
        }
        const { skip } = parsedQuery.data;
        const posts = await postModel.find({}, null, { skip, limit: 10 }).exec()
        const totalPosts = await postModel.countDocuments();
        return res.status(200).json({
            posts,
            totalPosts
        })

    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            "error": "Internal server error"
        })
    }
}