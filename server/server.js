import express from "express";
import cors from "cors";
import { AuthRoute } from "./routes/authRoute.js";

const app = express();
const port = 6001;

app.use(cors());
app.use(express.json());

let viewCount = 0

const IncreaseView = (req, res, next) => {
    viewCount++
    next()
}

app.use('/user', AuthRoute)

app.get('/', IncreaseView, (req, res) => {
    try {
        res.status(200).send({viewCount})
    } catch (error) {
        console.log(error.message)
    }
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});