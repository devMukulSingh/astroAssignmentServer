import { Request, Response } from "express";
import { postModel } from "../schema/schema";
import { zodSchema } from "../schema/zodSchema";

const deletePostSchema = zodSchema.pick({id:true})

export async function deletePostController(req:Request,res:Response):Promise<any>{
    try{
        const parsedQuery = deletePostSchema.safeParse(req.params);
        if(!parsedQuery.success){
            return res.status(400).json({
                error:parsedQuery.error.errors.map(err => err.message)
            })
        }
        const { id } = parsedQuery.data;
        await postModel.findByIdAndDelete(id)
        return res.status(200).json({
           "msg":"Post deleted"
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            "error": "Internal server error"
        })
    }
}