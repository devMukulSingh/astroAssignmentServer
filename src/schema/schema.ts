import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: String,
    description : String,
},{timestamps:true});

export const postModel = mongoose.model('Blog', postSchema);