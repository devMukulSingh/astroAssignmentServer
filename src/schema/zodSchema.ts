import { z } from "zod";


export const zodSchema = z.object({
    title: z.string({
        required_error:"Title is required"
    }).trim().min(1, {
        message: "Title is required"
    }).max(30, {
        message: "Max 30 characters allowed"
    }),
    description: z.string({
        required_error: "Title is required"
    }).trim().min(1, {
        message: "Description is required"
    }).max(500, {
        message: "Max 500 characters allowed"
    }),
    id: z.string({ required_error: 'id is required' }).trim().min(1),
    skip: z.coerce.number({ required_error: "skip is required" }),
})