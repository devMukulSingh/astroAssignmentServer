import { Request, Response } from "express";
import { postModel } from "../schema/schema";
import { zodSchema } from "../schema/zodSchema";

const updatePostSchema = zodSchema.pick({ description: true, title: true })
const paramsSchema = zodSchema.pick({ id: true })

export async function updatePostController(req: Request, res: Response): Promise<any> {
    try {
        const parsedParams = paramsSchema.safeParse(req.params)
        const parsedBody = updatePostSchema.safeParse(req.body);
        if (!parsedBody.success) {
            return res.status(400).json({ error: parsedBody.error?.errors.map(err => err.message) })
        }
        if (!parsedParams.success) {
            return res.status(400).json({ error: parsedParams.error.errors.map(err => err.message) })
        }
        const { description, title } = parsedBody.data
        await postModel.updateOne({
            id: parsedParams.data.id,
            title,
            description
        })
        return res.status(201).json({
            "msg": "Post updated successfully",
        })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({
            "error": "Internal server error"
        })
    }
}