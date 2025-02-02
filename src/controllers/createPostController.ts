import type { Request, Response } from "express";



export async function createPostContoller(req:Request,res:Response) : Promise<any>{
    return res.json("hel;lo").status(201)
}