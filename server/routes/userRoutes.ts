import express from "express";
import { 
    createUserProject, getUserCredits, getUserProject,
    getUserProjects, purchaseCredits, togglePublish
    } 
from "../controllers/userController.ts";

import { authenticate } from "../middlewares/auth.ts";

const userRouter = express.Router()

userRouter.get("/credits", authenticate,  getUserCredits)
userRouter.post("/project",authenticate, createUserProject)
userRouter.get("/project/:projectId", authenticate, getUserProject)
userRouter.get("/projects", authenticate, getUserProjects)
userRouter.get("/publish-toggle/:projectId", authenticate, togglePublish)
userRouter.post("/purchase-credits", authenticate, purchaseCredits)


export default userRouter