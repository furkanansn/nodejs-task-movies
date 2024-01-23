// Packages
import { Request, Response, Router } from "express";

// Util
import config from "../config";

export const InfoRouter = Router();

InfoRouter.get("/", (req: Request, res: Response) => {
  res.json({
    environment: config.environment,
    name: "Movie FA API",
  });
});
