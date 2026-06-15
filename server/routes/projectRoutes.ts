import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { deleteProject, getProjectById, getProjectPreview, getPublishedProjects, makeRevision, rollbackToVersion, saveProjectCode } from '../controllers/projectController.js';
import { getUserProject } from '../controllers/userController.js';

const projectRouter = express.Router()

projectRouter.post("/revision/:projectId", authenticate, makeRevision)
projectRouter.put("save/:projectId", authenticate, saveProjectCode)
projectRouter.get("/project/rollback/:projectId/:versionId", authenticate, rollbackToVersion)
projectRouter.delete("/:projectId", authenticate, deleteProject)
projectRouter.get("/preview/:projectId", authenticate, getProjectPreview)
projectRouter.get("/published", getPublishedProjects)
projectRouter.get("/published/:projectId", getProjectById)

export default projectRouter
