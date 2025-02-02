import { Request, Response } from "express";
import { postModel } from "../schema/schema";
import { z } from "zod";

const getPostsSchema  = z.object({
    skip:z.coerce.number({required_error:"skip is required"}),
})

export async function getPostsController(req:Request,res:Response):Promise<any>{
    try{
        const parsedQuery = getPostsSchema.safeParse(req.query);
        if(!parsedQuery.success){
            return res.status(400).json({
                error:parsedQuery.error.errors.map(err => err.message)
            })
        }
        const { skip } = parsedQuery.data;
        const posts = await postModel.find({},null,{skip,limit:10}).exec()
        return res.status(200).json({
           posts
        })

    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            "error": "Internal server error"
        })
    }
}