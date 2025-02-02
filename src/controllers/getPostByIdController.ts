import { Request, Response } from "express";
import { postModel } from "../schema/schema";
import { zodSchema } from "../schema/zodSchema";

const getPostByIdSchema = zodSchema.pick({id:true})

export async function getPostByIdController(req:Request,res:Response):Promise<any>{
    try{
        const parsedQuery = getPostByIdSchema.safeParse(req.params);
        if(!parsedQuery.success){
            return res.status(400).json({
                error:parsedQuery.error.errors.map(err => err.message)
            })
        }
        const post = await postModel.findById(parsedQuery.data.id)
        return res.status(200).json({
           post
        })

    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            "error": "Internal server error"
        })
    }
}