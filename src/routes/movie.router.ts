// Packages
import { Router } from "express";

// Controllers
import MovieController from "../controllers/movie.controller";

export const MovieRouter = Router();

MovieRouter.get("/:slug", MovieController.getOne);
MovieRouter.get("", MovieController.get);
