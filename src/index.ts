import express from "express"
import { createPostContoller } from "./controllers/createPostController";
import cors from "cors"
import { BASE_URL_CLIENT } from "./constants/constants";

const app = express();
const PORT = process.env.PORT ||  8000;

app.use(cors({
    origin: [BASE_URL_CLIENT]
}))
app.post('/create-post',createPostContoller)


app.listen(PORT, () => {
    console.log("server is running at PORT",PORT)
})