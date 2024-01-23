// Packages
import { Request, Response } from "express";

// Models
import { GetMovie, GetOneMovie } from "../dao/movie.dao";
import MovieService from "../services/movie.service";

class MovieController {
  async getOne(req: Request<GetOneMovie>, res: Response) {
    const filter = req.params;
    const movie = await MovieService.getOne(filter);

    res.json(movie);
  }
  async get(req: Request, res: Response) {
    const filter = req.query as GetMovie;
    const movies = await MovieService.get(filter);

    res.json({ movies });
  }
}

export default new MovieController();
