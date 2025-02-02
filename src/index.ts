import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import { BASE_URL_CLIENT } from "./constants/constants";
import { connectToDB } from "./db/db";
import postRouter from "./routes/postRoutes";
dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;

connectToDB()

app.use(cors({
    origin: [BASE_URL_CLIENT]
}))
app.use(express.json())

app.use('/api/v1/post',postRouter)

app.listen(PORT, () => {
    console.log("server is running at PORT", PORT)
})