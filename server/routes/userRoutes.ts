import express from "express";
import { 
    createUserProject, getUserCredits, getUserProject,
    getUserProjects, purchaseCredits, togglePublish
    } 
from "../controllers/userController.js";

import { authenticate } from "../middlewares/auth.js";

const userRouter = express.Router()

userRouter.get("/credits", authenticate,  getUserCredits)
userRouter.post("/project",authenticate, createUserProject)
userRouter.get("/projects/:projectId", authenticate, getUserProject)
userRouter.get("/projects", authenticate, getUserProjects)
userRouter.get("/project/publish-toggle/:projectId", authenticate, togglePublish)
userRouter.post("/purchase-credits", authenticate, purchaseCredits)


export default userRouter