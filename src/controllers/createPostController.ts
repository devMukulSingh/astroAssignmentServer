import type { Request, Response } from "express";
import { z } from "zod";
import { postModel } from "../schema/schema";
import { zodSchema } from "../schema/zodSchema";

const createPostSchema = zodSchema.pick({description:true,title:true})
export async function createPostContoller(req: Request, res: Response): Promise<any> {
    try{
        const body = req.body;
        const parsedBody = createPostSchema.safeParse(body);
        if(parsedBody.error){
            return res.status(400).json({ error: parsedBody.error?.errors.map(err => err.message) })
        }
        const { description,title } = parsedBody.data
        const doc = await postModel.create({
            title,
            description
        })
        await doc.save();
        return res.status(201).json({
            "msg":"Post created successfully",
            doc
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            "error":"Internal server error"
        })
    }
}