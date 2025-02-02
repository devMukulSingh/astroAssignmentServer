import mongoose from "mongoose";


export async function connectToDB() {
    try {
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log("connection sucessfull to db")
    }
    catch (e) {
        console.log("Unable to connect to db", e)
        throw new Error("Unable to connect to db")
    }

}
