import express, {Request, Response} from'express';
import config from './config/config.js';
import cors from 'cors';
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import userRouter from './routes/userRoutes.js';
import projectRouter from './routes/projectRoutes.js';
import { stripeWebhook } from './controllers/webhookController.js';

const app = express();

const corsOptions = {
    origin : config.TRUSTED_ORIGINS?.split(",") || [],
    credentials: true
}

app.use(cors(corsOptions))
app.post("/api/stripe", express.raw({ type: 'application/json' }), stripeWebhook)

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json({limit: "50mb"}));

app.get("/", (req: Request, res:Response)=> {

    res.send("Server is live!")
});

app.use("/user", userRouter);
app.use("/project", projectRouter);


app.listen(config.PORT, ()=> {

    console.log(`Server is running on port ${config.PORT}`)

})